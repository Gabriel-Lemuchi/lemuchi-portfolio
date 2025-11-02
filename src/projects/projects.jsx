const Projects = () => {
  return (
    <>
      <div id="main_projects">
          <h1>PROJECTS</h1>
          <div id="containers_div">
            <div class="container_project">
            <img src="images/lemuchiBOT.png" alt="" width="44px"/>
              <p>LEMUCHIBOT</p>
              <a href="https://lemuchibot.vercel.app/" target="blank">
              See project
              </a>
            </div>
            <div class="container_project">
              <img src="images/marketbot.png" alt="" width="44px"/>
              <p>MarketBot</p>
              <a href="https://marketbot-pi.vercel.app/" target="blank">
              See project
              </a>
            </div>
            <div class="container_project">
              <img src="images/weather.png" alt="" width="44px"/>
              <p>Weather Researcher</p>
              <a href="https://weather-researcher.vercel.app/" target="blank">
              See project
              </a>
            </div>
          </div>
      </div>
    </>
  );
}

export default Projects;
