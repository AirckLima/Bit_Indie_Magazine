import PageHeader from "@/components/index/header/PageHeader";
import MainContent from "@/components/index/main/MainContent";
import PageFooter from "@/components/index/footer/PageFooter";

import "./styles/App.css";

function App() {
    return (
        <div className=" bg-gray-800">

            <PageHeader />

            <MainContent />

            <PageFooter />

        </div>
    );
}

export default App;
