import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { allRoomsEndpoint, currentUserEndpoint } from "./assets/utils/api-utils.js";

//pages and components
import Header from "./assets/components/Header/Header.js";
import Footer from "./assets/components/Footer/Footer.js";
import Homepage from "./assets/pages/HomePage/Homepage.js";
import NotFoundPage from "./assets/pages/NotFoundPage/NotFoundPage.js";
import RoomsPage from "./assets/pages/RoomsPage/RoomsPage.js";
import RoomDetailsPage from "./assets/pages/RoomDetailsPage/RoomDetailsPage.js";
import LoginPage from "./assets/pages/LoginPage/LoginPage.js";
import CreateAccountPage from "./assets/pages/CreateAccountPage/CreateAccountPage.js";
import UploadRoomPage from "./assets/pages/UploadRoomPage/UploadRoomPage.js";

function App() {
    const [width, setWindowWidth] = useState(0);
    const [user, setUser] = useState(null);

    const [allRooms, setAllRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(allRoomsEndpoint());
          setAllRooms(response.data);

        } catch (error) {
          console.error('Error fetching data: ', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    const responsive = {
        isTablet: width > 767,
        isDesktop: width > 1279,
    };
    return (
        <>
            <BrowserRouter>
                <Header
                    setUser={setUser}
                    user={user}
                />
                <Routes>
                    <Route path="/" element={<Homepage allRooms={allRooms}/>} />
                    <Route
                        path="/rooms"
                        element={<RoomsPage responsive={responsive} user={user} allRooms={allRooms}/>}
                    />
                    <Route
                        path="/rooms/:roomId"
                        element={<RoomDetailsPage responsive={responsive} user={user}/>}
                    />
                    {/* <Route path="/rooms/:roomId/rate" element={<Homepage />} /> */}
                    <Route
                        path="/accountLogin"
                        element={<LoginPage setUser={setUser} />}
                    />
                    <Route
                        path="/accountCreate"
                        element={<CreateAccountPage setUser={setUser} user={user}/>}
                    />

                    <Route path="/nearbyRooms" element={<RoomsPage responsive={responsive} user={user} allRooms={allRooms}/>} />
                    <Route path="/roomCreate" element={<UploadRoomPage user={user}/>} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
