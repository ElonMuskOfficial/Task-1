import Companies from "./pages/Companies";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CompaniesAdd from "./pages/CompaniesAdd";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/companies/edit/:id" element={<CompaniesAdd />} />
          <Route path="/companies/add" element={<CompaniesAdd />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/" element={<Navigate to="/companies" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
