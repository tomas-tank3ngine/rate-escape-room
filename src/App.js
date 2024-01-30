import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Header from "./assets/components/Header/Header.js"
import Footer from "./assets/components/Footer/Footer.js"
import Homepage from "./assets/pages/HomePage/Homepage.js"
import NotFoundPage from "./assets/pages/NotFoundPage/NotFoundPage.js"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
