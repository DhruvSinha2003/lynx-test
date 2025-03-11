// App.tsx
import { MemoryRouter, Route, Routes } from "react-router";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";

export function App() {
  return (
    <ThemeProvider>
      <>
        <Header />
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </MemoryRouter>
      </>
    </ThemeProvider>
  );
}
