import Splash from "../components/splash";
import MainPage from "../components/mainPage";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/" + "hi1" + "/" + "hi2" + "/" + "hi3")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Splash />
      <MainPage />
      {/* footer semantic */}
      <Footer />
    </>
  );
}
