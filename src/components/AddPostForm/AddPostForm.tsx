import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useCallback, useState } from "react";
import { ICustomPost } from "../../types/post.interface";

interface IAddPostForm {
    lastId: number;
    userId: number;
    closeModal: () => void;
    addPost: (post: ICustomPost) => void;
};

const AddPostForm = ({lastId, userId, closeModal, addPost}: IAddPostForm) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    }, []);

    const handleChangeBody = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBody(e.target.value);
    }, []);

    const handleClickAddPost = () => {
        const newPost: ICustomPost = {
            userId,
            id: lastId + 1,
            title,
            body,
            isLiked: false,
            isSaved: false
        };
        addPost(newPost);
        closeModal();
    };

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
                >
                    Add post
                </Button>
            </CardActions>
        </Card>
    );
};

export { AddPostForm };
