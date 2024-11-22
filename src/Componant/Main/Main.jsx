import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Style from "./Main.module.css";
import { Helmet } from "react-helmet";
import { myProjects } from "../Atoms/ProjectAtom";
import { useRecoilState } from "recoil";
import { Fade } from "react-awesome-reveal";

export function Main() {
  const [projectLength, setProjectLength] = useRecoilState(myProjects);
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(projectLength);

  console.log(projectLength);

  const filterProjects = (category) => {
    if (category === "all") {
      setArr(projectLength);
    } else {
      const filtered = projectLength.filter((item) => item.category === category);
      setArr(filtered);
    }
    setCurrentActive(category);
  };

  return (
    <>
      <Helmet>
        <title>Main | Projects</title>
        <meta name="Main" content="This is the main page to see my projects" />
      </Helmet>

      <section className={`${Style.main} mt-4 main mx-auto`}>
        <div className="row">
          {/* Sidebar Buttons */}
          <div className={`${Style.allBtn} col-md-3`}>
            <div className="d-flex flex-md-column flex-wrap justify-content-center">
              {["all", "css", "js", "jQuery", "react"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterProjects(category)}
                  className={`${
                    currentActive === category ? Style.active : null
                  } btn ms-2 my-2 py-2 px-2 rounded-4`}
                >
                  {category === "all" ? "All Projects" : category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className={`${Style.allCard} col-md-9`}>
            <div className={`row ms-md-3 mt-3`}>
              {arr && arr.length > 0 ? (
                arr.map((item) => (
                  <div key={item.id} className="col-md-6 d-flex">
                    <Fade direction="right" duration={1000}>
                      <Card className={`${Style.cardStyle} mb-3`}>
                        <Card.Img
                          variant="top"
                          className={`${Style.imgStyle}`}
                          src={item.imges.cover}
                          alt={item.title}
                        />
                        <Card.Body className="p-3">
                          <Card.Title>
                            <h2 className="h4 fw-bolder mb-3">
                              {item.title}
                              <i className={`${item.icon} ms-2`}></i>
                            </h2>
                          </Card.Title>
                          <Card.Text>
                            <p className="fs-6">{item.description}</p>
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className={`${Style.icons} mt-2 d-flex`}>
                              <a href={item.demo} target="_blank" rel="noreferrer">
                                <i className="fa-solid ms-1 fa-link"></i>
                              </a>
                              <a href={item.github} target="_blank" rel="noreferrer">
                                <i className="ms-2 fa-brands fa-github"></i>
                              </a>
                            </div>
                            <Link className="text-primary me-2" to={`/projectDetails/${item.id}`}>
                              more
                              <i className="ms-1 fa-solid fa-arrow-right"></i>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Fade>
                  </div>
                ))
              ) : (
                <Oval
                  visible={true}
                  height="25"
                  width="55"
                  color="#4fa94d"
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
