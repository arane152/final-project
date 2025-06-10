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
      {
        id: 1, 
        name: "청년다방", 
        categoryId: 7, 
        minPrice: "12000"
      },{
        id: 2, 
        name: "홍콩반점", 
        categoryId: 1, 
        minPrice: "11900"
      },{
        id: 3, 
        name: "스시로", 
        categoryId: 11, 
        minPrice: "15000"
      },{
        id: 4, 
        name: "면사무소", 
        categoryId: 1, 
        minPrice: "15000"
      },{
        id: 5, 
        name: "버거킹 시흥정왕점", 
        categoryId: 2, 
        minPrice: "14000"
      },{
        id: 6, 
        name: "카츠백 정왕점", 
        categoryId: 3, 
        minPrice: "12000"
      },{
        id: 7, 
        name: "반올림피자 정왕점", 
        categoryId: 4, 
        minPrice: "16900"
      },{
        id: 8, 
        name: "유림이네한식", 
        categoryId: 5, 
        minPrice: "16000"
      },{
        id: 9, 
        name: "BHC 정왕역점", 
        categoryId: 6, 
        minPrice: "19000"
      },{
        id: 10, 
        name: "홍대 떡볶이", 
        categoryId: 7, 
        minPrice: "14000"
      },{
        id: 11, 
        name: "가장맛있는족발", 
        categoryId: 8, 
        minPrice: "20000"
      },{
        id: 12, 
        name: "도리신닭도리탕 시흥점", 
        categoryId: 9, 
        minPrice: "5000"
      },{
        id: 13, 
        name: "순삭곱창 정왕점", 
        categoryId: 10, 
        minPrice: "5000"
      },{
        id: 14, 
        name: "스시의민족 본점", 
        categoryId: 11, 
        minPrice: "20000"
      },{
        id: 15, 
        name: "백연게장 정왕점", 
        categoryId: 12, 
        minPrice: "15000"
      },{
        id: 16, 
        name: "돼지게티 정왕점", 
        categoryId: 13, 
        minPrice: "12900"
      },{
        id: 17, 
        name: "빙수앓이 시흥정왕점", 
        categoryId: 14, 
        minPrice: "10900"
      },{
        id: 18, 
        name: "요아정 배곧점", 
        categoryId: 14, 
        minPrice: "15000"
      },
    ])
  }, []);

  return (
    <StoreContext.Provider value={{ storeData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider