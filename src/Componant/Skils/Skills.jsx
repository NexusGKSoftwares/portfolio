import React from 'react';
import Style from "../Skils/Skills.module.css";
import { Slide } from 'react-awesome-reveal';

const courses = [
  {
    title: "Advanced Website Development Course",
    duration: "Aug 2024 - Nov 2024",
    institute: "Emobilis Training Institute"
  },
  {
    title: "Software Engineering Course",
    duration: "Jan 2024 - Jun 2024",
    institute: "FreecodeCamp Academy"
  },
  {
    title: "Full Stack Development",
    duration: "Dec 2021 - Dec 2023",
    institute: "Harvard University"
  },
  {
    title: "Microsoft Packages",
    duration: "Aug 2019 - Nov 2020",
    institute: "St. Joseph Boys Kitale"
  }
];

const skills = [
  { name: "HTML5", iconClass: "fa-html5" },
  { name: "CSS3", iconClass: "fa-css3-alt" },
  { name: "Bootstrap", iconClass: "fa-bootstrap" },
  { name: "JavaScript", iconClass: "fa-js" },
  { name: "jQuery", iconClass: "fa-code" },
  { name: "TypeScript", iconClass: "fa-brands fa-js-square" },
  { name: "Python", iconClass: "fa-python" },
  { name: "PHP", iconClass: "fa-php" },
  { name: "C++", iconClass: "fa-brands fa-cuttlefish" },
  { name: "Kotlin", iconClass: "fa-brands fa-android" },
  { name: "GitHub", iconClass: "fa-github" },
  { name: "Ajax (API)", iconClass: "fa-sync" },
  { name: "React.JS", iconClass: "fa-react" },
  { name: "Swift", iconClass: "fa-swift" },
  { name: "Next.JS", iconClass: "fa-globe" }
];

const CourseItem = ({ title, duration, institute }) => (
  <div>
    <div className="d-flex justify-content-between mt-4 align-items-center">
      <h2 className="h4">{title}</h2>
      <p>{duration}</p>
    </div>
    <p className={Style.childPar}>{institute}</p>
  </div>
);

const SkillItem = ({ name, iconClass }) => (
  <div className={`${Style.iconItem} col-md-2 ms-md-4 mt-4 cursor-pointer rounded-3`}>
    <i className={`fa ${iconClass} display-2 d-flex justify-content-center my-3`}></i>
    <h3 className="h3 text-center">{name}</h3>
  </div>
);

export default function Skills() {
  return (
    <section className={`${Style.skillsStyle}`}>
      {/* Courses Section */}
      <div className={`${Style.coursesStyle} mx-auto`}>
        <h1 className="fw-bolder border-bottom text-center">
          Courses <i className="fs-2 ms-2 fa fa-solid fa-database"></i>
        </h1>
        <Slide direction="left" duration={1000}>
          {courses.map((course, index) => (
            <CourseItem key={index} {...course} />
          ))}
        </Slide>
      </div>

      <div className={`${Style.borderStyle}`} />

      {/* Skills Section */}
      <div className={`${Style.icons} mx-auto`}>
        <h1 className="fw-bolder border-bottom mt-4 text-center">
          Technical Skills <i className="fa-solid fa-globe fs-2 ms-2"></i>
        </h1>
        <Slide direction="left" duration={1000}>
          <div className="row d-flex justify-content-center">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </Slide>
      </div>
    </section>
  );
}
