import { createContext } from "react";

const blogData = {
  ReactBlog: {
    author: "Ashutosh",
    contact: 9999999,
  },
};

const BlogContext = createContext(blogData);  // Create the context with default value

export default BlogContext;
