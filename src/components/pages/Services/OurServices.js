import React from 'react';
import '../../../assests/css/style.css';
import VA from '../../../assests/images/what-is-va.png'
import PT from '../../../assests/images/what-is-pt.png'

const OurServices = () => {
    return(
        <>
        <div className="service_banner">
            <div className="service_banner_div1">
                <h1>Our&nbsp;Services</h1>
            </div>
            <div className="service_banner_div2">
                <p>
                Vulnerability Assessment and Penetration Testing(VAPT) Services can help you test & certify the security of just about any server, 
                device or application platform. Working across a wide range of customers, 
                we are adept at testing security for everything from main frame systems to cutting
                edge technologies and everything in the middle.
                </p>
            </div>
        </div>
        <div className="service_body">
            <div className="service_body_div1">
                <img src={VA} />
            </div>
            <div className="service_body_div2">
                <h1>Vulnerability Assessment</h1><br/>
                <p>
                A Vulnerability Assessment (VA) is an automated scan of your network infrastructure 
                that allows the customer to view the security status of its systems to any known 
                vulnerabilities. With this objective, automatic scans are used to carry out a series 
                of checks on every system/application to understand their configuration in detail and 
                detect any vulnerability. These checks function at a high rate using this automated 
                software resulting in covering a wide perimeter in a short period. Additionally,
                the usage of automated tools makes it impossible to extend checks beyond the vulnerabilities 
                for which the specific tool is. To check the real possibilities, an attacker would 
                have to exploit the vulnerabilities.
                </p>
            </div>
        </div>
        <div className="service_body">
            <div className="service_body_div2">
                <h1>Penetration Testing</h1><br/>
                <p>
                A penetration test, also known as a pen test, is an authorized simulated attack on a 
                computer system that looks for security weaknesses, potentially gaining access to 
                the system's features and data. Following steps typically form the penetration 
                testing. The primary objective for a network penetration test is to identify 
                exploitable vulnerabilities in networks, systems, hosts and network devices (ie: routers,
                 switches) before hackers are able to discover and exploit them.
                </p>
            </div>
            <div className="service_body_div1">
                <img src={PT} />
            </div>
        </div>
        </>
    )
}

export default OurServices;