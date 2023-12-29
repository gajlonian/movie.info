import TrendingSection from './TrendingSection'
import NowPlayingSection from './NowPlayingSection'
import PopularSection from './PopularSection'
import UpcomingSection from './UpcomingSection'


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
