// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomTabContent = ({contents, tabTitle}) => {
    return (
        <div className="tab-content-wrapper">
            <div className="tab-title">
                {tabTitle}
            </div>
            {
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
            }
        </div>
    )
}

export default CustomTabContent;