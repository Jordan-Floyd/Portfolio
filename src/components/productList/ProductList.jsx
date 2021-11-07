import "./productList.css"
import Product from "../product/Product"


const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects.</h1>
                <p className="pl-desc">
                    Stuff about me! tuff about me in here! Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer
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