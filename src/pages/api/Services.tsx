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
        sTitle: 'Vehicle Accidents',
        slug: 'Vehicle-Accidents',
        description: 'If you\'ve been involved in a vehicle accident, navigating the aftermath can be overwhelming. Our law office specializes in providing compassionate and comprehensive legal assistance for those affected by vehicle accidents. We understand the complexities of determining negligence and establishing liability. With a proven track record of negotiating with insurance companies and fighting for our clients\' rights in court, we ensure that your case is handled with the utmost care and professionalism. Let us guide you through every step of the legal process, offering the support and expertise needed to achieve a favorable outcome in your vehicle accident case.',
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
        sTitle: 'Medical Malpractice',
        slug: 'Medical-Malpractice',
        description: 'When medical professionals fail to provide the standard of care expected, resulting in injury or worsening of conditions, it\'s crucial to have expert legal representation. Our law firm is dedicated to supporting victims of medical malpractice, leveraging our extensive knowledge and experience to navigate these challenging cases. We handle a variety of medical malpractice claims, including misdiagnosis, surgical errors, medication mistakes, and failure to treat. Our approach involves a thorough investigation of your case, collaboration with medical experts, and a relentless pursuit of justice. Trust us to advocate for your rights and secure the accountability and reparations you deserve.',
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
        sTitle: "Erb's Palsy",
        slug: "Erb's-Palsy",
        description: 'Erb\'s Palsy, a condition often resulting from birth injuries that affect the brachial plexus nerves, can have lasting impacts on a child’s ability to move their shoulder, arm, or hand. Our law firm stands with families affected by Erb\'s Palsy, offering dedicated legal support to seek justice. We specialize in navigating the complex medical and legal aspects of Erb\'s Palsy cases, including proving negligence during childbirth. With a compassionate approach and a strong track record of success, we work tirelessly to ensure families receive the maximum compensation to support their child\'s recovery and future. Let our expertise be your guide and support through this challenging time, helping secure a better outcome for your child.',
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
        sTitle: 'Criminal Cases',
        slug: 'Criminal-Cases',
        description: 'Facing criminal charges can be a daunting experience, with significant implications for your freedom, reputation, and future. Our law firm provides robust criminal defense services, advocating for the rights of individuals accused of a wide range of offenses, from misdemeanors to serious felonies. We understand the complexities of the criminal justice system and are committed to offering a vigorous defense, leveraging our expertise to challenge evidence, negotiate plea deals, and, when necessary, represent clients at trial. Our approach is tailored to each client\'s unique situation, aiming to secure the best possible outcome, whether it\'s a dismissal of charges, reduced sentencing, or acquittal. Trust in our dedicated legal team to navigate your defense with the utmost diligence and determination.',
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
        sTitle: 'Confiscations by Federal and State Authorities (Customs/PPPR)',
        slug: 'Confiscations-by-Federal-and-State-Authorities-(Customs/PPPR)',
        description: 'When federal and state authorities, including Customs and PPPR, seize assets or property, navigating the legal process to reclaim these items can be complex and intimidating. Our law firm specializes in defending individuals and businesses against confiscations, understanding the intricate laws and regulations that govern these actions. Whether it\'s a dispute over imported goods, alleged violations of probation or parole terms, or asset forfeiture cases, we are here to advocate for your rights and work towards the return of your property. Our approach combines thorough legal analysis, strategic planning, and aggressive representation, ensuring that our clients have the best possible defense against governmental overreach. Rely on our expertise to guide you through the confiscation defense process, offering clarity and support every step of the way.',
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
        sTitle: 'Claims to the Federal and State Government',
        slug: 'Claims-to-the-Federal-Government',
        description: 'Pursuing claims against the federal and state government requires a law firm with specialized knowledge and a strategic approach. Our practice is well-versed in the complexities of government claims, including civil rights violations, employment disputes, contract issues, and damages caused by government actions.  We understand the unique challenges and procedural hurdles inherent in holding government entities accountable. Our team is dedicated to advocating for individuals and businesses, leveraging our extensive experience to navigate these claims successfully. From filing the initial notice of claim to aggressively pursuing your case in court, we stand by our clients every step of the way, ensuring your voice is heard and your rights are protected against the formidable resources of government agencies.',
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
