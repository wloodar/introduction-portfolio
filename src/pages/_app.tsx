import React, { useState, useEffect, useRef } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import type { AppProps } from 'next/app'
import Router from 'next/router';
import '../../public/styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [loading, setLoading] = useState<boolean>(true);
  const loadingScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("load", function(){
      setLoading(!loading);
      if (loadingScreenRef !== null) {
        // @ts-ignore: Object is possibly 'null'.
        loadingScreenRef!.current.style.opacity = 0;

        setTimeout(() => {
          // @ts-ignore: Object is possibly 'null'.
          loadingScreenRef!.current.style.display = "none";
        }, 100);
      }
    });
    
  }, [])

  return (
    <AnimateSharedLayout>

      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, background: "#fff", transition: "1s all ease", zIndex: 999999 }} ref={loadingScreenRef}>
        <img src="/img/logo/wlodev-black-transparent.png" alt="Logo wlodev.com" style={{ width: "100px", position: "absolute", top: "45%", left: 0, right: 0, margin: "auto" }}/>
      </div>

      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}
export default MyApp
