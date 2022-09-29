import Nav from "./main/nav";
import Jumbotron from "./main/jumbotron";
import Myinfo from "./main/myinfo";
import Footer from "./main/footer";
import About from "./main/about";
import style from "../styles/mainPage.module.css";

export default function mainPage() {
  return (
    <>
      <Nav />
      <Jumbotron />
      <div className={style.wrap}>
        <Myinfo />
        <About />
      </div>
      <Footer />
    </>
  );
}
