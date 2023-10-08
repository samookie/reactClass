import {useState} from "react";
import { useMountEffect } from "./useMountEffect";
import { User } from "../models/User";
import { createUser } from "../services/api";

export const useProfile = () => {
    const [profile, setProfile] = useState<User>();
    const [loading, setLoading] = useState(true);

    useMountEffect(()=> {
    
        (async () => {
            const nextProfile = createUser(999);
            setProfile(nextProfile);
            setLoading(false);
        })();

});
return {profile,loading}
}