import useFetch from "./../config/useFetch";
import Blogs from "./Blogs";

const Home = () => {
    const { data: blogs, loading, error } = useFetch("http://localhost:5500/blogs");
    
    return (
        <div>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;