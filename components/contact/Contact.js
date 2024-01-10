import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaUnsplash } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import Link from "next/link";
import SectionTitle from '../sectionTitle/SectionTitle'

const Contact = () => {
  return (
    <>
      <section id="contact" className="mb-3">
        <SectionTitle title="contact" subtitle="contact"/>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="contact_left p-4 rounded-3">
                <img
                  src="/contact.png"
                  alt=""
                  className="img-fluid rounded-3 contact_img"
                />
                <h2 className="m-0 font-poppin font-30 mt-3 fw-bold ">
                  Mosharraf Hossain
                </h2>
                <p className=" font-poppin font-18 text-capitalize font-weight">
                  chairman
                </p>
                <p className="m-0 font-poppin font-poppin font-18 pb-4 font-weight">
                  Connect with me via and call in to my account.
                </p>
                <div className="pb-4">
                  <p className="m-0 text-capitalize font-poppin font-18 font-weight">
                    phone : +088 000 00 00 00
                  </p>
                  <p className="m-0 font-poppin font-18 font-weight">
                    Email: demo@gmail.com
                  </p>
                </div>
                <p className="m-0 text-uppercase font-poppin font-18 font-weight">
                  FIND WITH ME
                </p>
                {/* social links */}
                <div className="d-flex my-4">
                  <Link
                    data-aos="fade-up"
                    data-aos-duration="500"
                    href="#"
                    className="me-3 mn_ho"
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
            <Col lg={7}>
              <div className="contact_right ms-2 p-4 rounded-3">
                <form>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label className="form-label font-poppin text-uppercase font-14 ">
                          your name
                        </label>
                        <input
                          type="text"
                          className="form-control form_input py-3 rounded-2"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label className="form-label font-poppin text-uppercase font-14">
                          PHONE NUMBER
                        </label>
                        <input
                          type="number"
                          className="form-control form_input py-3 rounded-2"
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <label className="form-label font-poppin text-capitalize">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control form_input py-3 rounded-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label font-poppin text-capitalize">
                      subject
                    </label>
                    <input
                      type="text"
                      className="form-control form_input py-3 rounded-2"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label font-poppin text-capitalize">
                      your message
                    </label>
                    <div className="form-floating  mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        style={{
                          height: "135px",
                          boxShadow: "none",
                          border: "none",
                        }}
                      ></textarea>
                      <label>Comments</label>
                    </div>
                  </div>
                  <div className="submit_btn rounded-2">
                    <button
                      type="button"
                      className="w-100 rounded-2 contact_submit_btn text-capitalize font-poppin"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
