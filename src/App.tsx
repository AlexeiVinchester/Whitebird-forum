import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { SnackMessage } from "./components/SnackMessage/SnackMessage";

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <SnackMessage />
        </>
    );
};

export { App };
