import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { BasicPage } from "../pages/BasicPage/BasicPage";
import { PostsPage } from "../pages/PostsPage/PostsPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { SinglePostPage } from "../pages/SinglePostPage/SinglePostPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AuthProvider } from "../layouts/AuthProvider/AuthProvider";
import { AbsentData } from "../components/AbsentData/AbsentData";
import { UsersPage } from "../pages/UsersPage/UsersPage";
import { ROUTES } from "./routes";
import { UnAuthProvider } from "../layouts/UnAuthProvider/UnAuthProvider";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTES.HOME} element={<BasicPage />}>
            <Route path={ROUTES.POSTS} element={<PostsPage />} />
            <Route path={ROUTES.PROFILE} element={
                <AuthProvider>
                    <ProfilePage />
                </AuthProvider>
            } />
            <Route path={ROUTES.POST_DETAIL} element={<SinglePostPage />} />
            <Route path={ROUTES.LOGIN} element={
                <UnAuthProvider>
                    <LoginPage />
                </UnAuthProvider>
            } />
            <Route path={ROUTES.USERS} element={
                <AuthProvider>
                    <UsersPage />
                </AuthProvider>
            }
            />
            <Route path={ROUTES.NOT_FOUND} element={<AbsentData title="Not found page!" />} />
        </Route>
    ),
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        }
    });

export { router };