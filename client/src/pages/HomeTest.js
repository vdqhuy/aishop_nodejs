import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data)
        });
    }, []);

    return (
        <div className="home">
            {listOfPosts.map((value, key) => {
                return (
                    <div className='post'>
                        <div className='post--title'>Title: {value.title} </div>
                        <div className='post--text'>Post text: {value.postText} </div>
                        <div className='post--username'>Username: {value.username} </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Home