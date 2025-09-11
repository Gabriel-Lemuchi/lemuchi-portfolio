const Sidebar = ( {onButtonClick} ) => {

  return(
    <sidebar>
        <div id="bar">
          <div id="home_button" onClick={() => onButtonClick('main')} class="sidebar_button">
            <img src="images/home.png" alt="" />
          </div>
          <div id="about_button" onClick={() => onButtonClick('about')} class="sidebar_button">
            <img src="images/about.png" alt="" />
          </div>
          <div id="skills_button" onClick={() => onButtonClick('skills')} class="sidebar_button">
            <img src="images/skills.png" alt="" />
          </div>
          <div id="projects_button" onClick={() => onButtonClick('projects')} class="sidebar_button">
            <img src="images/projects.png" alt="" />
          </div>
      </div>
    </sidebar>
  );
}

export default Sidebar;
