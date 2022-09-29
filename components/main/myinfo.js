import style from "../../styles/myinfo.module.css";
import Image from "next/image";
import splashImg from "../../public/img/sample.png";

export default function myinfo() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.profile_ImgWrap}>
          <Image src={splashImg} width={400} height={400} />
        </div>
        <section>
          
        </section>
      </div>
    </>
  );
}
