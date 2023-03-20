import { Col } from "react-bootstrap";

export const ProjectCard = ({ name, description, image, git, live, technology}) => {
  return (
    <div className="proj-card">
      <div className="proj-imgbx">
          <img src={image} />
          {/* <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{description}</span>
          </div> */}
      </div>

      <div className="proj-data">
        <h4>{name}</h4>
        <p>{technology}</p>
        <p>{description}</p>
        <a href={git}><p>Github Repo</p></a>
        <a href={live}><p>Live Demo</p></a>
      </div>
    </div>
  )
}


