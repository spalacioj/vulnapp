import { useEffect, useState } from 'react';
import '../assets/styles/Post.css'
import { useParams } from "react-router";
import Header from '../components/Header';
import CommentSection from '../components/CommentSection';
function Post(){
    const { id } = useParams()
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [error, setError] = useState('');
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/posts/${id}`);

                if(!response.ok){
                    throw new Error("Post not Found");
                }

                const data = await response.json();
                setPost(data);

                if(data.author_id){
                    const authorResponse = await fetch(`http://localhost:3000/api/users/${data.author_id}`);
                    if(!authorResponse.ok){
                        throw new Error("Author not found");                        
                    }
                    const authorData = await authorResponse.json();
                    setAuthor(authorData)
                }

            } catch (err) {
                setError(err.message);
            }
        };
        
        fetchPost();
    },[]);

    if (error) return <p>{error}</p>;
    if (!post) return <p>Loading...</p>;
    
    return(
        <>
        <Header/>
        <div className="post-container">
            <h1>{post.title}</h1>
            <div className="post-meta">
                <span>Written by: {author ? author.username : 'Unknown author'}</span>
                {post.date && <span>{new Date(post.date).toLocaleDateString()}</span>}
            </div>
            {post.content.split('\r\n\r\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}

            <CommentSection postId={id} />
        </div>
        </>
    )
}

export default Post;