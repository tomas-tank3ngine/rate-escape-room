import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Header from "./assets/components/Header/Header.js"
import Footer from "./assets/components/Footer/Footer.js"
import Homepage from "./assets/pages/HomePage/Homepage.js"
import NotFoundPage from "./assets/pages/NotFoundPage/NotFoundPage.js"
import RoomsPage from "./assets/pages/RoomsPage/RoomsPage.js";
import RoomDetailsPage from "./assets/pages/RoomDetailsPage/RoomDetailsPage.js";
import LoginPage from "./assets/pages/LoginPage/LoginPage.js";
import CreateAccountPage from "./assets/pages/CreateAccountPage/CreateAccountPage.js";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
          {/* <Route path="/rooms/:roomId/rate" element={<Homepage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/rooms-nearby" element={<Homepage />} />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
