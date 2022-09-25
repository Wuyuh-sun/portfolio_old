import Jumbotron from "./main/jumbotron";
import Myinfo from "./main/myinfo";
import Footer from "./main/footer";
import style from "../styles/mainPage.module.css";

export default function mainPage() {
  return (
    <>
      <Jumbotron />
      <div className={style.wrap}>
        <Myinfo />
      </div>
      <Footer/>
    </>
  );
}
