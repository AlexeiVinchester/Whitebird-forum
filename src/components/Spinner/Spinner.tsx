import { CircularProgress } from "@mui/material"

const Spinner = () => {
    return (
        <div className="flex items-center justify-center inset-x-0 inset-y-0 relative">
            <CircularProgress className="text-basic-color" />
        </div>
    );
};

export { Spinner };
