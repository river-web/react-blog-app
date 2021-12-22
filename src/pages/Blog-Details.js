import { useParams } from 'react-router';
import useFetch from './../config/useFetch';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const url = "http://localhost:5500/blogs/";
    const { data: blog, loading, error } = useFetch(url + id);
    const navigation = useNavigate();

    const handleDelete = () => {
        fetch(url + '/delete/' + blog._id, {
            method: 'DELETE'
        }).then(() => {
            navigation('/');
        }).catch(err => {
            console.log(err.message);
        });
    };

    return (
        <>
            <div className="blog-details">
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {blog && (
                    <article>
                        <div className="blog">
                            <h2>
                                {blog.title}
                                <Link to={`/update-blog/${blog._id}`}>
                                    <BsPencilSquare className="edit-logo" />
                                </Link>
                            </h2>
                            <p>Written by <strong>{blog.author}</strong></p>
                            <div>{blog.description}</div>
                        </div>

                        <div className="buttonGroup">
                            <Link to="/">Go Back</Link>
                            <button className="deleteBtn" onClick={handleDelete}>Delete</button>
                        </div>
                    </article>
                )}

            </div>
        </>
    );
}

export default BlogDetails;