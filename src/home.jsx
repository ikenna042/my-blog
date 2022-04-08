import BlogList from "./postlist";
import useFetch from "./useFetch";

const Home = () => {
    const { res: posts, isPending, error } = useFetch('http://localhost:8000/posts')

    return ( 
        <div className="home">
            {error && <div> {error} </div> }
            {isPending && <div>Loading...</div> }
            {posts && <BlogList posts={posts} title='All Posts' />}
        </div>
     );
}
 
export default Home;