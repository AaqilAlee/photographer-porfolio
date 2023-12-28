import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* <section className="footer_bg">
        <Container>
          
          <div classname="sub-footer">
            <div classname="">
              <p classname="text-white">© 2023 . All rights reserved.</p>
              <ul classname="social pull-right text-decoration-none">
                <li>
                  <Link href="#">
                    <i classname="icon-s-rss"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-dribbble"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i classname="icon-s-vimeo"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section> */}

      {/* copy right part */}
      <section className="copyright">
        <Container>
          <div className="d-flex justify-content-center py-3">
            <div className="">
              <p className="fw-semibold m-0">© 2023 MN | All rights reserved</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
