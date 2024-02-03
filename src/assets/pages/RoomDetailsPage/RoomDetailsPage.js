import './RoomDetailsPage.scss'
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import RoomDetailsMobile from '../../components/RoomDetailsMobile/RoomDetailsMobile';
import RoomDetailsTabletPlus from '../../components/RoomDetailsTabletPlus/RoomDetailsTabletPlus';


function RoomDetailsPage({ responsive }){
    return(
        <main className="room-details-page">
            <section className="room-details">
                {responsive.isTablet ? <RoomDetailsTabletPlus /> : <RoomDetailsMobile />} 
            </section>
            <section className="room-reviews">
                <CommentsSection />
            </section>
        </main>
    )
}

export default RoomDetailsPage;