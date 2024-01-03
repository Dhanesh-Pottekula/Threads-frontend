import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from '../hooks/useShowToast'
function Userpage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        
        if(data.error){
          showToast("error",data.error,"error")
          return
        }
        setUser(data);
      } catch (error) {
        showToast("error",data.error,"error")
      }
    };
    getUser();
  }, [username,showToast]);

  if(!user){
    return null;
  }
  return (
    <>
      <UserHeader user={user}></UserHeader>
      <UserPost
        likes={1200}
        replies={234}
        postImg={"/post1.png"}
        postTitle="lets talk about threads"
      ></UserPost>
      <UserPost
        likes={131}
        replies={3244}
        postImg={"/post2.png"}
        postTitle="lets talk about youtube"
      ></UserPost>
      <UserPost
        likes={32134}
        replies={3241}
        postImg={"/post3.png"}
        postTitle="lets talk elon musk"
      ></UserPost>
    </>
  );
}

export default Userpage;
