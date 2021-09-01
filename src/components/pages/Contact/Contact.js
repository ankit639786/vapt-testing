import React,{useRef} from 'react';
import './Contact.css';
import { scroller } from "react-scroll";

const Contact = () => {

//   const  scrollToSection = () => {
//         scroller.scrollTo("raj", {
//           duration: 800,
//           delay: 0,
//           smooth: "easeInOutQuart",
//           offset: -200
//         });
//       };

    // const commentSection=useRef(null)
    // const commentSection1=useRef(null)


    // const gotoCommentSection=()=>{
    //     window.scrollTo({
    //         top:commentSection.current.offsetTop,
    //         behavior:"smooth"
    //     })
    // }

    // const gotoCommentSection1=()=>{
    //     window.scrollTo({
    //         top:(commentSection1.current.offsetTop)-200,
    //         behavior:"smooth",
    //         // top: 1500
    //     })
    // }

    const homeObjFour = {
        lightBg: true,
        lightText: false,
        lightTextDesc: false,
        topLine: 'Lorem ipsum',
        headline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet',
        buttonLabel: 'Lorem ipsum',
        imgStart: 'start',
        img: 'images/svg-8.svg',
        alt: 'Vault'
    };

    return (
        <>
            <div className={homeObjFour?.lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
            {/* <button onClick={scrollToSection}>Submit</button> */}
             {/* <button onClick={()=>gotoCommentSection()}>Submit</button> */}

            {/* <button onClick={()=>gotoCommentSection1()}>Submit</button> */}


                <div className='container'>
                    <div className='row home__hero-row' style={{ display: 'flex', flexDirection: homeObjFour?.imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{homeObjFour?.topLine}</div>
                                <h1 className={homeObjFour?.lightText ? 'heading' : 'heading dark'}>
                                    {homeObjFour?.headline}
                                </h1>
                                <p
                                    className={
                                        homeObjFour?.lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {homeObjFour?.description}
                                </p>
                                {/* <Link to=''>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        {homeObjFour?.buttonLabel}
                                    </Button>
                                </Link> */}
                            </div>
                        </div>

                       
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <form className="myForm" style={{marginTop:"-50px",backgroundColor:"#09091e"}}>
                                    <div id="contact-details">
                                        <label for="customer_name">Name </label>
                                        <input type="text" name="customer_name" id="customer_name" required />
                                        <label for="email_address">Email </label>
                                        <input type="email" name="email_address" id="email_address" />
                                        <label for="phone">Phone </label>
                                        <input type="tel" name="phone" id="phone" />
                                    </div>
                                    <div id="comment-box">
                                        <label for="comments">Comments</label>
                                        <textarea name="comments" id="comments" maxlength="500"></textarea>
                                    </div>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <h1  className="raj"  style={{color:"green",marginTop:"1000px"}} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h1>

                <h1 ref={commentSection1} className="raj"  style={{color:"green",marginTop:"1000px"}} >
                        1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h1> */}

                        
            </div>

        </>
    )
}

export default Contact;

