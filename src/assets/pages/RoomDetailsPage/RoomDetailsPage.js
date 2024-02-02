import './RoomDetailsPage.scss'
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import RoomDetailsMobile from '../../components/RoomDetailsMobile/RoomDetailsMobile';


function RoomDetailsPage(){
    return(
        <main className="room-details-page">
            <section className="room-details">
                <RoomDetailsMobile />
            </section>
            <section className="room-reviews">
                <CommentsSection />
            </section>
        </main>
    )
}

export default RoomDetailsPage;