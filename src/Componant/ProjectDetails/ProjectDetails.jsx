import React from 'react';
import Style from './ProjectDetails.module.css';
import { myProjects } from '../Atoms/ProjectAtom';
import { useRecoilValue } from 'recoil'; // use useRecoilValue instead of useRecoilState since state updates are not needed
import { useParams } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import Slider from 'react-slick';

export default function ProjectDetails() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const projectList = useRecoilValue(myProjects); // Read-only value
  let { id } = useParams();

  // Find the project based on the ID
  const selectedProject = projectList.find((item) => item.id === id);

  if (!selectedProject) {
    return <div className="text-center">Project not found</div>;
  }

  const { title, icon, imges, description, category, demo, github } = selectedProject;

  return (
    <>
      <section className={`${Style.productDetails} mx-auto`}>
        <h1 className="fw-bolder pb-2 mb-5 d-flex align-items-center justify-content-center">
          {title}
          <i className={`${icon} ms-2`}></i>
        </h1>
        <Slide direction="left" duration={1000}>
          <picture className="d-flex justify-content-center">
            <img src={imges.cover} alt="cover" className={`${Style.coverImg} rounded-5`} />
          </picture>
        </Slide>
        <Fade direction="up" duration={1000}>
          <div className={`${Style.descProject} my-5`}>
            <p className="h5">
              <span className="border-bottom fw-semibold">Description:</span> {description}
            </p>
            <p className="h5 mt-3">
              <span className="border-bottom fw-semibold me-1">Category:</span> {category}
            </p>
            <div className="d-flex justify-content-around my-5">
              <a href={demo} className="btn" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-eye"></i> Demo
              </a>
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i> Github
              </a>
            </div>
          </div>
        </Fade>

        <div className="slider-container w-75 position-relative start-50 translate-middle-x">
          <Slider {...settings}>
            {Object.keys(imges)
              .filter((key) => key !== 'cover') // Exclude the cover image
              .map((key, index) => (
                <div key={index} className="d-flex align-items-center">
                  <img
                    src={imges[key]}
                    className={`w-75 rounded-5 ${index % 2 === 0 ? 'me-3' : 'ms-3'}`}
                    alt={`Project screenshot ${key}`}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
