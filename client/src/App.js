import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Authentication from "./components/Authentication/Authentication";
function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={true ? <HomePage /> : <Authentication />} />
      </Routes>
    </>
  );
}

export default App;
