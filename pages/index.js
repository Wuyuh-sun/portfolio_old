import Link from "next/link";
import Splash from "../components/splash";
import Router from "next/router";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = Router;
      if (pathname == "/") {
        Router.push("/homePage");
      }
    }, 3000);
  }, []);
  return (
    <>
      <Splash></Splash>
    </>
  );
}
