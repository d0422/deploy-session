import { Route, Routes, useNavigate } from "react-router-dom";
import Create from "./pages/Create";
import Read from "./pages/Read";
import ReadDetail from "./pages/ReadDetail";
import Update from "./pages/Update";

function App() {
  const navigate = useNavigate("/");
  const homeClick = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Blog</h1>
      <button onClick={homeClick}>Home</button>
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/:id" element={<ReadDetail />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/:id/update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
