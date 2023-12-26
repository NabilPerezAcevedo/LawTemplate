import React from 'react'
import Image from 'next/image'
import Services from '@/pages/api/Services';
import { FaCarCrash } from 'react-icons/fa';

export default function PracticeArea() {

    return (
        <section id={'expertise'} className="wpo-service-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Our Expertise Resides in Everything Real Estate</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="wpo-section-title">
                            <p>A Closing Company Attorney is responsible for overseeing and facilitating the legal aspects of a real estate transaction. Their duties typically include:</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.map((service, Sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        {service.icon}
                                        <i/>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>{service.sTitle}</h3>
                                    {service?.des3 && <p>{service.des3}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
