import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Result from "./pages/result/Result";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
