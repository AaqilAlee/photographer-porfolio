import Link from "next/link";
import React, { Fragment, useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BiChevronDown } from "react-icons/bi";

import Image from "next/image";
import Logo from "../../public/logo/4.png";


const HeaderOld = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById("Top").classList.add("sticky2");
    } else {
      document.getElementById("Top").classList.remove("sticky2");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const [navShow, setNavShow] = useState(false);
  const [drop, setDrop] = useState("dropdown_items");
  const [showItems, setShowItems] = useState(false);
  const [showItems2, setShowItems2] = useState(false);

  const handleMouseEnter = () => {
    setShowItems(true);
    setDrop(drop);
  };

  const handleMouseLeave = () => {
    setShowItems(false);
  };

  const handleClickService = () => {
    setShowItems(false);
    // router.push("/");
  };

  // second
  const handleMouseEnter2 = () => {
    setShowItems2(true);
  };

  const handleMouseLeave2 = () => {
    setShowItems2(false);
  };

  const handleClickService2 = () => {
    setShowItems2(false);
    // router.push("/");
  };

  return (
    <>
      <header>
       

        {/*Logo & manu*/}
        <section id="Top" className="overbanner2">
          <Container className="px-0">
            <div className="d-flex justify-content-between align-items-center main-manu-item">
              <div className="">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Picture of the author"
                    className="brand_logo"
                  />
                </Link>
              </div>
              <Nav className="mx-auto pt-2 font-lato manu-font manu-items ">
                <Nav.Link
                  as={Link}
                  href="/"
                  className="d-flex align-items-center text-light font-16 my-2"
                >
                  <span className="position-relative after_border pb-2 text-capitalize sticky_text_color">
                    home
                  </span>
                </Nav.Link>

                {/* <NavDropdown
                  className="p-0 rounded-0 about-btn dropdown_menu-7 "
                  title={
                    <div className="d-flex align-items-center ">
                      <span className=" position-relative text-capitalize text-light sticky_text_color text-inter py-2 font-16 d-flex  align-items-center position-relative after_border">
                        about us
                      </span>
                      <BiChevronDown className="ms-1 text-white sticky_text_color" />
                    </div>
                  }
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => handleMouseEnter()}
                  // onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleClickService()}
                  show={showItems}
                >
                  <NavDropdown.Item
                    as={Link}
                    href="/page/inception"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    inception
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/page/mission-vision"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    mission & vision
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item
                    as={Link}
                    href="/page/factories"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    factories
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/page/milestones"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    milestones
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/page/objective"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Objective
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/page/sustainability-practics"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    sustainability practics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/page/distribution-network"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Distribution network
                  </NavDropdown.Item>
                </NavDropdown> */}

                {/* <NavDropdown
                  className="p-0 rounded-0 about-btn dropdown_menu-7 about_btn_width"
                  title={
                    <div className="d-flex align-items-center ">
                      <span className=" position-relative text-capitalize text-light sticky_text_color text-inter py-2 font-16 d-flex  align-items-center position-relative after_border">
                        organogram
                      </span>
                      <BiChevronDown className="ms-1 text-white sticky_text_color" />
                    </div>
                  }
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => handleMouseEnter()}
                  // onMouseLeave={() => handleMouseLeave()}
                  onClick={() => handleClickService()}
                  show={showItems}
                >
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/corporate"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    corporate
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/rajshahi_rangpur"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Rajshahi And Rangpur Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/khulna_barisal"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Khulna And Barisal Division


                  </NavDropdown.Item>
                  
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/mymensingh_dhaka"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Mymensingh And Dhaka Part-3 Division
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/dhaka_dhaka"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Dhaka Part-1 And Dhaka Part-2 Division


                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/chattogram_sylhet"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    Chattogram And Sylhet Division


                  </NavDropdown.Item> 
                  <NavDropdown.Item
                    as={Link}
                    href="/organogram/cro"
                    className="cate-drop text-light text-capitalize all-icons text-dark px-4 py-2 d-block"
                  >
                    CRO


                  </NavDropdown.Item> 
                </NavDropdown> */}

                {/* <NavDropdown
                  className="p-0 rounded-0 business-btn dropdown_menu-7 "
                  title={
                    <div className="d-flex align-items-center ">
                      <span className=" position-relative text-capitalize text-light sticky_text_color text-inter py-2 font-16 d-flex  align-items-center position-relative after_border">
                        business
                      </span>
                      <BiChevronDown className="ms-1 text-white sticky_text_color" />
                    </div>
                  }
                  id="navbarScrollingDropdown"
                  onMouseEnter={() => handleMouseEnter2()}
                  onMouseLeave={() => handleMouseLeave2()}
                  onClick={() => handleClickService2()}
                  show={showItems2}
                >
                  <div className="subMenuBox rounded-3">
                    <div className="menuContent d-flex rounded-3">
                      <div className="textBox px-4 py-2">
                        <h4 className="mt-3 mb-4"> organogram </h4>
                        <img
                          src="/b2b.jpg"
                          alt=""
                          className="dropdown_img img-fluid pb-4"
                        />
                        <p className="font-14 text-justify mb-5 font-lato text-capitalize">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                        <div className="mb-4">
                          <Link
                            href="/board-of-directors"
                            onClick={() => setShowItems(false)}
                            className="menuBtn mb-4 text-white fw-semibold font-poppins"
                          >
                            see More
                          </Link>
                        </div>
                      </div>
                      <div className="textBox px-4 py-2">
                        <h4 className="mt-3 mb-4">categories</h4>
                        <img
                          src="/b2b.jpg"
                          alt=""
                          className="dropdown_img img-fluid pb-4"
                        />
                        <p className="font-14 text-justify mb-5 font-lato text-capitalize">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                        <div className="mb-4">
                          <Link
                            href="/"
                            onClick={() => setShowItems(false)}
                            className="menuBtn mt-4 text-white fw-semibold font-poppins"
                          >
                            see More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavDropdown> */}

               
                <Nav.Link
                  as={Link}
                  href="/"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    about me
                  </span>
                </Nav.Link>
                
                <Nav.Link
                  as={Link}
                  href="/"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    Gallery
                  </span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  href="#blog"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    blogs
                  </span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  href="/"
                  className="d-flex align-items-center font-16 my-2 text-light"
                >
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    contact
                  </span>
                </Nav.Link>
              </Nav>

              {/* <div className="login">
                <div className="d-flex justify-content-between align-items-center">
                  {storedToken && (
                  <Fragment>
                    <DropdownButton
                      id="dropdown-basic-button"
                      className="user-icon border-start"
                      title={
                        <span className="manu-icon border-0 d-flex align-items-center">
                          <FaUserCircle
                            size={"25px"}
                            className="sticky_text_color"
                          />
                          <p className="font-12 ps-2 sticky_text_color">
                            Register or login
                          </p>
                        </span>
                      }
                    >
                      <Dropdown.Item className="logoutBtn">
                        <Link
                          href="/my-account"
                          className="d-flex align-items-center profile-btn text-capitalize"
                        >
                          <CiUser className="font-16 me-1" />
                          <span className="font-16">account</span>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="logoutBtn">
                        <Link
                          href="/"
                          className="d-flex align-items-center profile-btn text-capitalize"
                        >
                          <MdOutlineLogout className="font-16 me-1" />
                          <span
                            className="font-16"
                            onClick={(e) => {
                              e.preventDefault();
                              logout();
                            }}
                          >
                            logout
                          </span>
                        </Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  </Fragment>
                   )}  
                </div>
              </div> */}
            </div>
          </Container>
        </section>

        {/* for responsive screen */}
        {/* <section className="bg-dark btn-hover overlay-div">
          <Navbar bg="dark" expand="lg">
            <Container className="px-0" fluid>
              <div className="col-lg-3 col-md-3 me-0" href="#">
                <NavDropdown
                  className="p-0 me-auto rounded-0 w-100"
                  title={
                    <span className="text-white font-lato px-4 py-3 d-flex align-items-center categories">
                      <BiAlignLeft size={"15px"} className="me-2" />
                      CATEGORIES
                    </span>
                  }
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item className="text-capitalize all-icons text-dark px-4 py-2 d-block font-lato">
                    <Link href={`/combo`} className="cate-drop">
                      Combo Pack
                    </Link>
                  </NavDropdown.Item>

                  {categories.map((category, key) => {
                    return (
                      <NavDropdown.Item
                        key={key}
                        className="text-capitalize all-icons text-dark px-4 py-2 d-block font-lato"
                      >
                        <Link
                          href={`/category/${category.id}`}
                          className="cate-drop"
                        >
                          {category.name}
                        </Link>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </div>
              <div className="col-lg-9" href="#">
                <Overlay />
              </div>
            </Container>
          </Navbar>
        </section> */}
      </header>
    </>
  );
};
export default HeaderOld;
