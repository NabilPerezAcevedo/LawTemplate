import simg from '/public/images/service/img-2.jpg'
import simg2 from '/public/images/service/img-1.jpg'
import simg3 from '/public/images/service/img-3.jpg'
import simg4 from '/public/images/service/img-4.jpg'
import simg5 from '/public/images/service/img-5.jpg'
import simg6 from '/public/images/service/img-6.jpg'

import sSingleimg1 from '/public/images/service-single/2.jpg'
import sSingleimg2 from '/public/images/service-single/3.jpg'

import ins1 from '/public/images/instragram/14.jpg'
import ins2 from '/public/images/instragram/13.jpg'
import ins3 from '/public/images/instragram/15.jpg'
import ins4 from '/public/images/instragram/16.jpg'
import ins5 from '/public/images/instragram/17.jpg'
import ins6 from '/public/images/instragram/18.jpg'

import {StaticImageData} from "next/image";

import {FaHandHoldingMedical} from 'react-icons/fa'
import {FaCarCrash} from 'react-icons/fa'
import {GiArmBandage} from 'react-icons/gi'
import {TbPrison} from 'react-icons/tb'
import {RiGovernmentFill} from 'react-icons/ri'
import {MdLocalPolice} from 'react-icons/md'
import {IconType} from 'react-icons/lib'

export type ServicesType = {
    Id: string,
    sTitle: string,
    slug: string,
    description: string,
    des2: string,
    des3?: string,
    sImg: StaticImageData,
    icon?: IconType,
    ssImg1: StaticImageData,
    ssImg2: StaticImageData,
    sinst: StaticImageData,
}

const Services: ServicesType[] = [
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'Civil Claims',
        slug: 'Civil-Claims',
        description: 'These services aim to address and resolve conflicts related to personal injury, property damage, contract disputes, real estate issues, employment law, and more, through negotiation, mediation, arbitration, or litigation.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: 'Defense in criminal cases before federal and state courts.',
        // @ts-ignore
        icon: <FaCarCrash size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },

    {
        Id: '3',
        sImg: simg2,
        sTitle: 'Contracts',
        slug: 'Contracts',
        description: 'We assist clients in the drafting, negotiation, analysis, and management of legal contracts across a wide array of industries and sectors. These services are tailored to ensure that contracts are legally sound, align with the client\'s business objectives, and mitigate potential legal risks.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: 'Defense against harm incurred from surgeries and other medical procedures. For example, Confiscations by Customs, Police in Puerto Rico/Recoveries of cars, boats, money, jewelry, merchandise, and properties.',
        // icon: escrowIcon,
        // @ts-ignore
        icon: <FaHandHoldingMedical size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },

    {
        Id: '4',
        sImg: simg2,
        sTitle: "Notary and Real Estate Closing Services",
        slug: "Notary-and-Real-Estate-Closing-Services",
        description: 'We provide a thorough title examination to ensure clear ownership rights; preparing and reviewing all necessary closing documents for accuracy and legal compliance; offering escrow services to securely manage funds and documents until all conditions are met; resolving any title issues to prevent future disputes; representing clients during the closing to facilitate the final exchange; providing legal advice and counseling to navigate the complexities of the transaction; ensuring the proper recording of legal documents to establish official ownership; and offering post-closing services to address any subsequent needs or disputes.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: 'Defense against fraud',
        // icon: escrowIcon,
        // @ts-ignore
        icon: <GiArmBandage size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },

    {
        Id: '5',
        sImg: simg2,
        sTitle: 'Federal Criminal Cases',
        slug: 'Federal-Criminal-Cases',
        description: 'We represent and defend individuals accused of involvement in the trafficking of controlled substances under federal law. Currently we have over 40 years of experience in this field.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: ' ',
        // icon: escrowIcon,
        // @ts-ignore
        icon: <TbPrison size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },

    {
        Id: '6',
        sImg: simg2,
        sTitle: 'Litigation and Appeals',
        slug: 'Litigation-and-Appeals',
        description: 'The Firm provides a wide arrange of services including: Case Assessment, settlement negotiations, and appeals for both civil and criminal cases. The services are crucial for navigating the legal system effectively, offering strategic advice, skilled advocacy, and comprehensive support to clients facing legal disputes. These services are tailored to each client\'s specific circumstances, with a focus on achieving the best possible legal outcomes.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: ' ',
        // icon: escrowIcon,
        // @ts-ignore
        icon: <MdLocalPolice size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },

    {
        Id: '1',
        sImg: simg2,
        sTitle: 'Boutique Legal Services',
        slug: 'Boutique-Legal-Services',
        description: 'We offer a personalized approach to legal assistance, emphasizing customized solutions tailored to meet the unique needs of each client. The firm prides itself on its commitment to integrity, excellence, and confidentiality.',
        des2: 'The lower-numbered purposes are better understood and practiced.',
        // des3: 'Defense against a criminal drug charge.',
        // icon: escrowIcon,
        // @ts-ignore
        icon: <RiGovernmentFill size={32} color='black'/>,
        ssImg1: sSingleimg1,
        ssImg2: sSingleimg2,
        sinst: ins2,
    },
]


// const Services = [
//     {
//         Id: '2',
//         sImg: simg2,
//         sTitle: 'Coordinate Escrow Deposit',
//         slug: 'Coordinate-Escrow-Deposit',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'We help manage and distribute the funds when the matter has been resolved. To close in time, we assist with back due property taxes assessments, HOA’s past due fees, renovations or even a specific performance of an agreement covenant.',
//         icon: escrowIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins2,
//     },
//     {
//         Id: '3',
//         sImg: simg3,
//         sTitle: 'Title Search',
//         slug: 'Title-Search',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'Ensure that the object of the transaction has a clear transferable title. And, the transaction is completed smoothly and legally. We review a variety of public records, including deeds, mortgages, liens, judgments, and other documents related to the property.',
//         icon: titleSearchIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins3,
//     },
//     {
//         Id: '6',
//         sImg: simg6,
//         sTitle: 'Transactional Structuring',
//         slug: 'Transactional-Structuring',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'This includes draft, review and/or reviewing the purchase agreement, lease agreement, or other contract governing the transaction to ensure legal terms are in the best interest of our clients.',
//         icon: transactionIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins6,
//     },
//     {
//         Id: '4',
//         sImg: simg4,
//         sTitle: 'Resolve Property Issues',
//         slug: 'Resolve-Property-Issues',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'If any issues are found during the Title Search we: identify, investigate and develop a strategy for resolving the issue. If needed we will take legal action. But our priority will always be facilitating the transaction.',
//         icon: propertyIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins4,
//     },
//     {
//         Id: '1',
//         sImg: simg,
//         sTitle: 'Closing Notary Service',
//         slug: 'Closing-Notary-Service',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'Ensuring that all necessary documents are compliant with Puerto Rico’s Registry and Notarial Law, properly signed, witnessed, and notarized according to legal requirements.',
//         icon: notaryIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins1,
//     },
//     {
//         Id: '5',
//         sImg: simg5,
//         sTitle: 'Municipal Tax Procedures',
//         slug: 'Municipal-Tax-Procedures',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo ',
//         des2: 'The lower-numbered purposes are better understood and practiced',
//         des3: 'We assist with matters relating to the municipal tax procedures such as collection procedures, or administrative offences.',
//         icon: taxesIcon,
//         ssImg1: sSingleimg1,
//         ssImg2: sSingleimg2,
//         sinst: ins5,
//     },
// ]

export default Services
