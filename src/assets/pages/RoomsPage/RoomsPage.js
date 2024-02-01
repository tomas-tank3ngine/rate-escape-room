import './RoomsPage.scss'
import RoomsTable from '../../components/RoomsTable/RoomsTable';
import RoomOverview from '../../components/RoomOverview/RoomOverview';

function RoomsPage({responsive}){
    return(
        <main className="rooms-page">
            <RoomOverview/>
            <RoomsTable responsive={responsive}/>
        </main>
        
    )
}

export default RoomsPage;