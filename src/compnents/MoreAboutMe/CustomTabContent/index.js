// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Card, CardBody, Row, Col } from "reactstrap";

const CustomTabContent = ({contents, tabTitle}) => {
    return (
        <div className="tab-content-wrapper">
            <div className="tab-title">
                {tabTitle}
            </div>
            {
                ( tabTitle.toLowerCase() === "experience" || tabTitle.toLowerCase() === "education" )
                ?
                    contents.map( (item, i) => 
                        <div className="tab-content" key={i}>
                            <div className="tab-content-icon-holder">
                                <i className={`fas ${item.logo}`}></i>
                            </div>
                            <div className="tab-content-des">
                                <span className="year"> { item.year } </span>
                                <h4 className="degree"> {item.degree} </h4>
                                <h5 className="institution "> {item.institution} </h5>
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                : 

                        <div className="tab-content expertise">
                            <Row>
                                { contents.map( (item, i) => 
                                        <Col md={3}>
                                            <Card className='skills-card'>
                                                <CardBody>
                                                    <div className="expertise-img-wrapper">
                                                        <img src={item.logo} alt="skill-logo" />
                                                    </div>
                                                    <div className="expertise-name">
                                                        {item.name}
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
            }
        </div>
    )
}

export default CustomTabContent;