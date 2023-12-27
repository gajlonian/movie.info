import TrendingSection from '../components/TrendingSection'
import NowPlayingSection from '../components/NowPlayingSection'
import PopularSection from '../components/PopularSection'
import UpcomingSection from '../components/UpcomingSection'


export default function ({ view }) {

    return (
        <>
            {view === "trending" && <TrendingSection />}
            {view === "nowPlaying" && <NowPlayingSection />}
            {view === 'popular' && <PopularSection />}
            {view === 'upcoming' && <UpcomingSection />}
        </>
    );
}
