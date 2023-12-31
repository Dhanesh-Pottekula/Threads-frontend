import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function Userpage() {
  return (
    <>
      <UserHeader></UserHeader>
      <UserPost likes={1200} replies={234} postImg={'/post1.png'} postTitle='lets talk about threads' ></UserPost>
      <UserPost likes={131} replies={3244} postImg={'/post2.png'} postTitle='lets talk about youtube' ></UserPost>
      <UserPost likes={32134} replies={3241} postImg={'/post3.png'} postTitle='lets talk elon musk' ></UserPost>
    </>
  );
}

export default Userpage;
