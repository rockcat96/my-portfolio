import "react-multi-carousel/lib/styles.css"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    }

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Python</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>EJS</li>
                                <li>Flask</li>
                                <li>Django/Django REST</li>
                                <li>Bootstrap</li>
                                <li>Mongoose</li>
                                <li>jQuery</li>
                                <li>MongoDB</li>
                                <li>bit.io</li>
                                <li>Responsive Web Design</li>
                                <li>RESTful APIs</li>
                                <li>Git/Github</li>
                                <li>Netlify</li>
                                <li>Render</li>
                                <li>Terminal</li>
                                <li>WordPress/WP Engine</li>
                                <li>Json</li>
                                <li>Squarespace</li>
                                <li>Google Analytics</li>
                                <li>Canva</li>
                                <li>Facebook Ads</li>
                                <li>Google Ads</li>
                                <li>Linkedin Ads</li>
                                <li>CTV Ads</li>
                                <li>Looker</li>
                                <li>Slack</li>
                                <li>Jira</li>
                                <li>Okta</li>
                                <li>Braze</li>
                                <li>BigQuery</li>
                                <li>Kochava</li>
                                <li>Branch</li>
                                <li>Mailchimp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )





}