import {User} from "../models/User"
import UserItem from "./UserItem"

type Props = {
    users: User[];
    onClick: (user:User) => void;
}


const UserList = ({users, onClick}: Props) => {
    return (
    <div>
        {users.map(({name,avatar,id})=>
            <UserItem
                key={id}
                name={name}
                avatar={avatar}
                onClick={()=> onClick({name,avatar,id})}
            />
        )}
    </div>)
};

export default UserList;