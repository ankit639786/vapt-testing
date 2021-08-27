import React from 'react';

const Contact = () => {
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
                                <form class="myForm">
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
            </div>

        </>
    )
}

export default Contact;