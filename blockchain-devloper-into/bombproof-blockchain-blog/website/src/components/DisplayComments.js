import React  from 'react';

const DisplayComments = ({ comments, blogPostId }) => {
  const publishedComments = (blogPostId && comments[blogPostId] || []).filter(comment => !comment.unpublished);

  return publishedComments.map(({ author, text }, index) => (
    <div key={`${blogPostId}-${index}`} className='blog-post-comment' >
      <span>Name: {author} </span>
      <span> {text} </span>
    </div>
  ));
};

export default DisplayComments;