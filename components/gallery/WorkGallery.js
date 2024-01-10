import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import SectionTitle from "../sectionTitle/SectionTitle";
import Link from "next/link";

const WorkGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <section id="gallery" className="py-5 work_gallery">
      <SectionTitle title="photo gallery" subtitle="photo gallery" />
      <div>
        <Gallery photos={photos} onClick={openLightbox} className="g_img" />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <div className="d-flex justify-content-center mt-5">
          <Link href="" data-aos="fade-up" data-aos-duration="1000" className="see_more_photo text-decoration-none text-capitalize font-mont">see more</Link>
        </div>
      </div>
    </section>
  );
};
export default WorkGallery;
