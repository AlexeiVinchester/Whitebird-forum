import { Typography } from "@mui/material";
import { iconMap } from "../../share/iconsMap";

const Logotype = () => {
    return (
        <div className="flex items-center justify-center text-basic-color">
            {iconMap.forum}
            <Typography className="!text-[20px] !font-medium !text-[rgb(0,105,255)]">
                Whitebird Forum
            </Typography>
        </div>
    );
};

export { Logotype }; 
