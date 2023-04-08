import { useContext } from "react"
import BlogContext from "../utils/BlogContext"

const Blog = () => {
  const { ReactBlog } = useContext(BlogContext);  // Read and subscribe to the context

  return (
    <div>
      <span>{ReactBlog.author}</span>
    </div>
  )
}

export default Blog;