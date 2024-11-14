import { Typography } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';

const Logotype = () => {
    return (
        <div className="flex items-center justify-center text-basic-color">
            <ForumIcon sx={{ marginRight: '2px' }} />
            <Typography className="!text-[20px] !font-medium !text-[rgb(0,105,255)]">
                Whitebird Forum
            </Typography>
        </div>
    );
};

export { Logotype }; 
