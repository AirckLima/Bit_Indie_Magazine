import NewEditionPanel from "./panels/NewEditionPanel";
import PreviousEditionsPanel from "./panels/PreviousEditionsPanel";
import CommunityPanel from "./panels/Community/CommunityPanel";
import DonationPanel from "./panels/DonationPanel";
import AboutPanel from "./panels/AboutPanel";


const MainContent = () => {
    return (
        <main className=" mb-3">

            <NewEditionPanel />

            <div className=" flex flex-col px-1 gap-y-5">

                <PreviousEditionsPanel />

                <CommunityPanel />

                <DonationPanel />

                <AboutPanel />

            </div>

        </main>
    );
};

export default MainContent;