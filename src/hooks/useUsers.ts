import { useState} from "react";
import { useMountEffect } from "./useMountEffect";
import { User } from "../models/User";
import { getUsers } from "../services/api";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useMountEffect(()=> {
    
        (async () => {
            const nextUsers = await getUsers();
            setUsers(nextUsers);
            setLoading(false);
        })();

});
return {users,loading}
}