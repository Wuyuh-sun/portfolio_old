import style from "../../styles/myinfo.module.css";
import Image from "next/image";
import LinkImg from "../../public/img/1x/Link.png";

export default function myinfo() {
  return (
    <>
      <div className={style.wrap}>
        <section>
          <div className={style.title_wrap}>
            <Image src={LinkImg} width={50} height={50} />
            <h1>About Me</h1>
          </div>
          <div className={style.content_wrap}>
            
          </div>
        </section>
      </div>
    </>
  );
}
