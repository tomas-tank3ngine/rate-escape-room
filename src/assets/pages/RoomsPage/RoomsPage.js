import "./RoomsPage.scss";
import RoomsTable from "../../components/RoomsTable/RoomsTable";
import RoomOverview from "../../components/RoomOverview/RoomOverview";
import axios from "axios";
import { useEffect, useState } from "react";
import { allRoomsEndpoint } from "../../utils/api-utils";
import TitleSection from "../../components/TitleSection/TitleSection";

function RoomsPage({ responsive }) {
  const [selectedRoom, setSelectedRoom] = useState({});

  return (
    <>
      <TitleSection title="Escape Rooms" linkRoute="/" />
      <main className="rooms-page">
        <RoomOverview room={selectedRoom} />
        <hr className="rooms-page__line-break"></hr>
        <RoomsTable
          responsive={responsive}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      </main>
    </>
  );
}

export default RoomsPage;
