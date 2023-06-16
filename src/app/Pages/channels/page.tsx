"use client"
import MainSection from "@/app/Components/MainSection/MainSection";
import Sidebar from "@/app/Components/Organisms/Sidebar";
import AuthGaurd from "@/hoc/AuthGuard";
import "./pages.css";

type Props = {
  userData: any
}

function Home({userData}: Props) {
  return (
    <div className="homeContainer">
      <Sidebar />
      <MainSection userData={userData} />
    </div>
  );
};

export default AuthGaurd(Home);
