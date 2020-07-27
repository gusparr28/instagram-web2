import React, { useState, useEffect } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result);
                setData(result.posts);
            })
    }, []);

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id}>
                            <h5>{item.author.name}</h5>
                            <div className="card-image">
                                <img src={item.image}/>
                            </div>
                            <div className="card-content">
                                <i className="material-icons">favorite</i>
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