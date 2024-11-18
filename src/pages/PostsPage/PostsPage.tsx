import { Spinner } from "../../components/Spinner/Spinner";
import { useSelectedUsers } from "./useSelectedUsers";
import { IApiUser } from "../../types/user.interface";
import { PostsList } from "../../components/PostsList/PostsList";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { IconButton } from "@mui/material";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const PostsPage = () => {
    const {
        handleChangeSelect,
        selectedUserId,
        isLoadingUsers,
        apiUsers
    } = useSelectedUsers();

    const isAuthorised = useCurrentUser().isAuthorised;

    if (isLoadingUsers) {
        return <Spinner />
    }

    const handleClickAdd = () => {

    }

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center mb-2">
                <select
                    className="rounded-[22px] p-2 border-2 focus:border-none bg-back-side-statistics  border-basic-color"
                    onChange={handleChangeSelect}
                >
                    <option value="">All</option>
                    {
                        apiUsers?.map(user => (
                            <option
                                key={user.id}
                                value={user.id}
                            >
                                {user.name}
                            </option>
                        ))
                    }
                </select>
                {isAuthorised &&
                    <IconButton
                        onClick={handleClickAdd}
                        value="Add new post"

                    >
                        <PostAddIcon fontSize="large" className="!text-basic-color" />
                    </IconButton>}
            </div>
            <PostsList apiUsers={apiUsers as IApiUser[]} selectedUserId={selectedUserId} />
        </div>
    );
};

export { PostsPage };
