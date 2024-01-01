import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaUnsplash } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="mt-5">
                <div>
                  <p className="text-uppercase sub_title font-Mont">
                    welcome to my world
                  </p>
                  <h1 className=" about_title font-Mont">
                    Hi, I'm
                    <span className="theme_text_color">
                      {" "}
                      Mosharraf
                      <br /> Hossain
                    </span>
                  </h1>
                  <TypeAnimation
                    sequence={[
                      " a photographer.",
                      1000,
                      "chairman of API",
                      2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{
                      fontSize: "50PX",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      display: "inline-block",
                    }}
                  />
                  <p className="pe-5 pt-4 font-Mont">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="d-flex social_height">
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="500"
                    href="#"
                    className="me-3"
                  >
                    <div className="social_link_mn d-flex justify-content-center align-items-center">
                      <div className="social_link m-0">
                        <FaFacebookF size={"25px"} className="social_icons" />
                      </div>
                    </div>
                  </Link>
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    href="#"
                    className="me-3"
                  >
                    <div className="social_link_mn d-flex justify-content-center align-items-center">
                      <div className="social_link m-0">
                        <IoLogoTwitter size={"25px"} className="social_icons" />
                      </div>
                    </div>
                  </Link>
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    href="#"
                    className="me-3"
                  >
                    <div className="social_link_mn d-flex justify-content-center align-items-center">
                      <div className="social_link m-0">
                        <FaLinkedinIn size={"25px"} className="social_icons" />
                      </div>
                    </div>
                  </Link>
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    href="https://unsplash.com/@mhphotography13"
                    className="me-3"
                    target="_blank"
                  >
                    <div className="social_link_mn d-flex justify-content-center align-items-center">
                      <div className="social_link m-0">
                        <FaUnsplash size={"25px"} className="social_icons" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={5} className="px-5">
              <div className="about_thumbnail position-relative">
                <div className="inner_img d-flex justify-content-center">
                  <img
                    src="/about/about_me.png"
                    alt=""
                    className="about_me_img "
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;
