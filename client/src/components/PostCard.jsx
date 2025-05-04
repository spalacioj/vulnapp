import '../assets/styles/PostCard.css';
import { Link } from "react-router";

function PostCard({ post_id, title, author, description }) {
  return (
    <Link to={`/post/${post_id}`}  className='post-card-link'>
      <div className="post-card">
        <h2 className="post-title">{title}</h2>
        <p className="post-author">by <b>{author}</b></p>
        <p className="post-description">{description}</p>
      </div>
    </Link>
  );

}

export default PostCard;