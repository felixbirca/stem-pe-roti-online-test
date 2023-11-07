import { createContext, useContext, useReducer } from 'react';
import { auth } from "./firebase";

const UserContext = createContext<any>(null);

const UserDispatchContext = createContext<any>(null);

export function UserProvider({ children }: { children: any }) {
  const [user, dispatch] = useReducer(
    userReducer,
    initialUser
  );

  return (
    <>
      <UserContext.Provider value={user}>
        {/* @ts-ignore  */}
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserContext.Provider>
    </>
  );
}


export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

function userReducer(user: any, action: any) {
  console.log(action);
  switch (action.action) {
    case 'added': {
      return action.user;
    }
  }
}

const initialUser = auth.currentUser;
