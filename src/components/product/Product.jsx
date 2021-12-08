import "./product.css"
import Website from "../../images/website.png"
import Weather from "../../images/weather.png"

const Product = ({link}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href = {link} target= "_blank" rel="noreferrer">
                <img src={Website} alt= "" className= "p-img" />
            </a>
            <a href = {link} target= "_blank" rel="noreferrer">
                <img src={Weather} alt= "" className= "p-img" />
            </a>
            
        </div>
        
    )
}

export default Product
