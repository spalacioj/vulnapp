import { useState, useEffect } from 'react';
import { Link } from "react-router";
import '../assets/styles/CommentSection.css'; 

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [refreshKey, setRefreshKey] = useState(0);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:3000/api/comments/${postId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                const data = await response.json();
                setComments(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [postId, refreshKey]);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!newComment.trim()) {
            alert('Please enter your comment');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/api/postComment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    post_id: postId,
                    user_id: user.id,
                    comment: newComment
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to post comment');
            }

            const addedComment = await response.json();
            
            setRefreshKey(prev => prev + 1);
            
            // Clear the form
            setNewComment('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="comments-section">
            <h2>Comments</h2>
            
            {isLoading && <p>Loading comments...</p>}
            {error && <p className="error">Error: {error}</p>}
            
            <div className="comments-list">
                {comments.length === 0 && !isLoading ? (
                    <p>No comments yet. Be the first to comment!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.comment_id} className="comment">
                            <div className="comment-header">
                                <span className="comment-author">{comment.username}</span>
                                <span className="comment-date">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="comment-content" dangerouslySetInnerHTML={{ __html: comment.comment }}></p>
                        </div>
                    ))
                )}
            </div>

            {
                user ? (
                    <div className="comment-form-container">
                        <h3>Leave a Comment</h3>
                        <form onSubmit={handleSubmit} className="comment-form">
                            <div className="form-group">
                                <label htmlFor="comment">Comment:</label>
                                <textarea
                                    id="comment"
                                    rows="4"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Enter your comment"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">Post Comment</button>
                        </form>
                    </div>
                ) : (
                    <p className="login-message">
                        You must <Link to="/login">log in</Link> to post a comment.
                    </p>
                )
            }

            
        </div>
    );
};

export default CommentSection;