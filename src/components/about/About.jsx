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
                <h1 className="a-title">About Me.</h1>
                <p className="a-sub">
                    Flexibility has been a driving factor for my love of technology. 
                    I take to the fact that I can be in person or remote and explore my creativity in building.
                    I am opportunity focused and love the growth engineering offers. 
                    My strengths are fixing and finding optimal solutions to problems. I work well in teams as well as autonomously. 
                    The information that is derived from data allows me to understand ways to navigate complex problems and is the reason for why I enjoy being a software engineer. 
                    On my days off I'm an outdoor enthusiast. I ski, camp, and enjoy being on the beach. I’m also a gamer and love quality time with my family. 
                </p>
                <p className="a-desc">
                
                </p>
                <div className="a-award">
                    <img src= {Coding} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Coding Temple</h4>
                        <p className="a-award-desc">
                        Coding Temple Full Stack Grad 2021

                        </p>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
