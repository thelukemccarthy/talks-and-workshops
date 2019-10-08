import React, { useState } from 'react';

const AddComment = (blogPostId, comments, setComments) => {
  const blankComment = {
    blogPostId,
    author: "",
    text: "",
  };

  const [newComment, setNewComment] = useState(blankComment);

  const updateNewComment = (event) => {
    console.log('name: ', event.target.name, ' value: ', event.target.value);
    const updatedBlogPost = Object.assign({}, newComment, {[event.target.name]: event.target.value});
    setNewComment(updatedBlogPost);
  };

  const addComment = () => {
    setComments([...comments, {...newComment}]);
    setNewComment(blankComment);
  };

  return <div key={`add-comment-${blogPostId}`} className="blog-post-add-comment">
    <div>
      <label>
        <span>Name</span>
        <input type="text" name="author" value={newComment.author} onChange={updateNewComment}/>
      </label>
      <div>
        <label>
          <span>Comment</span>
          <textarea name="text" value={newComment.text} onChange={updateNewComment}/>
        </label>
      </div>
      <div>
        <input type="submit" value="Comment" onClick={addComment}/>
      </div>
    </div>
  </div>
};

export default AddComment