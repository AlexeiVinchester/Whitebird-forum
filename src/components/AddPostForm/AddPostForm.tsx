import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useCreateNewPost } from "./useCreateNewPost";
import { IPostContext, usePostsContext } from "../PostsContainer/usePostsContext";

export interface IAddPostForm {
    lastPostId: number;
    selectedUserId: number | null;
};

const AddPostForm = ({ lastPostId, selectedUserId }: IAddPostForm) => {
    const addPost = usePostsContext();
    const {
        title,
        body,
        handleChangeTitle,
        handleChangeBody,
        handleClickAddPost
    } = useCreateNewPost(selectedUserId, lastPostId, addPost as IPostContext);

    return (
        <Card className="!w-[500px] !py-10 !px-6 !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px]">
            <CardContent>
                <Typography gutterBottom variant="h5" className="!mb-6 !text-[28px]">
                    Create new post
                </Typography>
                <form className="flex flex-col items-center justify-center gap-8">
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter post title"
                        name="title"
                        onChange={handleChangeTitle}
                        value={title}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter post body"
                        name="body"
                        onChange={handleChangeBody}
                        value={body}
                    />
                </form>
            </CardContent>
            <CardActions className="!px-4">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="!py-3"
                    onClick={handleClickAddPost}
                    disabled={!title || !body}
                >
                    Add post
                </Button>
            </CardActions>
        </Card>
    );
};

export { AddPostForm };
