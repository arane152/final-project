import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {

  const [userListData, setUserList] = useState([])
  const [nowuser, setUser] = useState(null);

  useEffect(() => {
    let tempData = [];
    db.collection('user').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      setUserList(tempData);
    });
  }, []);

  useEffect(() => {
  if (userListData.length > 0 && !nowuser) {
    setUser(userListData[0]);
  }
  }, [userListData]);

  return (
    <UserContext.Provider value={{ userListData, nowuser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider