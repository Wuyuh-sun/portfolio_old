import Nav from "./main/nav";
import Jumbotron from "./main/jumbotron";
import Myinfo from "./main/myinfo";

import About from "./main/about";
import Skill from "./main/skill";
import PortFolios from "./main/portfolios";
import style from "../styles/mainPage.module.css";

export default function mainPage() {
  return (
    <>
      {/* header semantic */}
      <Jumbotron />
      {/* nav semantic */}
      <Nav />
      {/* main semantic */}
      <div className={style.wrap}>
        <About />
        <Myinfo />
        <Skill/>
        <PortFolios/>
      </div>
      
    </>
  );
}
