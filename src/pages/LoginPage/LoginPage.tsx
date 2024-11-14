import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";
import { useEffect } from "react";
import { loadUsersData } from "./loginPage.service";

const LoginPage = () => {

    useEffect(() => {
        (async () => {
            const users = await loadUsersData();
            console.log(users)
        })();
    }, [])
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-240px)]">
            <Card className="w-[500px] py-10 px-6 !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px]">
                <CardContent>
                    <Typography gutterBottom variant="h5" className="!mb-6 !text-[28px]">
                        Log in
                    </Typography>
                    <form className="flex flex-col items-center justify-center gap-8">
                        <TextField
                            required
                            fullWidth
                            type="text"
                            variant="outlined"
                            label="Enter your username"
                            name="username"
                        />
                        <TextField
                            required
                            fullWidth
                            type="email"
                            variant="outlined"
                            label="Enter your email"
                            name="email"
                        />
                    </form>
                </CardContent>
                <CardActions className="!px-4">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="!py-3"
                    >
                        Log In
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export { LoginPage };
