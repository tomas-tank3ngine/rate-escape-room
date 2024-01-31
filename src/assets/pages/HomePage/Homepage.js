import './Homepage.scss'

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import InfoSection from '../../components/InfoSection/InfoSection';

function Homepage(){
    return(
        <>
            <Hero />
            
            <Banner />
            
            <InfoSection />
        </>
    )
}

export default Homepage;