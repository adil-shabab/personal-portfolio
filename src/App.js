
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import {themeContext} from './Context'
import {useContext} from 'react'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{background: darkMode ? 'black': '', color: darkMode ? 'white': ''}}
    >
      <div className='fixed-top' style={{background: darkMode ? 'black': 'white'}}>
      <Navbar/>
      </div>
      <Home/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}



database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'knkdb',
        'USER': 'knkdbuser',
        'PASSWORD': 'HACKER@3197',
        'HOST': 'localhost',
        'PORT': '',
    }
}





export default App;
