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

  render() {
    return (
      <div className="App" ref={this.AppRef}>
        <div className="FakeScroll"></div>
        {window.innerWidth > 600 ? <Header /> : null}
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
