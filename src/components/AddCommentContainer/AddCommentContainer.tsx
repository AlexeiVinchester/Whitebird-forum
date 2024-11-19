import { useNewComment } from "./useNewComment";
import { StyledIconButton } from "../StyledIconButton/StyledIconButton";
import { iconMap } from "../../share/iconsMap";

interface IAddCommentContainer {
    onClick: (body: string) => void;
};

export const AddCommentContainer = ({ onClick }: IAddCommentContainer) => {
    const { commentBody, handleChange, handleClickAdd } = useNewComment(onClick);

    return (
        <div className="flex justify-center items-center mb-3">
            <input
                className="w-[100%] rounded-[22px] py-2 pl-4 border-2 border-gray-300 focus:border-basic-color focus:outline-none"
                type="text"
                placeholder="Add a comment"
                value={commentBody}
                onChange={handleChange}
            />
            <StyledIconButton onClick={handleClickAdd}>
                {iconMap.newComment}
            </StyledIconButton>
        </div>
    );
};