import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className='post'>
        <img className='postImg' src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Through our lens, you will witness the warm rays of the rising sun, illuminating the soothing blue sky. You will be enchanted by the colorful blend during sunset, creating a sky full of hues and radiating positive energy.

The towering mountainscapes will hypnotize you with their natural beauty. You can feel the gentle touch of green meadows cascading down the slopes, captivating your heart with tranquility and peace.</p>
    </div>
  )
}

export default Post