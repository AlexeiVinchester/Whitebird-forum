import { Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthorisedUser } from "../../features/authorisedUser/authorisedUserSelectors";
import { iconMap } from "../../share/iconsMap";
import { ROUTES } from "../../router/routes";

const Header = () => {
    const currentUser = useSelector(selectIsAuthorisedUser);
    return (
        <header className="h-20 p-5 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] relative">
            <nav>
                <ul className="flex justify-between items-center relative">
                    <li className="absolute left-1/2 transform -translate-x-1/2">
                        <Link to={ROUTES.POSTS}>
                            <Typography className="!text-[32px] !font-medium !text-[rgb(0,105,255)]">
                                Posts
                            </Typography>
                        </Link>
                    </li>
                    <li className="flex items-center gap-2 ml-auto">
                        {currentUser.isAuthorised && (
                            <span className="!text-[20px] !font-medium !text-[rgb(0,105,255)]">
                                {currentUser.name}
                            </span>
                        )}
                        <Link to={ROUTES.PROFILE}>
                            <IconButton>
                                {iconMap.profilePage}
                            </IconButton>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header }; 
