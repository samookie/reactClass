import styled from "@emotion/styled";
import { User } from "../models/User";
import MessageItem from "./MessageItem";
import { useEffect, useState } from "react";
import { Message } from "../models/Message";
import { getChat } from "../services/api";

type Props =
{
    profile : User;
    other: User;
}
const Chat = ({ profile, other}: Props) => {
    const [input, setInput] = useState("");
    const [chat, setChat] = useState<Message[]>();
    
    useEffect(()=>{
        
        setChat(getChat(other, profile));

    }, [other.id]);

    const sendMessage = ()=>{
        if (chat){
            const leMessage : Message = {id:chat.length,user:profile,message: input};

            setChat([...chat, leMessage]);
        }
    }
    
    console.log(chat)
    return (<div>
        <ChatContainer>
                {chat && chat.map(({id, user,message})=>
            <MessageItem
                key={id}
                name={user.name}
                avatar={user.avatar}
                message = {message}
            />
        )}
        
        
    </ChatContainer>
    <ButtonDiv>
            <InputSend type="text" placeholder="Envoyer votre message " value={input} onInput={e => setInput(e.currentTarget.value)}/>
            <ButtonSend onClick={sendMessage}>Send</ButtonSend>
        </ButtonDiv>
    </div>
        
    )
}


const ChatContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  overflow-y: scroll;
  background-color: #36393e;
`

const ButtonDiv= styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color:#282b30;
  flex:1;
  width:58%;
  position:fixed;
  bottom:0;

`
const InputSend = styled.input`
  flex:1;
  padding:0.5rem;
  margin-right:0.5rem;
  outline:none;

`
const ButtonSend = styled.button`
  flex:1;
  padding:0.5rem;
  margin-right:0.5rem;
  outline:none;

`

export default Chat;