import { createContext, useContext, useState, useEffect } from 'react';
import {db} from '/src/firebase.js'

const PostContext = createContext();
export const usePost = () => useContext(PostContext);

//프로젝트 전역에 대한 포스트배열데이터 제공자
//포스트배열데이터 사용을 원할시 
// (상단)import { usePost } from "../context/PostContext";   
// (컴포넌트내부)const { postData } = usePost();
// 작성 후 , 선언된 [ postData = 파이어베이스 Post컬렉션 데이터 ] 사용 가능
const PostProvider = ({ children }) => {
  const [postData, setPost] = useState([])

  useEffect(() => {
    let tempData = [];
    //상위Post문서 8개만 불러오기(firebase 사용량조절목적)
    db.collection('post')
      .orderBy('postId', 'desc')
      .limit(16)
      .get()
      .then(function (qs) {
        qs.forEach(function (doc) {
          tempData.push(doc.data());
        });
        //순서정렬(최신순)
        const sortedData = tempData.sort((a, b)=> b.id - a.id)
        setPost(sortedData);
      });
  }, []);

  return (
    <PostContext.Provider value={{ postData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider