import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories(){


    const navigate = useNavigate();

    const [Stories, setStories] = useState([]);

    let tot = 0;

    useEffect(() => {
        fetch('http://localhost:3000/Story') 
        .then(data => data.json())
        .then(data => setStories(data))
        .catch(err => console.log(err))
    }, []); 

    return (
        <div className="story d-flex justify-content-center align-items-center"> 
            <div className="d-none">{tot = Stories.length}</div>
            {Stories.length > 0 ? (
                Stories.map((story) => (
                    <div key={story.id} className=" sty" onClick={() => {navigate(`/stry/${story.id}/${tot}`)}}> 
                        <div className="gradient-border">
                            <img className="stry-dp rounded-circle" src={story.user.userProfilePic} alt="story-dp" /> 
                        </div>
                        <p className="text-truncate" style={{width: "50px"}}>{story.user.username}</p>
                    </div> 
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default Stories