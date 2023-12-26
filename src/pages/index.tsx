import React, {Fragment} from 'react'
import Navbar from "@/components/Navbar";
import Logo from '../../public/images/logo.png'
import Hero from "@/components/hero";
import Features from "@/components/Features";
import PracticeArea from "@/components/PracticeArea";
import ContactForm from "@/components/ContactForm";
import Hero2 from "@/components/Hero2";

export default function Home(props) {
    return (
        <Fragment>
            <Navbar Logo={Logo}/>
            {/*<Hero/>*/}
            <Hero2/>
            <Features/>
            <PracticeArea/>
            <ContactForm/>
        </Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            static: true
        }
    }
}