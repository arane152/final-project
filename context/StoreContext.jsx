import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

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