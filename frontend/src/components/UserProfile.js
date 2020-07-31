import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import { useParams } from 'react-router-dom';

const UserProfile = () => {

    const [userProfile, setUserProfile] = useState(null);
    const { state, dispatch } = useContext(UserContext);
    const { userid } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setUserProfile(result);
            })
    }, []);

    return (
        <>
            {userProfile ?
                <div className="profile-wrapper">
                    <div className="profile-container">
                        <div>
                            <img className="profile-image"
                                src="https://images.unsplash.com/photo-1549150712-1d243024db80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                        </div>
                        <div>
                            <h4>{userProfile.user.name}</h4>
                            <h5>{userProfile.user.email}</h5>
                            <div className="profile-numbers">
                                <h5>{userProfile.posts.length} posts</h5>
                                <h5>40 followers</h5>
                                <h5>40 following</h5>
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        {
                            userProfile.posts.map(item => {
                                return (
                                    <img key={item._id} className="item" src={item.image} alt={item.title} />
                                )
                            })
                        }
                    </div>
                </div>
                : <h2>Loading...</h2>}
        </>
    );
};

export default UserProfile;

