import Splash from "../components/splash";
import MainPage from "../components/mainPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  function listener(){
    setScrollY(window.pageYOffset);
  }
  useEffect(()=>{
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <>
      <Splash/>
      <MainPage/>
    </>
  );
}
