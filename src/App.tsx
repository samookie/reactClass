import './App.css'
import UserList from "./components/UserList"
import UserItem from './components/UserItem';
import styled from "@emotion/styled"
import { useProfile } from './hooks/useProfile';
import {useUsers} from './hooks/useUsers'
import Chat from './components/Chat';
import { useState } from 'react';
import { User } from './models/User';
import OtherProfile from './components/OtherProfile';

const App = () => {
  const {profile, loading: profileLoading} = useProfile();
  const {users, loading: usersLoading} = useUsers();
  const [other, setOther] = useState<User>();

  if (profileLoading || usersLoading || !profile ){

    return <div>
        loading
      </div>
  }
  return(
    <AppContainer>
      <LeftContainer>
        <UserListContainer>
          <UserList users={users} onClick={setOther} />
        </UserListContainer>
        <ProfileContainer>
          <UserItem name={profile?.name} avatar={profile?.avatar}/>
        </ProfileContainer>
      </LeftContainer>
      <ChatContainer>
        {other &&
            <OtherContainer>
              <UserItem name={other?.name} avatar={other?.avatar}/>
          </OtherContainer>
        }
        {other &&
          <Chat profile={profile} other={other} />
        }
      </ChatContainer>
      {other &&
          <OtherProfile name={other?.name} avatar={other?.avatar}/>
      }

      
    </AppContainer>
    
  )
}

const AppContainer = styled.div`
  display:flex;
`
const LeftContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 16rem;
  height: 100vh;
  position:relative;
  background-color: #282b30;
`
const UserListContainer = styled.div`
  border:1px solid black;
  overflow-y: scroll;
  flex:1;
`

const ChatContainer = styled.div`
  background-color: #36393e;
  width:70%;
  overflow-y: scroll;
  display:flex;
  flex-direction:column;
  position:relative;
`

const ProfileContainer = styled.div`

  background-color: #1e2124;

`
const OtherContainer = styled.div`

  background-color:#282b30;

`
export default App
