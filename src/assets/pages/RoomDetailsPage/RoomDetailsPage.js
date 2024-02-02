import './RoomDetailsPage.scss'
import CommentsSection from '../../components/CommentsSection/CommentsSection';

function RoomDetailsPage(){
    return(
        <main className="room-details-page">
            <section className="room-details">

            </section>
            <section className="room-reviews">
            <CommentsSection />
            </section>
        </main>
    )
}

export default RoomDetailsPage;