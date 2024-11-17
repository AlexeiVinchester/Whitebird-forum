import { Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";

const Header = () => {
    const currentUser = useSelector(selectIsAuthorisedUser);
    return (
        <header className="h-20 p-5 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] relative">
            <nav>
                <ul className="flex justify-between items-center relative">
                    <li className="absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/posts">
                            <Typography className="!text-[32px] !font-medium !text-[rgb(0,105,255)]">
                                Whitebird Forum Posts
                            </Typography>
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 ml-auto">
                        {currentUser.isAuthorised && (
                            <span className="!text-[20px] !font-medium !text-[rgb(0,105,255)]">
                                {currentUser.name}
                            </span>
                        )}
                        <Link to="/profile">
                            <IconButton>
                                <AccountCircleIcon className="!text-[40px] !text-[rgb(0,105,255)]" />
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header }; 
