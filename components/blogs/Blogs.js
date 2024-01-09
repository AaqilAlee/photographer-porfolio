import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SectionTitle from "../sectionTitle/SectionTitle";

const Blogs = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="blog">
        <Container>
          <div className="py-5">
            <div className="">
              <SectionTitle title="my blogs" subtitle="my blogs" />

              <div className="row blog-posts">
                <Slider {...settings}>
                  <div className="col-sm-4">
                    <div className="post bordered shadow rounded-4 mx-3">
                      <h3 className="text-capitalize text-center">srilanka</h3>
                      <div className="meta text-center">
                        <span className="date">18.04.2014</span>
                        <span className="categories">
                          <Link href="#">Photography</Link>
                        </span>
                      </div>
                      <figure className="full  px-3">
                        <Link href="blog-post.html">
                          <div className="text-overlay">
                            <div className="info">Read More</div>
                          </div>
                          <img src="/bird.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-content">
                        <p className="font-14">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="footer-meta">
                          <Link
                            href="#"
                            className="text-decoration-none font-16"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="post bordered shadow rounded-4 mx-3">
                      <h3 className="text-capitalize text-center">srilanka</h3>
                      <div className="meta text-center">
                        <span className="date">18.04.2014</span>
                        <span className="categories">
                          <Link href="#">Photography</Link>
                        </span>
                      </div>
                      <figure className="full px-3">
                        <Link href="blog-post.html">
                          <div className="text-overlay">
                            <div className="info">Read More</div>
                          </div>
                          <img src="/bird.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-content">
                        <p className="font-14">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="footer-meta">
                          <Link
                            href="#"
                            className="text-decoration-none font-16"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="post bordered shadow rounded-4 mx-3">
                      <h3 className="text-capitalize text-center">srilanka</h3>
                      <div className="meta text-center">
                        <span className="date">18.04.2014</span>
                        <span className="categories">
                          <Link href="#">Photography</Link>
                        </span>
                      </div>
                      <figure className="full px-3">
                        <Link href="blog-post.html">
                          <div className="text-overlay">
                            <div className="info">Read More</div>
                          </div>
                          <img src="/bird.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-content">
                        <p className="font-14">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="footer-meta">
                          <Link
                            href="#"
                            className="text-decoration-none font-16"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="post bordered shadow rounded-4 mx-3">
                      <h3 className="text-capitalize text-center">srilanka</h3>
                      <div className="meta text-center">
                        <span className="date">18.04.2014</span>
                        <span className="categories">
                          <Link href="#">Photography</Link>
                        </span>
                      </div>
                      <figure className="full px-3">
                        <Link href="blog-post.html">
                          <div className="text-overlay">
                            <div className="info">Read More</div>
                          </div>
                          <img src="/bird.jpg" alt="" />
                        </Link>
                      </figure>
                      <div className="post-content">
                        <p className="font-14">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="footer-meta">
                          <Link
                            href="#"
                            className="text-decoration-none font-16"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
