import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetail = () => {
    const { id } = useParams()
    const { res: post, isPending, error } = useFetch('http://localhost:8000/posts/'+ id)
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/posts/'+ id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { post && (
                <article>
                    <h2> { post.title } </h2>
                    <p> Written by - { post.author } </p>
                    <div> {post.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default PostDetail;