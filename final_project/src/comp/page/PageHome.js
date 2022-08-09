
import style from "../css/Home.module.css"
import Nav from "./Nav";

const PageHome = () => {

    return(
        <>
       
        <Nav />
          
            <div>

            
            <section className={style.body}>
                <h2>Super deals</h2>
                <h1>On all delivery</h1>
                < p>Save more with coupons & discount </p>
                    <button >More</button>
            </section>
            </div>
            

                    
                

        </>
    );
}

export default PageHome;