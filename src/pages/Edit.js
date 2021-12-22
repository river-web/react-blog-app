import { useParams } from 'react-router';
import useFetch from "../config/useFetch";
import BlogForm from "./BlogForm";

const EditBlog = () => {
    const { id } = useParams();
    const { data: blog } = useFetch("http://localhost:5500/blogs/" + id,);

    return (
        <>
            {blog && <BlogForm getTitle={blog.title} getAuthor={blog.author} getDescritpion={blog.description} />}
        </>
    );
}

export default EditBlog;