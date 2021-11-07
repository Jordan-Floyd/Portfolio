import "./intro.css";
import Profile from "../../images/profile.png"


const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className = "i-intro">Hello, My Name is</h2>
                    <h1 className = "i-name">Jordan Floyd</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Software Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm looking to design, develop, create and display my skillset.
                    </p>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Profile} alt="" className="i-image" />
            </div>
        </div>
    )
}

export default Intro




