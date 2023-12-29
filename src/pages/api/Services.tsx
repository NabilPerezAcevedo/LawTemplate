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

// Icons For Jhansel
import notaryIcon from '/public/images/lawIcons/notary.png'
import escrowIcon from '/public/images/lawIcons/escrow.png'
import propertyIcon from '/public/images/lawIcons/property.png'
import taxesIcon from '/public/images/lawIcons/taxes.png'
import transactionIcon from '/public/images/lawIcons/transaction.png'
import titleSearchIcon from '/public/images/lawIcons/titleSearch.png'
import {StaticImageData} from "next/image";

import {FaHandHoldingMedical} from 'react-icons/fa'
import {FaCarCrash} from 'react-icons/fa'
import {GiArmBandage} from 'react-icons/gi'
import {TbPrison} from 'react-icons/tb'
import {RiGovernmentFill} from 'react-icons/ri'
import {MdLocalPolice} from 'react-icons/md'
import { IconType } from 'react-icons/lib'

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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue enim quis quam volutpat laoreet. Maecenas ante justo, condimentum in finibus sed, iaculis eu augue. Donec non ante nisi. Nam rhoncus risus ac quam sodales, et varius turpis feugiat. Ut in eros ullamcorper, hendrerit nunc quis, lacinia ex. Donec in imperdiet erat. Suspendisse varius sodales augue vitae imperdiet. Phasellus eget luctus erat, vestibulum vehicula leo. Nam blandit sem in libero sollicitudin, in venenatis lacus mattis. Praesent facilisis, sapien non rutrum laoreet, arcu purus finibus elit, id euismod mi lacus ut dolor. Fusce ac lectus consequat, hendrerit sem nec, ornare magna. Nulla faucibus dolor nec tempus maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nec nibh vestibulum, efficitur lorem porttitor, suscipit nibh. Ut porta orci sed euismod eleifend.',
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
    description: 'Integer ornare est eu bibendum lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce luctus tincidunt nisi a gravida. Nunc facilisis turpis leo, non sollicitudin turpis finibus consequat. Vestibulum nec nisi lobortis, mattis orci vel, placerat nisl. Maecenas efficitur accumsan faucibus. Nullam tellus quam, cursus vel malesuada vel, placerat eu mi. Suspendisse efficitur justo in libero tincidunt, sit amet fringilla risus porta. Vivamus vestibulum auctor nibh. Mauris bibendum nibh vel consectetur aliquet. Nullam scelerisque magna eu nisl pretium dapibus.',
    des2: 'The lower-numbered purposes are better understood and practiced.',
    // des3: 'Defense against harm incurred from surgeries and other medical procedures. For example, Confiscations by Customs, Police in Puerto Rico/Recoveries of cars, boats, money, jewelry, merchandise, and properties.',
    // icon: escrowIcon,
    icon: <FaHandHoldingMedical size={32} color='black' />,
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins2,
},

{
    Id: '4',
    sImg: simg2,
    sTitle: "Erb's Palsy",
    slug: "Erb's-Palsy",
    description: 'Vestibulum neque tellus, sollicitudin eu sapien vitae, tincidunt mattis orci. Ut varius condimentum lobortis. Nulla vitae accumsan ex. Donec quis porttitor erat. Quisque quis lectus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget enim in justo consectetur hendrerit. Vivamus in pellentesque ante, ac vestibulum sapien. Sed ligula diam, consequat non diam eu, condimentum euismod sem. Mauris convallis lorem nec tellus vehicula, in luctus nulla pretium. Donec et mauris hendrerit, viverra felis sit amet, ultrices risus. Donec urna purus, sagittis vel augue ac, porta consectetur risus.',
    des2: 'The lower-numbered purposes are better understood and practiced.',
    // des3: 'Defense against fraud',
    // icon: escrowIcon,
    icon: <GiArmBandage size={32} color='black' />,
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins2,
},

{
    Id: '5',
    sImg: simg2,
    sTitle: 'Criminal Cases',
    slug: 'Criminal-Cases',
    description: 'Morbi vel ante porta, consequat ligula at, dignissim risus. Praesent at sodales sapien. Praesent elementum volutpat ultricies. Curabitur ultrices, mi a vulputate condimentum, ligula quam semper libero, at blandit augue augue vel justo.',
    des2: 'The lower-numbered purposes are better understood and practiced.',
    // des3: ' ',
    // icon: escrowIcon,
    icon: <TbPrison size={32} color= 'black' />,
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins2,
},

{
    Id: '6',
    sImg: simg2,
    sTitle: 'Confiscations by Federal and State Authorities (Customs/PPPR)',
    slug: 'Confiscations-by-Federal-and-State-Authorities-(Customs/PPPR)',
    description: 'Cras nec ipsum lorem. Nulla quis nisl et ipsum malesuada laoreet. Donec a lacus mi. Sed nec sagittis tortor. Duis eu purus sed enim feugiat finibus. Nunc ipsum arcu, venenatis vitae tellus ut, suscipit lacinia nulla. Sed quis porttitor enim. Vivamus augue purus, vestibulum quis lacinia in, condimentum sit amet magna. Phasellus vestibulum nisl orci. Integer sit amet lacinia ipsum, ac tristique sem. Ut dictum id enim ac euismod. In id interdum nibh. Sed venenatis sagittis erat quis rutrum.',
    des2: 'The lower-numbered purposes are better understood and practiced.',
    // des3: ' ',
    // icon: escrowIcon,
    icon: <MdLocalPolice size={32} color= 'black' />,
    ssImg1: sSingleimg1,
    ssImg2: sSingleimg2,
    sinst: ins2,
},

{
    Id: '1',
    sImg: simg2,
    sTitle: 'Claims to the Federal and State Government',
    slug: 'Claims-to-the-Federal-Government',
    description: 'Integer at nisl vel massa pretium laoreet. Fusce porttitor pretium risus sit amet condimentum. Proin aliquam posuere diam sit amet rhoncus. Nullam sed dictum diam. Mauris arcu ante, sodales at nibh eu, venenatis convallis tellus. Vivamus dolor nisl, faucibus sed justo quis, tempus laoreet turpis. Donec non lectus nulla. Praesent luctus nisl eu fringilla semper.',
    des2: 'The lower-numbered purposes are better understood and practiced.',
    // des3: 'Defense against a criminal drug charge.',
    // icon: escrowIcon,
    icon: <RiGovernmentFill size={32} color= 'black' />,
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
