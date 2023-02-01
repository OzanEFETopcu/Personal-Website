import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import NavbarBS from './NavbarBS'
import './Styling/GeneralStyle.css'


function App() {
  return (
    <>
      <div>
        <NavbarBS/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App;
