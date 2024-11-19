import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useEditUser } from "./useEditUser";

const EditUserInfoFrom = () => {
    const { handleClickSave, handleChange, updatedUserInfo } = useEditUser();

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
                        defaultValue={updatedUserInfo.name}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter username"
                        name="username"
                        defaultValue={updatedUserInfo.username}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter email"
                        name="email"
                        defaultValue={updatedUserInfo.email}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter phone"
                        name="phone"
                        defaultValue={updatedUserInfo.phone}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter website"
                        name="website"
                        defaultValue={updatedUserInfo.website}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter street"
                        name="street"
                        defaultValue={updatedUserInfo.address.street}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter suite"
                        name="suite"
                        defaultValue={updatedUserInfo.address.suite}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter city"
                        name="city"
                        defaultValue={updatedUserInfo.address.city}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter zipcode"
                        name="zipcode"
                        defaultValue={updatedUserInfo.address.zipcode}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter lat"
                        name="lat"
                        defaultValue={updatedUserInfo.address.geo.lat}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter lng"
                        name="lng"
                        defaultValue={updatedUserInfo.address.geo.lng}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter company name"
                        name="companyName"
                        defaultValue={updatedUserInfo.company.name}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter catchPhrase"
                        name="catchPhrase"
                        defaultValue={updatedUserInfo.company.catchPhrase}

                        onChange={handleChange}
                    />
                    <TextField
                        required
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Enter company bs"
                        name="bs"
                        defaultValue={updatedUserInfo.company.bs}

                        onChange={handleChange}
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