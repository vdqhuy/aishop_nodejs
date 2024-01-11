import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data)
        });
    }, []);
    return (
        <div className="App">
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

export default App