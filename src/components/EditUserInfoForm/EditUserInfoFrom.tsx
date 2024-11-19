import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useUserInfoContext } from "../UserCard/useUserInfoContext";
import { useState } from "react";

const EditUserInfoFrom = () => {
    const { editUser, userInfo, close } = useUserInfoContext();
    const [updatedLesson, setUpdatedLesson] = useState(userInfo);

    const handleClickSave = () => {
        console.log(updatedLesson);
        close();
    };

    return (
        <Card
            className="!w-[500px] !h-[600px] !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px] flex flex-col"
        >
            <CardContent className="flex-1 overflow-y-auto !px-6 !py-10">
                <Typography gutterBottom variant="h5" className="!mb-6 !text-[28px]">
                    Edit user info
                </Typography>
                <form className="flex flex-col items-center justify-center gap-8">
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter name"
                        name="name"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter username"
                        name="username"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter email"
                        name="email"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter phone"
                        name="phone"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter website"
                        name="website"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter street"
                        name="street"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter suite"
                        name="suite"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter city"
                        name="city"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter zipcode"
                        name="zipcode"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter lat"
                        name="lat"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter lng"
                        name="lng"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter company name"
                        name="companyName"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter catchPhrase"
                        name="catchPhrase"
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter company bs"
                        name="bs"
                    />
                </form>
            </CardContent>
            <CardActions className="!px-4">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    className="!py-3"
                    onClick={handleClickSave}
                >
                    Save user info
                </Button>
            </CardActions>
        </Card>
    );
};

export { EditUserInfoFrom };