import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const CategoryContext = createContext();
export const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({ children }) => {
  const [categoryData, setCategory] = useState([])

  useEffect(() => {
    let tempData = [];
    db.collection('category').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      setCategory( tempData);
    });
  }, []);

  return (
    <CategoryContext.Provider value={{ categoryData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider