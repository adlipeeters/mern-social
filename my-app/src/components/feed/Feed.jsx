import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axios.get("posts/timeline/61b8b6d5b9135e9235a592eb");
        setPosts(res.data)
    };
        fetchPosts();
    }, []);

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
               ))} 
            </div>
        </div>
    );
}
