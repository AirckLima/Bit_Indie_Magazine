import PageHeader from "./components/header/PageHeader";
import MainContent from "./components/main/MainContent";
import PageFooter from "./components/footer/PageFooter";

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
