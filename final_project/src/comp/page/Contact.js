import style from "../css/Contact.css"
const Contact = () => {
    return(
        <>
           <section className={style.contact} >
            <div className={style.detils}
            >
                    <span>Get In Touch</span>
                 <h2>Visit our agency locations or contact us</h2>
                    <h3>Head Office</h3>
                <div>
                    <li>
                        <i class="fa fa-map"></i>
                        <p>Dhaka-1212 Bangladesh</p>
                    </li>
                    <li>
                        <i class="fa fa-envelope"></i>
                        <p>contact@gmail.com</p>
                    </li>
                    <li>
                         <i class="fas fa-phone-alt"></i>
                         <p>+880 19********</p>
                    </li>
                    <li>
                        <i class="fa fa-clock"></i>
                        <p>Saturday to Wednesday: 9.00am to 10.00pm</p>
                    </li>
                </div>
               

                <section id="formdes">
                    <form action="">
                            <span>Leave a Message</span>
                            <h2>We hear from you</h2>
                            <input type="text" placeholder="Your name" />
                            <input type="text" placeholder="Your email" />
                            <input type="text" placeholder="Your subject" />
                            <textarea name="" id="" cols="30" rows="10"placeholder="Your message" ></textarea>
                            <button>Submit</button>
                        </form>
                    </section>
            </div>
           
            </section>

        </>
    );
}

export default Contact;