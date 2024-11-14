import { Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <header className="h-20 p-5 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] flex items-center justify-between">
            <nav className="flex-1">
                <ul className="flex justify-between items-center">
                    <li className="flex-1 flex justify-center">
                        <Link to="/posts">
                            <Typography className="!text-[32px] !font-medium !text-[rgb(0,105,255)]">
                                Whitebird Forum
                            </Typography>
                        </Link>
                    </li>
                    <li>
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
