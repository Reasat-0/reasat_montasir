import {Button} from 'reactstrap'

const MyProjectCard = ({project}) => {
    const {id, name, tagline, subname, featured, technology, description, image,url} = project
    console.log(project)
    return(
        <div className={ `my-project-container ${ ( parseInt(id) % 2 === 0 ) ? "" : "mirror-it" }`}>
            <div className="my-project-img-section">
                <div className="projects-img-container">
                    <div className="projects-img-content">
                        <h3 className="project-img-title"> {subname} </h3>
                        <p className="project-img-tag-line"> {tagline} </p>
                        <img src={image} className="project-img" alt="snap"/>

                    </div>
                    <div className="my-project-hover-section">
                        <Button
                            className='my-project-hover-button'
                        >
                            <i className="far fa-eye"></i>
                            Quick View
                        </Button>

                        <Button
                            href={url}
                            target="_blank"
                            className='my-project-hover-button'
                        >
                            <i className="fas fa-external-link-alt"></i>
                            Visit Site
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-project-details-section">
                <div className="my-project-details-section-content">
                    {
                        featured 
                        && 
                        <p className="featured-project"> Featured Project </p>
                    }
                    <h3 className="project-title"> {name} </h3>
                    <p className="project-description"> 
                        {description}
                    </p>
                    <ul className="project-tech-used">
                        {
                            technology.map( (technology,i) => 
                                <li key={i}> {technology} </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyProjectCard