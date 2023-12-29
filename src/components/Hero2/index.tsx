import AboutUs from "@/pages/api/AboutUs";

const Hero2 = () => {
    const scrollIntoFeatures = () => {
        const options: ScrollIntoViewOptions = {
            block: 'start',
            inline: "nearest",
            behavior: 'smooth'
        }
        document.getElementById('features').scrollIntoView(options)
    }

    return (
        <section className={"static-hero"}>
            <div className={"hero-inner"}>
                <div className={'container'}>
                    <div data-swiper-parallax={"300"} className={"slide-title text-orange-500"}>
                        <h2>{AboutUs.slideTitle}</h2>
                    </div>
                    <div data-swiper-parallax={"400"} className={'slide-text'}>
                        <p>{AboutUs.description}</p>
                    </div>
                    <div data-swiper-parallax={"500"} className={"slide-btns"}>
                        <div onClick={scrollIntoFeatures} className={"theme-btn hover:cursor-pointer"}>
                            Explore more
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2