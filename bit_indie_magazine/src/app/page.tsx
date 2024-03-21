import PageHeader from "@/components/index/header/PageHeader";
import MainContent from "@/components/index/main/MainContent";
import PageFooter from "@/components/index/footer/PageFooter";
import "./App.module.css";


export default function Home() {
  return (
    <div className=" bg-gray-800">

      <PageHeader />

      <MainContent />

      <PageFooter />

    </div>
  );
}
