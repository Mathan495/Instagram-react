import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useAsyncError } from "react-router-dom";

function Profile(){

    const [profile, setProfile] = useState(null);

    const [follwers, setFollowers] = useState([]);

    const [unFollowed, setUnfollowed] = useState(0);


    useEffect(() => {
        axios.get('http://localhost:3000/Profile')
        .then(data => console.log(data.data)) 
        
        axios.get('http://localhost:3000/Profile')
        .then(data => setProfile(data.data)) 
        .catch(err => console.log(err))

        axios.get('http://localhost:3000/followers')
        .then(data => setFollowers(data.data))
        .catch(err => console.log(err)) 

    }, [unFollowed]); 

    function HandleOnchange(e){
        setProfile(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const HandleUpdate = async ()=> {
        axios.put('http://localhost:3000/Profile', profile)
        .then(console.log("updated"))
        .catch(err => console.log(err)) 
    }

    const handleunfollow = async (id) => {
        axios.delete(`http://localhost:3000/followers/${id}`) 
        .then(setUnfollowed(!unFollowed)) 
        .then(alert('unFollowed'))
        .catch(err => console.log(err)) 
    }

    return(
            <div className="m-5"> 
                {profile ? (
                    <div>
                        <img src={profile.userProfilePic} className="profile rounded-circle" alt="profile" />
                        <h5>{profile.username}</h5>

                        <input type="text" value={profile.username} name="username" onChange={HandleOnchange}
                        className="form-control my-4"/>

                        <input type="text" value={profile.userProfilePic} onChange={HandleOnchange}
                        name="userProfilePic" className="form-control"/> 

                        <button onClick={HandleUpdate} className="btn btn-primary my-4">Update</button> 
                    </div>
                ) : ( 
                    <div>
                        Loading...
                    </div>
                )}

                {follwers.length > 0 ? ( 
                    follwers.map((follwer) => (
                        <div key={follwer.id} className="d-flex my-2"> 
                            {follwer.username} 
                            <button className="btn btn-danger ms-auto" onClick={() => handleunfollow(follwer.id)}>unFollow</button>
                        </div>

                    ))
                ): 
                <div>
                    Loading...
                </div>
                }


            </div> 
    )

}
export default Profile