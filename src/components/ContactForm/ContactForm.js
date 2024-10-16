export const ContactForm = () => {
    return(
        <div className="contact">
        <div className="contactText">
            
            <div className="redline"></div>
            
            <p className="contactHeader sectionHeader">Contact Us</p>
            <p className="contactPara sectionPara">Forms are a common implement so I thought it would be nice to include one here with a bit of styling</p>
        </div>
    
        <div className="contactForm">
            <form>
                <div className="inputOne input">
                    <label className="formLabel" for="">Name</label>
                    <input type="text" className="formInput"/>
                </div>
                <div className="inputOne input">
                    <label className="formLabel" for="">Email</label>
                    <input type="text" className="formInput"/>
                </div>
                <div className="inputOne input">
                    <label className="formLabel" for="">Message</label>
                    <textarea className="formMessage" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    
    
    </div>

    )
}