import React, { useState } from 'react';

const AddComment = ({ blogPostId, comments, setComments }) => {
  const [ author, setAuthor ] = useState("");
  const [ text, setText ] = useState("");

  const submitComment = () => {
    setComments({...comments, [blogPostId]: [...comments[blogPostId], { blogPostId, author, text }]})
  }

  return <div key={`add-comment-${blogPostId}`} className="blog-post-add-comment">
     <div>
      <label>
        <span>Name</span>
        <input type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)}/>
      </label>
      <div>
        <label>
          <span>Comment</span>
          <textarea name="comment" value={text} onChange={e => setText(e.target.value)}/>
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" onClick={submitComment}/>
      </div>
    </div>
  </div>;
};

export default AddComment;