import { Route, Routes } from "react-router-dom";
// Components
import Navbar from "./components/UI/Navbar/Navbar";
// Pages
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PostIdPage from "./pages/PostIdPage";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
