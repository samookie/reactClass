import { Message } from "./Message";
import { User } from "./User";

export type Chat = {
    other: User;
    me: User;
    message:Message[];
};