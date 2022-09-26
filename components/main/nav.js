import logoImg from "../../public/img/1x/logo_black.png";
import Image from "next/image";
import style from "../../styles/nav.module.css";

export default function nav() {
  return (
    <>
      <div className={style.wrap}>
        <Image src={logoImg} width={50} height={50} />
      </div>
    </>
  );
}
