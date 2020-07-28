import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {

    const [data, setData] = useState([]);
    const { state, dispatch } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:5000/posts", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setData(result.posts);
            })
    }, []);

    const likePost = (id) => {
        fetch("http://localhost:5000/like", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result;
                    } else {
                        return item;
                    };
                });
                setData(newData);
            }).catch(err => console.error(err));
    };

    const unlikePost = (id) => {
        fetch("http://localhost:5000/unlike", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result;
                    } else {
                        return item;
                    };
                });
                setData(newData);
            }).catch(err => console.error(err));
    };

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>{item.author.name}</h5>
                            <div className="card-image">
                                <img src={item.image} />
                            </div>
                            <div className="card-content">
                                <i className="material-icons favorite-icon">favorite</i>
                                {item.likes.includes(state._id)
                                    ? <i
                                        onClick={() => unlikePost(item._id)}
                                        className="material-icons">
                                        thumb_down
                                    </i>
                                    :
                                    <i
                                        onClick={() => likePost(item._id)}
                                        className="material-icons">
                                        thumb_up
                                    </i>
                                }
                                <h6>{item.likes.length} likes</h6>
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                                <input type="text" placeholder="Add a comment" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;