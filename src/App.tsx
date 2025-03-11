import { MemoryRouter, Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";

export function App() {
  return (
    <>
      <Header />
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </MemoryRouter>
    </>
  );
}
