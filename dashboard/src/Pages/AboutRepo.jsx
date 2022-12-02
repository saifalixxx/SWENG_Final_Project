import Sidebar from "../Components/sidebar/Sidebar";
import Titlebar from "../Components/titlebar/Titlebar";
import React from "react";
import "../styles.css"


const AboutRepo = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Titlebar name={"About the Repository"} />
                <div className="style1">
                    <div className='descTitleStyle' style={{background: 'linear-gradient(45deg, #0b2f4d, #94eef8)'}}>
                    Our Chosen Repository - 'Vircadia'
                    </div>
                </div>
                <div className="style3">
                    <div className='descBoxStyle' style={{ background: 'linear-gradient(45deg, #0b2f4d, #94eef8)' }}>
                        The repository we are using is called ‘Vircadia’. From this repository, our role was to analyse
                        the contributors and visually create data metrics on behalf of the work they have done on
                        the public repository. The ‘Vircadia’ repository helps gradually create a completely free and an
                        accessible metaverse. A lot of their work is based on desktop and virtual reality interfaces, using
                        a wide variety of languages that consists of Java, C++, HTML and etc. Their ecosystem is comprised
                        of  Apache 2.0 which allows the developers to change, copy or update the existing source code of the
                        software. They have  constructed many open-world projects taking place inside the Metaverse, giving
                        the users a chance to experience full-body avatars in a 4096𝑘𝑚^2 world in one server. Currently in the
                        repository, there are 220 contributors. However, for our project  we will only be assessing the 4 most
                        recent contributors. Many of the ‘Vircadia’ team consists of programmers, testers and reviewers
                    </div>
                </div>
            </div>
        </div>

    );

};

export default AboutRepo;