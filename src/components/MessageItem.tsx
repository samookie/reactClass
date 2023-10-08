import styled from "@emotion/styled";

type Props = {
    avatar : string;
    name: string;
    message: string;
}
const MessageItem = ({ avatar,name,message}: Props) => {

    return (
    <Container >
        <Avatar src={avatar}/>
        <Content>
            <div>{name}</div>
            <div>{message}</div>
        </Content>
        
    </Container>
        
    )
}

const Container = styled.div`
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
const Content = styled.div`
    display: flex;
    flex:1;
    flex-direction:column;
`
const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

export default MessageItem;