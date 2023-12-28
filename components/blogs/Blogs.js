import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <>
      <Container>
        <div class="py-5">
          <div class="">
            <div class="section-title text-center">
              <h3 className="font-24 fw-bold">my blogs</h3>
            </div>
            <div class="row blog-posts">
              <div class="col-sm-4">
                <div class="post bordered shadow">
                  <h3 class="text-capitalize text-center">srilanka</h3>
                  <div class="meta text-center">
                    <span class="date">18.04.2014</span>
                    <span class="categories">
                      <Link href="#">Photography</Link>
                    </span>
                  </div>
                  <figure class="full">
                    <Link href="blog-post.html">
                      <div class="text-overlay">
                        <div class="info">Read More</div>
                      </div>
                      <img src="/bird.jpg" alt="" />
                    </Link>
                  </figure>
                  <div class="post-content">
                    <p className="font-14">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div class="footer-meta">
                      <Link href="#" class="text-decoration-none font-16">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="post bordered shadow">
                  <h3 class="text-capitalize text-center">srilanka</h3>
                  <div class="meta text-center">
                    <span class="date">18.04.2014</span>
                    <span class="categories">
                      <Link href="#">Photography</Link>
                    </span>
                  </div>
                  <figure class="full">
                    <Link href="blog-post.html">
                      <div class="text-overlay">
                        <div class="info">Read More</div>
                      </div>
                      <img src="/bird.jpg" alt="" />
                    </Link>
                  </figure>
                  <div class="post-content">
                    <p className="font-14">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div class="footer-meta">
                      <Link href="#" class="text-decoration-none font-16">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="post bordered shadow">
                  <h3 class="text-capitalize text-center">srilanka</h3>
                  <div class="meta text-center">
                    <span class="date">18.04.2014</span>
                    <span class="categories">
                      <Link href="#">Photography</Link>
                    </span>
                  </div>
                  <figure class="full">
                    <Link href="blog-post.html">
                      <div class="text-overlay">
                        <div class="info">Read More</div>
                      </div>
                      <img src="/bird.jpg" alt="" />
                    </Link>
                  </figure>
                  <div class="post-content">
                    <p className="font-14">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                    <div class="footer-meta">
                      <Link href="#" class="text-decoration-none font-16">
                        Continue Reading
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blogs;
