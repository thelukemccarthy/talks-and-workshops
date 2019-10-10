import React from 'react';

const AddComment = (blogPostId, comments, setComments) => {
  const blankComment = {
    blogPostId,
    author: "",
    text: "",
    unpublished: true
  };

  if(!(comments[blogPostId].find(comment => comment.unpublished))){
    const commentsCopy = { ...comments };
    commentsCopy[blogPostId].push(blankComment);
    setComments(commentsCopy);
  }

  const updateNewComment = (event) => {
    const updatedBlogPost = Object.assign({}, comments, comments[blogPostId][comments[blogPostId].length -1][event.target.name] = event.target.value);
    setComments(updatedBlogPost);
  };

  const addComment = () => {
    const updatedBlogPost = Object.assign({}, comments, delete comments[blogPostId][comments[blogPostId].length -1].unpublished);
    setComments(updatedBlogPost);
  };

  const getValue = (name) => (comments[blogPostId].find((comment) => comment.unpublished)[name]);

  return <div key={`add-comment-${blogPostId}`} className="blog-post-add-comment">
    <div>
      <label>
        <span>Name</span>
        <input type="text" name="author" value={getValue('author')} onChange={updateNewComment}/>
      </label>
      <div>
        <label>
          <span>Comment</span>
          <textarea name="text" value={getValue('text')} onChange={updateNewComment}/>
        </label>
      </div>
      <div>
        <input type="submit" value="Comment" onClick={addComment}/>
      </div>
    </div>
  </div>
};

export default AddComment