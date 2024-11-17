import { Spinner } from "../Spinner/Spinner";
import { IApiUser } from "../../types/user.interface";
import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Divider, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CommentsContainer } from "../CommentsContainer/CommentsContainer";
import { useSinglePostCard } from "./useSinglePostCard";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";

interface ISinglePostCard {
    apiUsers: IApiUser[] | null;
};

const SinglePostCard = ({ apiUsers }: ISinglePostCard) => {
    const {
        currentUserId,
        isShowComments,
        postId,
        post,
        isLoadingPost,
        postAuthorName,
        buttonsConfig,
        handleClickDelete,
    } = useSinglePostCard(apiUsers)

    if (isLoadingPost) {
        return <Spinner />
    }

    return (
        post ?
            <Card
                variant="outlined"
                className="!w-[90%] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
            >
                <div className="flex justify-between relative">
                    <CardHeader
                        avatar={
                            <Avatar
                                src="/assets/avatar.png"
                                className="!w-10 !h-10"
                            />
                        }
                        title={
                            <h3 className="text-3xl font-bold text-blue-700">
                                {postAuthorName}
                            </h3>}
                    />
                    {
                        currentUserId === post.userId &&
                        <IconButton
                            className="!relative !right-2 !h-full !top-3"
                            onClick={handleClickDelete}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                </div>

                <CardContent>
                    <div className="flex items-center mb-2 gap-2">
                        <Typography variant="h4" component="p">
                            {post.title}
                        </Typography>
                    </div>
                    <Divider />
                    <Typography variant="h6" component="p">
                        {post.body}
                    </Typography>
                </CardContent>

                <CardActions>
                    <div className=" w-full flex justify-around items-center">
                        {buttonsConfig.map(btn => (
                            <StyledIconButton
                                key={btn.id}
                                onClick={btn.onClick}
                                value={btn.value}
                                clickFlag={btn.clickFlag}
                                color={btn.color}
                            >
                                {btn.children}
                            </StyledIconButton>
                        ))}
                    </div>
                </CardActions>
                {isShowComments &&
                    <CardContent>
                        <CommentsContainer postId={postId} />
                    </CardContent>
                }
            </Card>
            :
            (<p>Post was deleted</p>)
    );
};

export { SinglePostCard };