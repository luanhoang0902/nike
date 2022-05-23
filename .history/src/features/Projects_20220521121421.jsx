import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "../css/Projects.css";

Projects.propTypes = {};

const projects = [
  {
    id: 1,
    img: "./1.png",
  },
  {
    id: 2,
    img: "./2.png",
  },
  {
    id: 3,
    img: "./3.png",
  },
  {
    id: 4,
    img: "./4.png",
  },
];
const detail = [
  {
    id: 1,
    name: "Clone Nike.com",
    feature: ["Trang chủ", "Trang danh sách sản phẩm", "Trang đăng nhập", "Trang giỏ hàng"],
    technology: ["html5", "css3", "javascript", "react", "redux"],
  },
  {
    id: 2,
    name: "Profile",
    feature: ["Project", "Technologies", "About", "Contaxt"],
    technology: ["html5", "css3", "javascript", "react"],
  },
  {
    id: 3,
    name: "Learn Hook",
    feature: ["Trang giới thiệu", "Kiến thức của các Hook", "Các ví dụ"],
    technology: ["html5", "css3", "javascript", "react"],
  },
  {
    id: 4,
    name: "Todo List",
    feature: ["Thêm công việc cần làm", "Lọc dữ liệu theo filter", "Đánh dấu những việc đã hoàn thành"],
    technology: ["html5", "css3", "javascript", "react", "redux"],
  },
];
function Projects(props) {
  const slider = useRef();
  const controlLeft = useRef();
  const controlRight = useRef();
  const [id, setId] = useState(1);

  console.log(id);

  const handleClickProject = (e) => {
    slider.current.style.display = "block";
    setId(parseInt(e.target.className));
  };

 useEffect(() => {
  id === 1? (controlLeft.current.style.opacity = "0"): (controlLeft.current.style.opacity = "1");
  id === 4? (controlRight.current.style.opacity = "0"): (controlRight.current.style.opacity = "1");
 },[id])

  return (
    <div className="projects">
      <u>Projects</u>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} onClick={handleClickProject}>
            <img src={project.img} className={project.id}></img>
          </div>
        ))}
      </div>
      <div className="project-list__slider" ref={slider}>
        <div className="project-list__slider-x">
          <i
            class="bx bx-x"
            onClick={() => {
              slider.current.style.display = "none";
            }}
          ></i>
        </div>
        <div className="project-list__slider-all">
          <i
            class="bx bx-chevron-left"
            onClick={(e) => {
              id !== 1 ? setId(id - 1) : console.log("ok");
            }}
            ref={controlLeft}
          ></i>
          <div className="project-list__slider-content">
            <div className="project-list__slider-content-image">
              <img src={projects[id-1].img}></img>
            </div>
            <div className="project-list__slider-content-detail">
              <div><b style = {{fontSize: 30}}>Name:</b><br/> {detail[id - 1].name}</div>
              <div>
                <ol>
                  <b style = {{fontSize: 30}}>Feature:</b>
                  {detail[id - 1].feature.map((e, index) => (
                    <li style = {{marginLeft: 40}}>{e}</li>
                  ))}
                </ol>
              </div>
              <div>
                <ul>
                  <b style = {{fontSize: 30}}>Technology:</b>
                  {detail[id - 1].technology.map((e, index) => (
                    <li >
                      <i class={`bx bxl-${e}`}></i>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <i
            class="bx bx-chevron-right"
            onClick={(e) => {
              id !== 4 ? setId(id + 1) : console.log("ok");
            }}
            ref={controlRight}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Projects;
