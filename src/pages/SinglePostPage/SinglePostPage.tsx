import { useParams } from "react-router-dom";

const SinglePostPage = () => {
    const {postId} = useParams()
    return (
        <div>
            Single Post Page: id - {postId}
        </div>
    );
};

export { SinglePostPage };
