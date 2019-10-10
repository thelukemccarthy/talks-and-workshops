const blogPostData = [
  {
    id:"0b66024713c44d84989699e3f6b60fb0cc69c8451f2f19732aa67b8fbe961d19",
    title: "Blog Post",
    published: "19-Sep-2019",
    author: "Luke McCarthy",
    content: "This is a blog post that will live on the blockchain",
  },
  {
    id:"cf8227da12707f6efa8d1dc6f4d0e942389c6b068d7bcb27af11b536f231daf5",
    title: "Blog Post 2",
    published: "19-Sep-2019",
    author: "Luke McCarthy",
    content: "This is another blog post ",
  },
];

const getBlogPosts = () => {
  return blogPostData;
};

export default getBlogPosts;