import { Link, Outlet } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Typography } from "@mui/material";


const BasicPage = () => {
    return (
        <>
            <header className="h-20 p-5 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.2)] flex items-center justify-between">
                <Link to="/posts" className="flex-1 flex justify-center">
                    <Typography className="!text-[32px] !font-medium !text-[rgb(0,105,255)]">
                        Whitebird Forum
                    </Typography>
                </Link>
                <Link to="/profile">
                    <IconButton>
                        <AccountCircleIcon className="!text-[40px] !text-[rgb(0,105,255)]" />
                    </IconButton>
                </Link>
            </header>
            <main className="min-h-[calc(100vh-160px)]">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export { BasicPage };
