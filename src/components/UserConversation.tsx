import styled from "@emotion/styled";
import { User } from "../models/User";
import { Message } from "../models/Message";
import MessageItem from "./MessageItem";

type Props = {
    user : User;
    chatList: Message[];
}
const UserConversation = ({ user,chatList}: Props) => {

    return (
    <Container>
        <div>
        {chatList.map(({message,id})=>
            <MessageItem
                key={id}
                avatar={user.avatar}
                name={user.name}
                message={message}
            />
        )}
    </div>
    </Container> 
    )
}

const Container = styled.div<{onClick?: ()=> void}>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding:0.5rem;
    cursor: pointer;

    transition: background-color 0.1s ease-in-out;
    &:hover{
        background-color:${({onClick})=> onClick ? "grey" :"while"} ;
    }
`

export default UserConversation;