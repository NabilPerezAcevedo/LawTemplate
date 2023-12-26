import Link from "next/link";
import AboutUs from "@/pages/api/AboutUs";

const HeaderTopbar = () => {

    const options: ScrollIntoViewOptions = {
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    }

    const scrollToContactForm = () => {
        document.getElementById('contact-form').scrollIntoView(options)
    }

    const scrollToExpertise = () => {
        document.getElementById('expertise').scrollIntoView(options)
    }

    return (
        <div className={'topbar'}>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col col-md-5 col-sm-12 col-12'}>
                        <div className={'contact-info'}>
                            <ul>
                                <li>
                                    <div className={'hover:cursor-pointer'} onClick={scrollToContactForm}>Contact Us
                                    </div>
                                </li>
                                <li>
                                    <div className={'hover:cursor-pointer'} onClick={scrollToExpertise}>Our Expertise
                                    </div>
                                </li>
                                {/*<li><a target={"_blank"}*/}
                                {/*       href={'https://www.facebook.com/profile.php?id=100088853995294&sk=about_details'}><i*/}
                                {/*    className={'ti-facebook'}></i></a></li>*/}
                                {/*<li><a target={"_blank"} href={'https://www.instagram.com/the_closing_company/'}><i*/}
                                {/*    className={'ti-instagram'}></i></a></li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className={'col col-md-7 col-sm-12 col-12'}>
                        <div className={'contact-intro'}>
                            <ul>
                                <li><Link
                                    className={'hover:cursor-pointer text-inherit hover:text-blue-500'}
                                    href={'https://maps.app.goo.gl/6XPbVc6Zy24ULtqVA'}><i
                                    className={'fi ti-location-pin'}>{AboutUs.location}</i></Link>
                                </li>
                                <li><i className={'fi flaticon-email'}>legaldesk@theclosingcompany.legal</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar
