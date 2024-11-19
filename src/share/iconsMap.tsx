import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StreetviewIcon from '@mui/icons-material/Streetview';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InboxIcon from '@mui/icons-material/Inbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HelpIcon from '@mui/icons-material/Help';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentIcon from '@mui/icons-material/AddComment';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ErrorIcon from '@mui/icons-material/Error';

export const iconMap: Record<string, React.ReactElement> = {
    email: <EmailIcon />,
    phone: <PhoneIcon />,
    website: <LanguageIcon />,
    street: <StreetviewIcon />,
    suite: <ApartmentIcon />,
    city: <LocationCityIcon />,
    zipcode: <InboxIcon />,
    geo: <LocationOnIcon />,
    companyName: <BusinessIcon />,
    companyCatchPhrase: <MicNoneIcon />,
    companyBs: <HelpIcon />,
    logOut: <LogoutIcon />,
    showFullInfo: <KeyboardArrowDownIcon />,
    hideFullInfo: <KeyboardArrowUpIcon />,
    admin: <AdminPanelSettingsIcon />,
    openPost: <OpenInNewIcon />,
    likePost: <ThumbUpAltIcon />,
    savePost: <BookmarkIcon />,
    backToAllPosts: <ArrowBackIcon />,
    comments: <CommentIcon />,
    deletePost: <DeleteIcon />,
    newComment: <AddCommentIcon fontSize="large" />,
    allUsersPage: <GroupIcon />,
    profilePage: <AccountCircleIcon className="!text-[40px] !text-[rgb(0,105,255)]" />,
    addNewPost: <PostAddIcon fontSize="large" className="!text-basic-color" />,
    error: <ErrorIcon />
};