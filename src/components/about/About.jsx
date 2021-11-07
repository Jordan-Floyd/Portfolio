import "./about.css"
import Coding from "../../images/codinglogo.png"
import Family from "../../images/family.jpg"

const About = () => {
    return (
        <div className= "a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Family}
                     alt=""
                     className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Stuff about me in here! Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was 
                </p>
                <p className="a-desc">
                    Stuff about me in here! Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. It has survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially unchanged. It was
                </p>
                <div className="a-award">
                    <img src= {Coding} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Coding Temple</h4>
                        <p className="a-award-desc">
                        Stuff about me in here! Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry.
                        </p>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
