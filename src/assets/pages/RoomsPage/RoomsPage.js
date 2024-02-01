import './RoomsPage.scss'
import RoomsTable from '../../components/RoomsTable/RoomsTable';
import RoomOverview from '../../components/RoomOverview/RoomOverview';

function RoomsPage({responsive}){
    return(
        <section className="rooms-page">
            <RoomOverview/>
            <RoomsTable responsive={responsive}/>
        </section>
        
    )
}

export default RoomsPage;