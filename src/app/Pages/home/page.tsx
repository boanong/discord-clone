import MainSection from "@/app/Components/MainSection/MainSection";
import Sidebar from "@/app/Components/Organisms/Sidebar";
import { NextPage } from "next";
import "./pages.css"

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <div className="homeContainer">
      <Sidebar />
      <MainSection />
    </div>
  );
};

export default Home;
