import { useParams } from 'react-router';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogForm = ({ getTitle, getAuthor, getDescritpion }) => {

    const { id } = useParams();
    const [title, setTitle] = useState(getTitle);
    const [author, setAuthor] = useState(getAuthor);
    const [description, setDescription] = useState(getDescritpion);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    let formTitle, buttonTitle, buttonPendingTitle, url, method = '';

    if (id === undefined) {
        formTitle = 'Create New Blog';
        buttonTitle = 'Save';
        buttonPendingTitle = 'Saving...';
        url = 'http://localhost:5500/blogs/new/';
        method = 'POST';
    } else {
        formTitle = 'Update Blog';
        buttonTitle = 'Update';
        buttonPendingTitle = 'Updating...';
        method = 'PATCH';
        url = 'http://localhost:5500/blogs/update/' + id;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, description };
        setIsPending(true);

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            navigate('/');
        }).catch(err => {
            console.log(err.message);
        });

    };

    return (
        <div className="blogForm">
            <h2>{formTitle}</h2>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />

                <label>Author:</label>
                <input type="text" value={author} required onChange={(e) => setAuthor(e.target.value)} />

                <label>Description:</label>
                <textarea value={description} required onChange={(e) => setDescription(e.target.value)} rows="6" ></textarea>

                <div className="buttonGroup">
                    <Link to='/'>Cancel</Link>
                    {!isPending && <button type="submit">{buttonTitle}</button>}
                    {isPending && <button>{buttonPendingTitle}</button>}
                </div>
            </form>
        </div>
    );
}

export default BlogForm;