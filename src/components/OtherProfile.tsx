import styled from "@emotion/styled";

type Props = {
    avatar : string;
    name: string;
}
const OtherProfile = ({ avatar,name }: Props) => {

    return (
    <Profile>
        <PositionImage>
            <Avatar src={avatar}/>
            <h1>{name}</h1>
        </PositionImage>
        
    </Profile>
        
    )
}

const PositionImage = styled.div`
    display:flex;
    flex-direction:column;
    width: 30%;
    background-color: #282b30;
    align-items: center;
    position:relative;
    top:40%;

`

const Profile = styled.div`
    display:flex;
    flex-direction:column;
    width: 30%;
    background-color: #282b30;
    align-items: center;
`

const Avatar = styled.img`
    
    height: 5rem;
    width: 5rem;
    border-radius: 2rem;
`

export default OtherProfile;