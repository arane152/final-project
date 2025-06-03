import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const CategoryContext = createContext();
export const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategory] = useState([])

  useEffect(() => {
    // let tempData = [];
    // db.collection('category').get().then(function (qs) {
    //   qs.forEach(function (doc) {
    //     tempData.push(doc.data());
    //   });
    //   const sortedData = tempData.sort((a, b)=> a.id - b.id)
    //   setCategory(sortedData)
    // });
      setCategory([
        {id: 1, name: '중식'},
        {id: 2, name: '버거'},
        {id: 3, name: '돈까스'},
        {id: 4, name: '피자'},
        {id: 5, name: '한식'},
        {id: 6, name: '치킨'},
        {id: 7, name: '분식'},
        {id: 8, name: '족발/보쌈'},
        {id: 9, name: '찜/탕'},
        {id: 10, name: '구이'},
        {id: 11, name: '일식'},
        {id: 12, name: '회/해물'},
        {id: 13, name: '양식'},
        {id: 14, name: '커피/차'},
        {id: 999, name: '기타'},
      ]);
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider