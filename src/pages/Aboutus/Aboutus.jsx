import React from 'react'
import "./Aboutus.scss"
import person from "../../Assets/صور المشروع/من نحن/320936636254eff70dc87f9628eee192.png"
export default function Aboutus() {
    return <>
        <div className="main-About-us">
            <div className="main-header-image">
                <div className="about-text">
                    <h1>
                        Who we are
                    </h1>
                </div>
            </div>

            <div className="about-alamir">
                <h2>
                    Al Amira Foreign Works Company
                </h2>
                <p>
                    Al-Ameera Recruitment Company is a company specialized in the field of manpower recruitment and visa clearance. It was established by a distinguished group of businessmen with long experience in this field, which makes all partners and founders have full knowledge and awareness of the principles and foundations of the work. From this standpoint, Al-Ameera Company can be considered one of the companies that are distinguished by a high professional level in the field of providing suitably qualified and well-trained workers. Al-Ameera Company adopts a strategy of providing services in accordance with the laws and legislation in force within the Arab Republic of Egypt, and in full compliance with labor regulations, in a way that places the company at the forefront among competitors operating in the local and international market.
                </p>
            </div>

            <div className="about-service">
                <div className="text">
                    <h1>
                        Your visa is with us
                    </h1>
                    <p>We provide follow-up services, complete visa procedures, and authenticate and certify all documents ✅</p>
                    <ul>
                        <li>1- Fastest implementation time</li>
                        <li>2- Competitive prices</li>
                        <li>3- Continuous follow-up with the client</li>
                        <li>4- Receiving all inquiries</li>
                        <li>5- Documentation of papers and employment contracts from the Egyptian Ministry of Foreign Affairs</li>
                        <li>6- Authentication of all types of documents and various papers</li>
                    </ul>
                </div>
                <div className="image">
                    <img src={person} alt="" />
                </div>
            </div>
            
        </div>
    </>

}