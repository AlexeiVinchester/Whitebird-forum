import { Card } from "@mui/material"
import ErrorIcon from '@mui/icons-material/Error';

const AbsentData = () => {
    return (
        <Card
            variant="outlined"
            className="!w-[200px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] !text-basic-color !py-8 "
        >
            <div className="flex items-center justify-center gap-1">
                <ErrorIcon />
                <p>Yooops!</p>
            </div>
            <p className="text-center">There are no data!</p>
        </Card>
    );
};

export { AbsentData }; 
