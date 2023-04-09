import React from 'react';
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

    
const Content = ({content,addTobookmark, totalTimes }) => {
  
    const {name,img,author,id,time,price,title}=  content
    return (
        <div>
            <div className="content-cart">
                <img className='content-img' src={img} alt="" />
                <div className="authorDetails">
                   
                    <div className="pic">
                    <img src={author} alt="" />
                    <div className="name">
                       <h5>{name}</h5> 
                        <p>march 14 (4 days ago)</p>
                    </div>

                    </div>
                    <h5 className='bookmark-button' onClick={()=>addTobookmark(title)} >  {time} min read  <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon></h5>
                </div>
                <h1 className='title'>{title}</h1>
                <p>#beginners #programming</p>
                <h4  className='color' onClick={()=> totalTimes(time)} >  <u > marks and read </u></h4>
            </div>
        </div>
    );
};

export default Content;