import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const PostContext = createContext();
export const usePost = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [postData, setPost] = useState([])

  useEffect(() => {
    let tempData = [];
    db.collection('post').get().then(function (qs) {
      qs.forEach(function (doc) {
        tempData.push(doc.data());
      });
      setPost(tempData);
    });
  }, []);

  return (
    <PostContext.Provider value={{ postData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider