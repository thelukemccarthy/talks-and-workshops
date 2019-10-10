import React  from 'react';

const DisplayComments = (comments, blogPostId) => {
  const publishedComments = comments[blogPostId].filter(comment => !comment.unpublished);
  return publishedComments.map((comment, index) => {
    return (<div key={`${blogPostId}-${index}`} className="blog-post-comment">
      <span>Name {comment.author} </span>
      <span> {comment.text} </span>
    </div>)
  });
};

export default DisplayComments;