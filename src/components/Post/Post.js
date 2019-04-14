import React from 'react'
import "./Post.css"
import unknown from "./icon-of-unknown-person.png"

const Post = ({ post }) => (
    <div className="bg">
        <hr/>
        <h6>
            {
                post.authorImgSrc
                 ? 
                 <img className="authorImg" src={ post.authorImgSrc } alt="author-img"/>

                 :
                <img className="authorImg" src={unknown} alt="unknown person"/>
            }
            
            <a className="authorLink" href={ post.authorLink }>{post.author}</a>
        </h6>
        <h3>
            <a className="title" href={ post.link }>{ post.title }</a>
        </h3>
        { post.imgSrc &&
                <img className="img" src={ post.imgSrc } alt="post"/>
            }
        <hr/>
    </div>
    
)

export default Post