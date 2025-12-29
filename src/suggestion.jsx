import axios from "axios";
import React, { useEffect, useState } from "react";

function Suggestion() {

    const [profiles, setProfiles] = useState(null);
    const [suggests, setSuggest] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/Profile')
            .then(data => data.json())
            .then(data => setProfiles(data))
            .catch(err => console.log(err))

        fetch('http://localhost:3000/suggestion')
            .then(data => data.json())
            .then(data => setSuggest(data))
            .catch(err => console.log(err))

    }, []);

    const handleclick = async (id, username) => {
        axios.post('http://localhost:3000/followers' , {"id" : id, "username" : username})
        .then(alert('followed'))
        .catch(err => console.log(err)) 
    }




    return (
        <div>
            <div className="suggestions w-75 m-4 ">
                {profiles ?
                    <div className="d-flex comp"> 
                        <img className="dp rounded-circle" src={profiles.userProfilePic} alt="Profile-Pic" />
                        <div className="prf">
                            <h5>{profiles.username}</h5> 
                            <small className="prof-name">Mathan Kumar</small> 
                        </div>
                        <small className="ms-auto text-primary bts">Switch</small> 
                    </div>
                    : <p>Loading...</p>}

                    <div className="d-flex mt-3">
                        <p>Suggested for you</p>
                        <b className="ms-auto views">See All</b> 
                    </div>

                    {suggests.length > 0 ? (
                        <div>
                            {suggests.map((suggest) => (
                                <div key={suggest.id}>
                                    <div className="d-flex comp mb-0"> 
                                        <img className="dp rounded-circle" src={suggest.userProfilePic} alt="suggestion profile picture" />
                                        <div className="prf"> 
                                            <h5>{suggest.username}</h5>  
                                            <small className="pr-name">suggested for you</small>
                                        </div>
                                        <a className="bts-1 ms-auto" 
                                        onClick={() => handleclick(suggest.id,suggest.username)}> Follow </a> 
                                    </div>
                                </div> 
                            ))} 
                        </div>
                    ) : (
                        <div>
                            Loading... 
                        </div>
                    )}
            </div>

        </div>


    );
}
export default Suggestion