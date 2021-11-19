import "./contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.png"
import Github from "../../images/github.png"
import { useRef, useState, useContext } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";





const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_2g5fx6w', 
            'template_7oubaol', 
            formRef.current, 
            'user_YaMMYkprPQGGrvXGjkBYe'
            )
            .then(
                (result) => {
                console.log(result.text);
                setDone(true)
            },
            (error) => {
                console.log(error.text);
      });

    }






    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Info.</h1>
                    <div className="c-info">
                        <a href="https://github.com/Jordan-Floyd">
                            <img src={Github} className="c-icon" />
                                Github
                        </a>
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                                801-597-9361
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                                JFloyd421@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                                4979 S. Brimley Way Taylorsville, UT 84129
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                     
                    </p>
                    <form ref= {formRef} onSubmit = {handleSubmit}>
                        <input style = {{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" />
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style = {{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && " Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact
