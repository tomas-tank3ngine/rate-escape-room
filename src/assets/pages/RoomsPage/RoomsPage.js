import './RoomsPage.scss'
import RoomsTable from '../../components/RoomsTable/RoomsTable';
import RoomOverview from '../../components/RoomOverview/RoomOverview';

function RoomsPage({responsive}){
    return(
        <main className="rooms-page">
            <RoomOverview/>
            <hr className='rooms-page__line-break'></hr>
            <RoomsTable responsive={responsive}/>
        </main>        
    )
}

export default RoomsPage;