export interface IApiPost {
    id: number;
    userId: number;
    title: string;
    body: string;
};

export interface ICustomPost extends IApiPost {
    isLiked: boolean;
    isSaved: boolean;
}