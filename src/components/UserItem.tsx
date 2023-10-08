import styled from "@emotion/styled";
import Touchable from "./Touchable";

type Props = {
    avatar : string;
    name: string;
    onClick?: ()=> void;
}
const UserItem = ({ avatar,name, onClick }: Props) => {

    return (
    <Touchable onClick={onClick}>
        <Avatar src={avatar}/>
        <div>{name}</div>
    </Touchable>
        
    )
}

const Avatar = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
`

export default UserItem;