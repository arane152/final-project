import Device from "../src/layouts/Device";
import PostPartyContainer from "../src/modules/PostPartyContainer";
import PostRequestContainer from "../src/modules/PostRequestContainer";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { db } from "../src/firebase";

function ParticipationPage() {
  const [post, setPost] = useState(null);
  const [users, setUsers] = useState([]);
  const { id: postId } = useParams();


  useEffect(() => {
    db.collection("post").doc(postId).get().then((doc) => {
      const postData = doc.data();
      setPost(postData);
    });
  }, [postId]);

  // 사용자 목록을 불러오는 useEffect
  useEffect(() => {
    db.collection("user").get().then((snapshot) => {
      const userList = snapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    });
  }, []);

  // post나 users가 없을 경우 null 반환
  if (!post || users.length === 0) return null;

  return (
    <Device
      content="참여현황"
      headerType=""
      gnbType="none"
      btnType=""
      backPage={`/post/${postId}`}
    >
      <PostPartyContainer post={post} postId={postId} setPost={setPost} />
      <PostRequestContainer post={post} users={users} postId={postId} setPost={setPost} />
    </Device>
  );
}

export default ParticipationPage;
