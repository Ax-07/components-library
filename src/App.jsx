import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./layouts/header/Header";
import { Footer } from "./layouts/footer/Footer";
import { Components } from "./pages/Components";
import { Templates } from "./pages/Templates";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/*" element={<Components />} />
          <Route path="/templates" element={<Templates/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

