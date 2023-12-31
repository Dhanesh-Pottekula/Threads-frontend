import { Button, Container } from "@chakra-ui/react";
import "./App.css";
import { Route,Routes} from "react-router-dom";
import Userpage from "./pages/Userpage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container maxW="620px">
        <Header />
          <Routes>
            <Route path="/:username" element={<Userpage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
          </Routes>
       
      </Container>
    </>
  );
}

export default App;