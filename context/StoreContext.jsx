import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [storeData, setStore] = useState([])

  useEffect(() => {
    let tempData = [];
    db.collection('store').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      setStore( tempData);
    });
  }, []);

  return (
    <StoreContext.Provider value={{ storeData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider