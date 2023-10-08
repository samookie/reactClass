import { faker } from '@faker-js/faker';
import { User } from '../models/User';

const delay = (time:number) =>{
    return new Promise(resolve=> setTimeout(resolve,time));
}

export const createUser = (id:number) => ({
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
});


export const getUsers =async () => {
    
    const array = Array.from(Array(50).keys())
    await delay(100);
    return array.map(createUser)
};

export const createMessageRnd = (id:number, idUser:number) => ({
    id,
    idUser,
    message: faker.lorem.sentence(),
});

export const sendMessage = async (id:number,user:User, message:string) => ({
    id,
    user,
    message,
})


export const getChat = (other:User, me: User) =>{

    const array = Array.from(Array(10).keys());

    return array.map((id)=> ({
        id,
        message:faker.hacker.phrase(),
        user: id % 2 ===0 ? other : me
    }))
        
    
}

