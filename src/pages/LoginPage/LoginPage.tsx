import { useEffect, useState } from "react";
import { loadUsersData } from "./loginPage.service";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { IApiUser } from "../../types/user.interface";

const LoginPage = () => {
    const [apiUsers, setUsers] = useState<IApiUser[]>([]);
    useEffect(() => {
        (async () => {
            const users = await loadUsersData();
            setUsers(users)
        })();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-240px)]">
            <LoginForm users={apiUsers}/>
        </div>
    );
};

export { LoginPage };
