import React, { Component } from "react";
import "./styles.scss";
import Link from "./components/Link/Link";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import projectsData from "./portfolio.json";
import Header from "./components/Header/Header";
import gsap from "gsap";
import timelineController from "./helpers/timelineController";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const data = {
  globalSpeed: 6,
  timelineProgress: 0,
  ease: 0.1,
  timeline: null
};

data.fakeScrollHeight = data.globalSpeed * 1000;

const updateProgress = () => {
  let curProgress = data.timeline.progress();
  curProgress += (data.timelineProgress - curProgress) * data.ease;
  data.timeline.progress(curProgress);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.AppRef = React.createRef();
  }

  componentDidMount() {
    if (window.innerWidth > 1024) {
      data.timeline = timelineController(
        this.AppRef.current.querySelector(".Section1"),
        this.AppRef.current.querySelector(".Section2"),
        this.AppRef.current.querySelectorAll(".TextLink"),
        this.AppRef.current.querySelectorAll(".ImageLink"),
        this.AppRef.current.querySelector(".HeaderTitle1"),
        this.AppRef.current.querySelector(".HeaderTitle2")
      );
      window.addEventListener("scroll", () => {
        data.timelineProgress =
          window.scrollY * (1 / (data.fakeScrollHeight - window.innerHeight));
      });

      this.AppRef.current.querySelector(".FakeScroll").style.height =
        data.fakeScrollHeight + "px";

      gsap.ticker.add(updateProgress);
    }
  }
  render() {
    return (
      <div className="App" ref={this.AppRef}>
        <div className="FakeScroll"></div>
        {window.innerWidth > 600 ? <Header /> : null}
        <div className="Section Section1">
          <div className="Side LeftSide">
            {projectsData.projects.map((project, index) => {
              return (
                <Link key={'TextLink_' + index} customClass="TextLink" linkTo={project.url}>
                  {project.name}
                </Link>
              );
            })}
          </div>
          <div className="Side RightSide">
            <div className="ImagesHolder">
              {projectsData.projects.map((project, index) => {
                return (
                  <Link
                    key={'ImageLink_' + index}
                    customClass="ImageLink"
                    linkTo={project.url}
                  >
                    <img
                      alt={project.name}
                      src={process.env.PUBLIC_URL + project.image}
                    />
                    <div className="ImageDescription">
                      <p>{project.date}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="Section Section2">
          <div className="Section2Inner">
            <ProfileCard />
            <div className="Section2Right">
              <div className="Section2RightInner">
                <GitHubCalendar username="nikantic" blockSize={14} />
                <div className="OpenSourceSection">
                  <h2>Open Source Projects</h2>
                  <div className="OpenSourceSectionProjects">
                    {projectsData.openSourceProjects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={'OpenSourceProject_' + index}
                          title={project.name}
                          description={project.description}
                          linkTo={project.url}
                          tech={project.tech}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="SkillsSection">
                  <h2>Skills</h2>
                  <div className="SkillsSectionInner">
                    {projectsData.skills.map((skill, index) => {
                      return <span key={'Skill_' + index} className="SkillItem">{skill}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
