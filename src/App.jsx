import { Button, Container } from "@chakra-ui/react";
import "./App.css";
import { Navigate, Route,Routes} from "react-router-dom";
import Userpage from "./pages/Userpage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./components/LogoutButton";

function App() {
  const user = useRecoilValue(userAtom)
  console.log(user)
  return (
    <>
      <Container maxW="620px">
        <Header />
          <Routes>
            <Route path="/" element={user?<HomePage/> : <Navigate to={'/auth'}/>} />
            <Route path="/auth" element={!user?<AuthPage/> : <Navigate to={'/'}/>} />
            <Route path="/:username" element={<Userpage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Routes>
          {user && <LogoutButton/>}
       
      </Container>
    </>
  );
}

export default App;
