import React, { useState } from 'react';
import './App.css';
import Main from './main/main.jsx';
import './main/main.css';
import Sidebar from './sidebar/sidebar.jsx'
import './sidebar/sidebar.css'
import About from './about/about.jsx'
import './about/about.css'
import Skills from './skills/skills.jsx'
import './skills/skills.css'
import Projects from './projects/projects.jsx'
import './projects/projects.css'

function App() {

  const [visibleDiv, setVisibleDiv] = useState('main');

  const renderDiv = () => {
    switch (visibleDiv) {
      case 'main':
        return <Main />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar onButtonClick={setVisibleDiv} />
      <div style={{flex: 1 }}>
        {renderDiv()}
      </div>
    </div>
  );
}

export default App;
