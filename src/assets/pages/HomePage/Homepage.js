import './Homepage.scss'

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import InfoSection from '../../components/InfoSection/InfoSection';

function Homepage({ allRooms }){
    return(
        <main className="homepage">
            <Hero />
            
            <Banner allRooms={allRooms}/>
            
            <InfoSection />
        </main>        
    )
}

export default Homepage;