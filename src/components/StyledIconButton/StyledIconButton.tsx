import { IconButton } from "@mui/material";

export interface IStyledIconButton {
    clickFlag?: boolean;
    value?: string;
    children: React.ReactNode;
    onClick: () => void;
    color?: string
};

const StyledIconButton = ({
    clickFlag,
    value,
    children,
    onClick,
    color = 'text-basic-color',
}: IStyledIconButton) => {
    return (
        <IconButton
            onClick={onClick}
            className={`${clickFlag ? `!${color}` : ''}  !rounded-md !p-2 !hover:border !hover:border-black !hover:bg-gray-200`}
        >
            {children}
            <span className="ml-1 text-[1rem]">{value}</span>
        </IconButton>
    );
};

export { StyledIconButton };
