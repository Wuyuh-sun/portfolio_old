import Splash from "../components/splash";
import MainPage from "../components/mainPage";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Splash/>
      <MainPage/>
      {/* footer semantic */}
      <Footer />
    </>
  );
}
