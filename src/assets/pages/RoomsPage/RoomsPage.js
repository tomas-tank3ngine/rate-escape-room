import './RoomsPage.scss'
import RoomsTable from '../../components/RoomsTable/RoomsTable';
import RoomOverview from '../../components/RoomOverview/RoomOverview';

function RoomsPage(){
    return(
        <section className="rooms-page">
            <RoomOverview/>
            <RoomsTable />
        </section>
        
    )
}

export default RoomsPage;