import style from "../styles/splash.module.css";
import Image from "next/image";
import loadingOrca from "../public/img/giphy.gif"; // 4:3 img
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { splashOn, splashOff } from "../store/modules/splashSlice";

export default function splash() {
  const splashLoadingState = useSelector((state) => state.splash.value);
  const dispatch = useDispatch();
  const wrapRef = useRef();

  useEffect(() => {
    wrapRef.current.style.opacity = String(splashLoadingState);
    setTimeout(() => {
      dispatch(splashOff("hello"));
    }, 3000);
  }, [splashLoadingState]);

  return (
    <>
      <div ref={wrapRef} className={style.wrap}>
        <Image src={loadingOrca} width={400} height={300} />
        <div className={style.loadingText}>
          <h1>WUYUH's PORTFOLIO</h1>
          <h4>WEB PROGRAMMER</h4>
        </div>
      </div>
    </>
  );
}
