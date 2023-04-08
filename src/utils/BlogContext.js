import { createContext } from "react";

const blogData = {
  ReactBlog: {
    author: "Ashutosh",
    contact: 9999999,
  },
};

const BlogContext = createContext(blogData);

export default BlogContext;
