import React, {useCallback, useState} from 'react'
import Image from 'next/image'
import Services, {ServicesType} from '@/pages/api/Services';
import {FaCarCrash} from 'react-icons/fa';
import useBetterMediaQuery from "@/hooks/useMediaQuery";

export default function PracticeArea() {

    const [currentDescription, setCurrentDescription] = useState<string>(Services[0].description)
    const isSmallScreen = useBetterMediaQuery("(max-width:768px)")
    const isMobileM = useBetterMediaQuery("(max-width:375px)")

    const changeDescription = (service: ServicesType) => {
        setCurrentDescription(service.description)
        isSmallScreen && scrollIntoFeatures()
    }

    const scrollIntoFeatures = () => {
        const options: ScrollIntoViewOptions = {
            block: 'start',
            inline: "nearest",
            behavior: 'smooth'
        }
        document.getElementById('practice-area-description').scrollIntoView(options)
    }

    if(isSmallScreen) {
        return (
            <section id={'expertise'} className="wpo-service-section-s2 section-padding">
                <div className="container">
                    <div className={"columns-1"}>
                        <div id={'practice-area-description'} className={"row"}>
                            <div className={"mr-2"}>
                                <p className={"text-white"}>{currentDescription}</p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={`grid ${isMobileM ? 'grid-cols-2' : "grid-cols-3"} gap-1`}>
                                {Services.map((service, Sitem) => (
                                    <div key={Sitem} className="wpo-service-item justify-center hover:cursor-pointer"
                                         onClick={() => changeDescription(service)}>
                                        <div className="wpo-service-icon">
                                            <div className="icon">
                                                {/*@ts-ignore*/}
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h3>{service.sTitle}</h3>
                                            {/*{service?.des3 && <p>{service.des3}</p>}*/}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id={'expertise'} className="wpo-service-section-s2 section-padding">
            <div className="container">
                {/* <div className="row align-items-center">
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
                </div> */}
                <div className="row">
                    <div className='grid grid-cols-2'>
                        <div className={"mr-2"}>
                            <p className={"text-white"}>{currentDescription}</p>
                        </div>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-1'>
                            {Services.map((service, Sitem) => (
                                <div key={Sitem} className="wpo-service-item justify-center hover:cursor-pointer"
                                     onClick={() => changeDescription(service)}>
                                    <div className="wpo-service-icon">
                                        <div className="icon">
                                            {/*@ts-ignore*/}
                                            {service.icon}
                                        </div>
                                    </div>
                                    <div className="wpo-service-text">
                                        <h3>{service.sTitle}</h3>
                                        {/*{service?.des3 && <p>{service.des3}</p>}*/}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {Services.map((service, Sitem) => (
                        <div className='grid grid-cols-12 gap-1'>
                            <div className="col-start-1 col-span-4">
                                <p>Description</p>
                            </div>
                            <div className='col-end-12 col-span-8'>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h3>{service.sTitle}</h3>
                                    {service?.des3 && <p>{service.des3}</p>}
                                </div>
                            </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    )
}