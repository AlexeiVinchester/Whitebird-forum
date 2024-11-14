import { Card, CardContent, Typography, TextField, CardActions, Button } from "@mui/material";

const LoginPage = () => {
    
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-240px)]">
            <Card className="w-[400px] py-2.5 px-1.5 !shadow-[0_5px_10px_#ABB2B9] !rounded-[16px]">
                <CardContent>
                    <Typography gutterBottom variant="h5" className="!mb-6">Log In</Typography>
                    <form className="flex flex-col items-center justify-center gap-4">
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
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Log In
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export { LoginPage };
