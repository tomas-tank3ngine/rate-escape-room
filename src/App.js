import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { currentUserEndpoint } from "./assets/utils/api-utils.js";
import axios from "axios";

//pages and components
import Header from "./assets/components/Header/Header.js";
import Footer from "./assets/components/Footer/Footer.js";
import Homepage from "./assets/pages/HomePage/Homepage.js";
import NotFoundPage from "./assets/pages/NotFoundPage/NotFoundPage.js";
import RoomsPage from "./assets/pages/RoomsPage/RoomsPage.js";
import RoomDetailsPage from "./assets/pages/RoomDetailsPage/RoomDetailsPage.js";
import LoginPage from "./assets/pages/LoginPage/LoginPage.js";
// import CreateAccountPage from "./assets/pages/CreateAccountPage/CreateAccountPage.js";

function App() {
    const [width, setWindowWidth] = useState(0);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);

    const [failedAuth, setFailedAuth] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem("token");

        //no token? set to true and return
        if (!token) {
            setFailedAuth(false);
        }

        const checkUserAuthorization = async () => {
            try {
                const response = await axios.get(
                    currentUserEndpoint, // this route is proteced, so need to pass headers with authorization (see backend
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response.data);
                setUser(response.data);
            } catch (error) {
                console.log(error);
                setFailedAuth(true);
            }
        };
        checkUserAuthorization();
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
                <Header setUser={setUser} setFailedAuth={setFailedAuth} failedAuth={failedAuth}/>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route
                        path="/rooms"
                        element={<RoomsPage responsive={responsive} />}
                    />
                    <Route
                        path="/rooms/:roomId"
                        element={<RoomDetailsPage responsive={responsive} />}
                    />
                    <Route path="/rooms/:roomId/rate" element={<Homepage />} />
                    <Route
                        path="/accountLogin"
                        element={<LoginPage setUserId={setUserId} />}
                    />
                    {/* <Route
                        path="/accountCreate"
                        element={<CreateAccountPage setUserId={setUserId} />}
                    /> */}
                    {/* <Route
                        path="/accountCreate"
                        element={<CreateAccountPage setUserId={setUserId} />}
                    /> */}
                    <Route path="/nearbyRooms" element={<Homepage />} />
                    <Route path="/roomCreate" element={<Homepage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
