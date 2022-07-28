import React from 'react'

const Home = () => {
   

    return (
        <>
            <div className="page-inner">
                <section id='section-home' className='section-home section-full'>
                <div className="fake-big-right">Hard</div>
                    <div className="text-zone">
                        <h1 className='blast-root'>
                            <span className="text-wrapper">
                                <span className="letters">Hi,<br />
                                    I'm <span className='J-letter'>J</span>ack,<br />
                                    web developer</span>

                            </span>
                        </h1>
                       
                        <p className="gray-text">Front End Developer / React Expert</p>
                        <br />
                        <a href="#" rel='Contact' className='flat-button'>
                            <div>
                                <span className="text">Contact me!</span>
                            </div>
                        </a>

                    </div>
                    <div className="scroll-down">
                        <span>scroll down</span>
                        <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div className="scroll-down scroll-down-left">
                        <span>scroll down</span>
                        <i class="fa-solid fa-arrow-down"></i>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home