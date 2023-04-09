import React, { useEffect, useState } from 'react';
import './Main.css'
import Content from '../content/Content';

const Main = () => {
    const [contents, setcontent] = useState([])
    const [Blognames, setBlogname] = useState([])
    const [times, setNewtime] = useState([])


    useEffect(() => {
        fetch('contents.json')
            .then(res => res.json())
            .then(data => setcontent(data))
    }, []);

    const addtoBookmark = name => {
       
        const add = [...Blognames, name]
        setBlogname(add)
    }
    const totalTimes = time => {
        let newtime = time + times 
        setNewtime(parseInt(newtime))
      
    }


    return (
        <div className='parent-div'>
            <div className="content">
                {
                    contents.map(content => <Content
                        key={content.id}
                        content={content}
                        addTobookmark={addtoBookmark}
                        totalTimes ={totalTimes}
                    ></Content>)
                }



            </div>
            <div className="content-details">

                <h2>Spent time on read: {times} </h2>


                <div className="title">

                    <br />
                    <h3>Total Bookmark: {Blognames.length} </h3>
                    <br />

                    {
                        Blognames.map(blog => <h3 className='titles'>{blog}</h3>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Main;