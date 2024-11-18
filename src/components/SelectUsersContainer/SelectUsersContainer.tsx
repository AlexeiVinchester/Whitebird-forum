import { IApiUser } from "../../types/user.interface";

interface ISelectUsersContainer {
    handleChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    apiUsers: IApiUser[];
}

export const SelectUsersContainer = ({ handleChangeSelect, apiUsers }: ISelectUsersContainer) => {
    return (
        <div className="flex justify-center items-center mb-2">
            <select
                className="rounded-[22px] p-2 border-2 focus:border-none bg-back-side-statistics  border-basic-color"
                onChange={handleChangeSelect}
            >
                <option value="">All</option>
                {
                    apiUsers.map(user => (
                        <option
                            key={user.id}
                            value={user.id}
                        >
                            {user.name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};