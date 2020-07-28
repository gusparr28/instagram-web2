import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

const Profile = () => {

    const [images, setImages] = useState([]);
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5000/userPosts", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setImages(result.userPosts)
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div className="profile-wrapper">
            <div className="profile-container">
                <div>
                    <img className="profile-image"
                        src="https://images.unsplash.com/photo-1549150712-1d243024db80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h4>{state ? state.name : "Loading..."}</h4>
                    <div className="profile-numbers">
                        <h5>40 posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    images.map(item => {
                        return (
                            <img key={item._id} className="item" src={item.image} alt={item.title} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Profile;

