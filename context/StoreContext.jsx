import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

//프로젝트 전역에 대한 스토어데이터 제공자
//스토어데이터 사용을 원할시 
// (상단)import { useStore } from "../context/StoreContext";   
// (컴포넌트내부)const {storeData} = useStore();
// 작성 후 , 선언된 [ storeData = 하단의 배열데이터 ] 사용 가능
const StoreProvider = ({ children }) => {
  const [storeData, setStore] = useState([])
  useEffect(() => {
    // let tempData = [];
    // db.collection('store').get().then(function (qs) {
    //   qs.forEach(function (doc) {
    //     tempData.push(doc.data());
    //   });
    //   setStore(tempData);
    // });
    setStore([
      {id: 1, name: "청년다방", categoryId: 5, minPrice: "12000"},
      {id: 2, name: "홍콩반점", categoryId: 2, minPrice: "20000"},
      {id: 3, name: "스시로", categoryId: 11, minPrice: "15000"},
      {id: 4, name: "테스트", categoryId: 1, minPrice: "9999"},
    ])
  }, []);

  return (
    <StoreContext.Provider value={{ storeData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider