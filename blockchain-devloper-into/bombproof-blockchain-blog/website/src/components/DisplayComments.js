import React  from 'react';

const DisplayComments = (comments, blogPostId) => {
  let relevant = comments.filter(comment => comment.blogPostId === blogPostId);
  return relevant.map((comment, index) => {
    return (<div key={`${blogPostId}-${index}`} className="blog-post-comment">
      <span>Name {comment.author} </span>
      <span> {comment.text} </span>
    </div>)
  });
};

export default DisplayComments;