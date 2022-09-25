import style from "../styles/splash.module.css";
import Image from "next/image";
import loadingOrca from "../public/img/giphy-unscreen.gif"; // 4:3 img
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { splashOn, splashOff } from "../store/modules/splashSlice";

export default function splash() {
  const splashLoadingState = useSelector((state) => state.splash.value);
  const dispatch = useDispatch();
  const wrapRef = useRef();

  useEffect(() => {
    if (splashLoadingState === 0) {
      wrapRef.current.childNodes[0].childNodes[1].style.opacity = 0;
      wrapRef.current.childNodes[1].style.opacity = 0;
      wrapRef.current.style.opacity = 0;
      setTimeout(()=>{
        wrapRef.current.style.display = "none";
        document.body.style.overflow = "auto";
      },1000)
    }
    setTimeout(() => {
      dispatch(splashOff());
    }, 3000);
  }, [splashLoadingState]);

  return (
    <>
      <div ref={wrapRef} className={style.wrap}>
        <Image src={loadingOrca} width={400} height={300} />
        <div className={style.loadingText}>
          <h1>WUYUH's WEB PORTFOLIO</h1>
          <h4>WEB FullStack Developer</h4>
        </div>
      </div>
    </>
  );
}
