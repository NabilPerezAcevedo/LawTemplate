import React from 'react'

const Features = (props) => {

    const featres = [
        {
            fIcon: 'fi flaticon-diary',
            title: 'Transaction Documents',
            des: 'Our services range from the drafting and review of transactional documents (purchase and exchange contracts, transfers to corporations), structure and management of transactions, notarial services (Closing Notary) and procedures in the Property Registry.',
        },
        {
            fIcon: 'fi flaticon-support',
            title: 'General Legal Counsel',
            des: 'Created with the purpose of offering legal services specific to the needs of clients active in the Real Estate Market. The closing attorney may provide legal advice to the parties involved in the transaction, including the buyer, seller, and lender.',
        },
        {
            fIcon: 'fi flaticon-badge',
            title: 'Pre and Post Nuptial Agreements',
            des: 'Including affidavits, sworn statements, pre\'post nuptials, wills, donations, and mobile notary.',
        },
    ]


    return (
        <section id={'features'} className="wpo-features-section-s2 section-padding">
            <div className="container">
                <div className="wpo-features-wrapper">
                    <div className="row">
                        {featres.map((featres, fitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                                <div className="wpo-features-item">
                                    <div className="wpo-features-icon">
                                        <div className="icon">
                                            <i className={featres.fIcon}></i>
                                        </div>
                                    </div>
                                    <div className="wpo-features-text">
                                        <h2>{featres.title}</h2>
                                        <p className={'font-bold'}  >{featres.des}</p>
                                    </div>
                                    <div className="visible-icon">
                                        <i className={featres.fIcon}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
