import {useState, useEffect} from "react";
import { User } from "../models/User";
import { Message } from "../models/Message";
import { getChat } from "../services/api";

type Props = {
    profile : User;
    other: User;
    message?: Message;
}

export const useChat = ({profile, other, message}: Props) => {
    const [chat, setChat]= useState<Message[]>([]);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
        
        const leChat = getChat(other, profile);
        console.log(leChat)
        setChat(leChat.message);
        setLoading(false);

    }, [other.id]);

    useEffect(()=>{
        if (message && chat){
           setChat([...chat,message]);
        } 
    }, [message]);


    return {chat, loading}
};