import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';

export const iconButtons: Record<string, JSX.Element> = {
    ["Like"]: <ThumbUpAltIcon />,
    ["Save"]: <BookmarkIcon />,
    ["Comments"]: <CommentIcon />,
    ["All posts"]: <ArrowBackIcon />,
};