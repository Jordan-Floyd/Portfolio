import "./productList.css"
import Product from "../product/Product"


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects.</h1>
                <p className="pl-desc">
                    I have spent countless hours reading, learning and practicing many different
                    software applications. In my free time you might find me in the basement Googling how to 
                    create a new Component or idea I have to add to a project! Here are a few I've worked on 
                    in the past year!
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                
            </div>
        </div>
    )
}


export default ProductList