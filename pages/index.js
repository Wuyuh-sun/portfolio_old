import Splash from "../components/Splash";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import { useRef,useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
