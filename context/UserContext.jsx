import { createContext, useContext, useState } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [nowuser, setUser] = useState({
    userName: "홍길동",
    userId: "1",
    accountNumber: "00000000000",
    profile: "none",
  });

  return (
    <UserContext.Provider value={{ nowuser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider