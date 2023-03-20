import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
// import logo from '../assets/img/logo.svg';
import linkedin from "../assets/img/linkedin.png"
import github from "../assets/img/github.png"
import resume from "../assets/resume/michelle_resume.pdf"
import resumeIcon from "../assets/img/document.svg"


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('about');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return( 
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      {/* <Navbar.Brand href="/">
        <img src={logo} alt="Logo" />
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={()=>{ onUpdateActiveLink("about")}}>About</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={()=>{ onUpdateActiveLink("projects")}}>Projects</Nav.Link>
          <Nav.Link href="#experience" className={activeLink === "experience" ? "active navbar-link" : "navbar-link"} onClick={()=>{ onUpdateActiveLink("experience")}}>Experience</Nav.Link>
          <Nav.Link href="#education" className={activeLink === "education" ? "active navbar-link" : "navbar-link"} onClick={()=>{ onUpdateActiveLink("education")}}>Education</Nav.Link>
          <Nav.Link href="#interests" className={activeLink === "interests" ? "active navbar-link" : "navbar-link"} onClick={()=>{ onUpdateActiveLink("interests")}}>Interests</Nav.Link>
        </Nav>
          
          <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/hellomichellechen/"><img src={linkedin} alt="Linkedin Icon"/></a>
                    <a href="https://github.com/rockcat96"><img src={github} alt="Github Icon"/></a> 
                    <a href={resume}><img src={resumeIcon} alt="Resume"/></a> 
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}