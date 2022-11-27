
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";



//test git
function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/user/:id" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute