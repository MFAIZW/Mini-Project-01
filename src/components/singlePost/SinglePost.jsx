import React from 'react'
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='singlePostImg' src="https://cdn.wallpapersafari.com/24/13/Q6bneG.jpg" alt="" />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Lakshya</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'> 
            Through our lens, you will witness the warm rays of the rising sun, illuminating the soothing blue sky. You will be enchanted by the colorful blend during sunset, creating a sky full of hues and radiating positive energy.

The towering mountainscapes will hypnotize you with their natural beauty. You can feel the gentle touch of green meadows cascading down the slopes, captivating your heart with tranquility and peace.
            </p>
        </div>
    </div>
  )
}

export default SinglePost