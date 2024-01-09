import React, { useState, useEffect } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Col, Container, Row } from "react-bootstrap";
import PageDta from "../../data/Data";
import Link from "next/link";
const Events = () => {
  const [filterImage, setFilterImage] = useState([]);
  const [image, setImage] = useState([]);
  const [tab, setTab] = useState("all");

  const handleTabChange = (t) => {
    setTab(t);
  };

  const getdata = () => {
    setImage(PageDta);
    setFilterImage(PageDta);
  };
  console.log(PageDta);

  useEffect(() => {
    getdata();
  }, []);

  const filterItem = (brandlist) => {
    const updatedcard = image.filter((curElem) => {
      return curElem.category === brandlist;
    });
    setFilterImage(updatedcard);
  };

  return (
    <>
      <section>
        <SectionTitle title="events" subtitle="events" />
        <Container>
          <Row>
            <Col lg={3}>
              <div className="events shadow">
                <ul className="px-0">
                  <li
                    className={` rounded-3 ${
                      tab === "events one" ? "event_list" : ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        setFilterImage(image);
                        handleTabChange("events one");
                      }}
                      className="py-4 w-100 bg-transparent border-0 text-capitalize"
                    >
                      events one
                    </button>
                  </li>

                  <li
                    className={` rounded-3 ${
                      tab === "events two" ? "event_list" : ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        filterItem("one");
                        handleTabChange("events two");
                      }}
                      className={`py-4 w-100 bg-transparent border-0 text-capitalize ${
                        tab === "events two" ? "active" : ""
                      }`}
                    >
                      events two
                    </button>
                  </li>

                  <li
                    className={` rounded-3 ${
                      tab === "events three" ? "event_list" : ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        filterItem("four");
                        handleTabChange("events three");
                      }}
                      className={`py-4 w-100 bg-transparent border-0 text-capitalize ${
                        tab === "events three" ? "active" : ""
                      }`}
                    >
                      events three
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                {filterImage.map((curElem) => {
                  return (
                    <>
                      <Col lg={4}>
                        <Link href="#" className="text-decoration-none event_card_link">
                          <div className="event_card mb-4">
                            <img
                              src={curElem.thumbnail}
                              alt=""
                              className="img-fluid event_card_img"
                            />
                            <p className="text-center py-3 m-0 text-capitalize event_card_title">
                              {curElem.title}
                            </p>
                          </div>
                        </Link>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Events;
