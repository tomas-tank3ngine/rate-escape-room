import "./RoomsPage.scss";
import RoomsTable from "../../components/RoomsTable/RoomsTable";
import RoomOverview from "../../components/RoomOverview/RoomOverview";
import axios from "axios";
import { useEffect, useState } from "react";
import { allRoomsEndpoint } from "../../utils/api-utils";
import TitleSection from "../../components/TitleSection/TitleSection";

function RoomsPage({ responsive }) {
  const [selectedRoom, setSelectedRoom] = useState({});
  const [loading, setLoading] = useState(true);
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(allRoomsEndpoint());
            setAllRooms(response.data);

            const randomIndex = Math.floor(
                Math.random() * response.data.length
            );
            const randomRoom = response.data[randomIndex];
            setSelectedRoom(randomRoom);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
    }, []);

  return (
    <>
      <TitleSection title="Escape Rooms" linkRoute="/" />
      <main className="rooms-page">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <RoomOverview room={selectedRoom} />

            <hr className="rooms-page__line-break"></hr>

            <RoomsTable
              responsive={responsive}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              allRooms={allRooms}
            />
          </>
        )}
      </main>
    </>
  );
}

export default RoomsPage;
