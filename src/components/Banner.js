import { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/michelleimg.svg";


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = [ "Full Stack Engineer.", "Web Designer.", "Growth Marketer.", "Dancer." ]
    const [text, setText] = useState("")
    const [delta, setDelta] =useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta )

        return() => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText= toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText == fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText == ""){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">SAN FRANCISCO, CA · MICHELLE@GMAIL.COM</span>
                        <h1>{`Hi, I’m Michelle! I’m a `}<span className="wrap">{text}</span></h1>
                        <p>I enjoy uncovering how things work and thinking of ways to improve them. With six years of experience in marketing, I have strong analytical and problem-solving skills, an obsession with creating scalable and efficient solutions, a knack for thinking outside of the box, and strong empathy for the end user. I’m passionate about improving people’s health and making the world more accessible through technology and I’m looking for roles in healthcare that better lives.</p>
                        <button onClick={()=>{console.log('connect')}}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>   
                </Row>
            </Container>
        </section>
    )
}