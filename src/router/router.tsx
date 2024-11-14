import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { BasicPage } from "../pages/BasicPage/BasicPage";
import { PostsPage } from "../pages/PostsPage/PostsPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { SinglePostPage } from "../pages/SinglePostPage/SinglePostPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BasicPage />}>
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/posts/:postId" element={<SinglePostPage />} />
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