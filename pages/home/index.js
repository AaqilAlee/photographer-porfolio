import React, { Fragment } from "react";
import Head from "next/head";
import Slider from "../../components/Slider/Slider";
import ScrollToTop from "../../components/scrollTop/ScrollToTopButton";
import Blogs from "../../components/blogs/Blogs";
import AboutMe from "../../components/aboutme/AboutMe";
import Gallery from "../../components/gallery/WorkGallery";
import Events from "../../components/events/Events";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Slider />
      <AboutMe/>
      <Gallery/>
      <Events/>
      <Blogs/>
      <ScrollToTop />
    </Fragment>
  );
};

export default HomePage;
