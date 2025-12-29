import React, { useEffect, useState } from "react";

function Posts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/posts')  
        .then(data => data.json())
        .then((data) => setPosts(data))
        .catch(err => console.log(err))

    }, []);


    return (
        <div className="d-flex justify-content-center align-items-center"> 
            {posts.length > 0 ? (
                <div className="my-4 ">
                    {posts.map((post) => (
                        <div key={post.id}>
                            <div className="d-flex">
                                <img className="dp rounded-circle" src={post.user.userProfilePic} alt="Profile-Pic" />
                                <h5>{post.user.username}</h5> 
                            </div> 
                            <img className="post" src={post.postImage} alt="Post-Images" />
                            <div className="post-icons">
                                {/* <i className ="bi bi-heart"></i> */}
                                <i class="bi bi-heart-fill"></i>
                                <i className ="bi bi-chat"></i>
                                <i className ="bi bi-send"></i> 
                            </div>
                            <div>
                                <b>• {post.likes} Likes</b>
                                <p>{post.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ):(
                <div>
                    Loading Posts
                </div>
            )}
        </div>
    );
}
export default Posts