import { Link } from 'react-router-dom';

const Blogs = ({ blogs, title }) => {
    return (
        <>
            <div className="blog-list">
                <h2>{title}</h2>

                {
                    blogs.map(blog => (
                        <div className="blog-preview" key={blog._id}>
                            <Link to={`/blogs/${blog._id}`}>
                                <h3>{blog.title}</h3>
                                <p>Written by <strong>{blog.author}</strong></p>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </>
    );
}

export default Blogs;