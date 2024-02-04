import './RoomsPage.scss'
import RoomsTable from '../../components/RoomsTable/RoomsTable';
import RoomOverview from '../../components/RoomOverview/RoomOverview';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { allRoomsEndpoint } from '../../utils/api-utils';

function RoomsPage({responsive, user}){
    const [allRooms, setAllRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState({});

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(allRoomsEndpoint());
            console.log(response.data);
            setAllRooms(response.data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        };
    
        // Call the function inside useEffect to fetch data when the component mounts
        fetchData();
      }, []);
    return(
        <main className="rooms-page">
            <RoomOverview room={selectedRoom}/>
            <hr className='rooms-page__line-break'></hr>
            <RoomsTable responsive={responsive} allRooms={allRooms}/>
        </main>        
    )
}

export default RoomsPage;