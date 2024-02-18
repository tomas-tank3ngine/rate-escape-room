import "./Homepage.scss";

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import InfoSection from "../../components/InfoSection/InfoSection";
import TitleSection from "../../components/TitleSection/TitleSection";

function Homepage({ allRooms }) {
    return (
        <main className="homepage">
            <TitleSection title="Homepage" linkRoute="" />
            <Hero />

            <Banner allRooms={allRooms} />

            <InfoSection />
        </main>
    );
}

export default Homepage;
