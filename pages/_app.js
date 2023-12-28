import "/styles/globals.css";
import "../styles/footer.css";
import "../styles/Slider.css";
import "../styles/Topbar.css";
import "../styles/Header.css";
import "../styles/Blog.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SSRProvider } from "react-bootstrap";
import NextNProgress from "nextjs-progressbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "../layouts/Layout";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  // https://www.npmjs.com/package/nextjs-progressbar

  return (
    <Fragment>
      <SSRProvider>
        <Layout>
          <NextNProgress options={{ easing: "ease", speed: 500 }} />

          
              <Component {...pageProps} />
           

          <ToastContainer autoClose={2500} position="bottom-right" />
        </Layout>
      </SSRProvider>
    </Fragment>
  );
}
