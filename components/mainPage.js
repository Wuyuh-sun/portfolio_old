import Nav from "./main/nav";
import Jumbotron from "./main/jumbotron";
import Myinfo from "./main/myinfo";
import Footer from "./main/footer";
import About from "./main/about";
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
        <Myinfo />
        <About />
      </div>
      {/* footer semantic */}
      <Footer />
    </>
  );
}
