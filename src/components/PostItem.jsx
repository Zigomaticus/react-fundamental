import React from 'react'

function PostItem() {
  return (
    <div className="post">
        <div className="post__content">
          <strong>1. JS</strong>
          <div>JS - programming language</div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
  )
}

export default PostItem