import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useEditUser } from "./useEditUser";

const EditUserInfoFrom = () => {
    const { handleClickSave, handleChange, fields } = useEditUser();

    return (
        <Card
            className="!w-[500px] !h-[600px] !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px] flex flex-col"
        >
            <CardContent className="flex-1 overflow-y-auto !px-6 !py-10">
                <Typography gutterBottom variant="h5" className="!mb-6 !text-[28px]">
                    Edit user info
                </Typography>
                <form className="flex flex-col items-center justify-center gap-8">
                    {
                        fields.map((field) => (
                            <TextField
                                key={field.name}
                                required
                                fullWidth
                                type="text"
                                variant="outlined"
                                label={field.label}
                                name={field.name}
                                defaultValue={field.defaultValue}
                                onChange={handleChange}
                            />
                        ))
                    }
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