import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

//프로젝트 전역에 대한 유저데이터 제공자
//유저데이터 사용을 원할시 
// (상단)import { useStore } from "../context/UserContext";   
// (컴포넌트내부)const {userListData} = useUser();
// 작성 후 , 선언된 [ userListData = 하단의 배열데이터 ] 사용 가능
const UserProvider = ({ children }) => {
  const [userListData, setUserList] = useState([])
  useEffect(() => {
    // let tempData = [];
    // db.collection('user').get().then(function (qs) {
    //   qs.forEach(function (doc) {
    //     tempData.push(doc.data());
    //   });
    //   setUserList(tempData);
    // });
    setUserList([
      {userId: 1, name: "홍길동", location: "1기숙사", accountNumber: "00000000000",
        profile: "https://mblogthumb-phinf.pstatic.net/MjAyMjA3MTVfMjQz/MDAxNjU3ODcwNzkwNDI0.kcOc-7e2R90i8Wf36bIfvbX9Zm1YWj-167gJN-qBdkgg.9Uwu9QvqoTXtJb-Mm3qM2XnGRKINh0ZAwvc90o3-NBQg.JPEG.wst1/Screenshot%EF%BC%BF20220705%EF%BC%8D154328%EF%BC%BFNAVER.jpg?type=w800"
      },
      {userId: 2, name: "사용자", location: "2기숙사", accountNumber: "12345678900",
        profile: ""
      },
      {userId: 3, name: "누군가", location: "정왕본동", accountNumber: "2076063750",
        profile: ""
      },
    ]);
  }, []);

  //현재사용자 구별을 위한 {nowuser} useState선언
  //userList첫번째 항목을 기본값으로 설정, {setUser()}을 사용해 상태(현재사용자)변경
  //사용 원할시 (컴포넌트내부)const {nowuser, setUser} = useUser(); 추가
  const [nowuser, setUser] = useState(null);
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