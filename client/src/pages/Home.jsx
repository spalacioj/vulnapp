import PostCard from "../components/PostCard";
import Header from "../components/Header";
import '../assets/styles/Home.css';
import { useState, useEffect } from "react";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/postsDescription');

                if(!response.ok){
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data);

            } catch (err) {
             setError(err.message)   
            }
        }
        fetchPosts();
    },[]);
    return (
        <>
            <Header />
            <div className="blog-home">
                <h1>Welcome to Our Blog - Explore, Learn, and Share</h1>
                <p>
                    Discover insightful articles, expert opinions, and the latest trends on topics that matter to you. 
                    From technology to lifestyle, we bring you fresh content every day. Join the conversation and be 
                    part of our growing community!
                </p>
                <div className="home-post-container">
                    {posts.map(post => (
                        <PostCard key={post.post_id} {...post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;