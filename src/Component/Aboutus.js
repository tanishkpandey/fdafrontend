import React, { Fragment } from 'react';
import visionimg from "../Component/crm/assets/images/slides/vision.jpg"
import missionimg from "../Component/crm/assets/images/slides/mission.jpg"
import supplychain from '../Component/crm/assets/images/supplychain.jpg'

function Aboutus() {
    return (
        <Fragment>

            <div className="container mt-4 mb-5">
                <h1 className='fs-2 fw-bold mt-5 mb-5 text-center rounded p-2' style={{ color: "White", fontFamily: "poppins", backgroundColor: "darkgreen", boxShadow: "2px 2px 0 0 black", width: "50vw", margin: "0 auto" }}>About Us</h1>
                <p style={{ textAlign: "justify" }}>FDA India is dedicated to the holistic development and empowerment of individuals across the country. Established in 2022, our company has been working hard to uplift everyone by providing them with the necessary resources, knowledge, and support to succeed in today's agricultural world. </p>
                <p style={{ textAlign: "justify" }}>
                    Agriculture is one of the main sources of livelihood for most of the people in our country, but their economic condition is still very bad. They often face numerous challenges, such as limited access to funds, modern technology, fluctuating market prices, and environmental degradation. Recognizing these challenges, FDA India was founded with a mission to address the needs of individuals and promote sustainable agricultural practices. </p>
                <p style={{ textAlign: "justify" }}>
                    At its core, we believe that the prosperity of a nation is directly linked to the success of its
                    people. That is why we have introduced the <b className="text-dark">Swabhimaan card </b>along with the <b className="text-dark">Swabhimaan
                        Kendra</b> . This not only helps them to resolve their financial issues but also provides highquality input and the latest technologies to their business, which improves their livelihood.
                </p>
            </div>


        </Fragment>
    )
}

export default Aboutus

export function Ourvision() {
    return (
        <Fragment>
            <div className="container mt-4">
                <h1 style={{ color: "white", fontFamily: "poppins", margin: "0 auto", backgroundColor: "darkgreen", boxShadow: "2px 2px 0px 1px black" }} className='fs-2 fw-bold text-center w-50 rounded p-1'>Our Vision</h1>
                <img className='mt-4  mb-4 w-100' src={visionimg} alt="" />
                <p className='ps-2' style={{ textAlign: "justify" }}>
                    FDA India was established with the vision to empower every individual, along with the entire
                    agricultural community. At our heart, we believe that every individual deserves access to the
                    resources, knowledge, and support necessary to succeed. This vision involves a holistic
                    approach to individual development, addressing not only agricultural practices but also socioeconomic empowerment, environmental protection, and community strength. <br /><br />
                    We aim to make agriculture a sustainable, profitable, and respected profession. This means not
                    only improving individuals' incomes through better access to markets and fair prices for their
                    produce but also enhancing their quality of life through access to education, health care, and
                    modern amenities. <br /><br />
                    Our ultimate goal is to create a vibrant agricultural sector that is environmentally sustainable,
                    economically viable, and capable of feeding the growing population while preserving the
                    richness of our land for future generations. We are fully dedicated to transforming this vision
                    into reality by addressing all the multifaceted challenges that every individual faces today.
                </p>
            </div>
        </Fragment>
    )
}

export function Ourmission() {
   
    return (
        <Fragment>
            <div className="container mt-5" style={{ textAlign: "justify" }}>
                <h1 style={{ color: "white", fontFamily: "poppins", margin: "0 auto", backgroundColor: "darkgreen", boxShadow: "2px 2px 0px 1px black" }} className='fs-2 fw-bold text-center w-50 rounded p-1'>Our Mission</h1>
                <img className='mt-4  mb-4 w-100' src={missionimg} alt="" />
                <p className='ps-2' style={{ textAlign: "justify" }}>To realize our vision, FDA Indi is committed to a mission that focuses on comprehensive
                    individual development. Our mission includes several key objectives:</p>
                <ol style={{ textAlign: "justify" }}>
                    <li className='pt-3'><b className="text-dark">Access to Resources: </b>FDA India is dedicated to ensuring that individuals have access
                        to the necessary inputs for successful farming. This includes quality seeds, fertilizers,
                        water, and latest equipment. That’s why, we have launched the <b className="text-dark">Swabhimaan Card</b>,
                        which gives them access to these critical resources.

                    </li>
                    <li className='pt-3'>
                        <b className="text-dark">Market Access and Fair Prices:</b> Our mission also involves helping people gain better
                        access to markets where they can sell and purchase produce at fair and remunerative
                        prices, so we have launched <b className="text-dark"> Swabhimaan Kendra</b>. Our goal is to bridge the gap
                        between individuals and consumers by promoting direct market linkages and
                        supporting individuals; cooperatives.

                    </li>
                    <li className='pt-3'><b className="text-dark">Advocacy and Policy Support:</b> Recognizing the need for supportive agricultural
                        policies, FDA India advocates for policies that help every individual. We work towards
                        ensuring that individual voices are heard in the formulation of agricultural policies and
                        that these policies facilitate the growth and development of the agriculture sector.
                    </li>
                    <li className='pt-3'>
                        <b className="text-dark">Sustainability and Environmental Protection:</b>: We are committed to promoting
                        practices that not only boost agricultural productivity but also protect the environment.
                        This includes promoting organic farming, water conservation techniques, and
                        integrated pest management practices that minimize the impact on the ecosystem.

                    </li>
                    <li className='pt-3'><b className="text-dark">Innovation and Technology Adoption:</b> We believe in the power of innovation and
                        technology to revolutionize agriculture. Our mission includes fostering an environment
                        where individuals are open to adopting new technologies that can enhance efficiency
                        and productivity.

                    </li>
                </ol>
                <p style={{ textAlign: "justify" }}>
                    FDA India  puts socio-economic development at the heart of its work. We understand that each
                    individual plays an essential role in the development of society. That's why our company
                    focuses on improving the lives of smallholder workers and women, as well as the lives of
                    underserved communities, by providing them with access to resources and markets, as well as
                    support services. Our mission is to improve livelihoods, reduce poverty, and empower
                    agriculture communities through inclusive development and entrepreneurship.
                </p>
            </div>
        </Fragment>
    )
}

export function Howwework() {
    return (
        <Fragment>
            <div className='container mt-5' >
                <h1 style={{ color: "white", fontFamily: "poppins", margin: "2rem auto", backgroundColor: "darkgreen", boxShadow: "2px 2px 0px 1px black",width:"40vh" }} className='fs-2 fw-bold text-center rounded p-1'>How We Work</h1>
                <p style={{ textAlign: "justify" }} >FDA India operates through a complicated approach aimed at empowering individuals,
                    improving their livelihoods, and promoting sustainable agriculture practices. At the core of its
                    work is the promotion of knowledge spreading, capacity building, and access to resources for
                    individuals across the nation. <br /><br />
                    Our company collaborates with various stakeholders, including Agencies, Non-Profit
                    Organizations, Research Institutions, and Private Sector Companies, to implement its programs
                    and initiatives. One of the most important activities is the setting up and implementation of
                    Swabhimaan Kendras. These Kendras are agricultural service centers where individuals can
                    get access to a variety of services, from agricultural inputs and extension services to market
                    connections.</p>
            </div>
        </Fragment>
    )
}

export function Oursupply() {
    return (
        <Fragment>

            <div className='container mt-5' >
                <h1 style={{ color: "rgb(225,165,0)", fontFamily: "roman" }} className='fs-4 fw-bold pt-2'>Our Supply Chain Management</h1>
                <p style={{ textAlign: "justify" }}> FDA India partners with top-leading companies including top brands like ITC, Dabur,
                    Himalaya, HUL, and IFCO Agro, for their supply management to make sure that every
                    individual gains reliable, high-quality inputs that boost profitability as well as production.
                </p>
                <div className="row">

                    <p className='' style={{ textAlign: "justify" }}>
                        We manage our supply chain systematically to provide agricultural products and services to
                        individuals nationwide efficiently and sustainably. Our supply chain management is a set of
                        interconnected steps and processes to procure, distribute, and deliver necessary resources to
                        individuals promptly and affordably:
                    </p>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <ol style={{ textAlign: "justify" }}>
                            <li className='pt-3'><b className="text-dark">Procurement:</b> FDA India initiates the supply chain process by identifying the needs
                                and requirements of individuals and sourcing high-quality agricultural inputs such as
                                seeds, fertilizers, pesticides, and farm equipment from trusted suppliers and
                                manufacturers. The organization works with its partners to source a wide variety of
                                products that cater to the individual requirements and preferences of the individuals.

                            </li>
                            <li className='pt-3'><b className="text-dark">Quality Assurance:</b> Prior to distribution, we conduct rigorous quality checks and
                                assessments to ensure that the procured products meet the highest standards of quality,
                                safety, and efficacy. Only those products that meet the strict quality requirements are
                                considered suitable for delivery to people.
                            </li>
                            <li className='pt-3'><b className="text-dark">Packaging and labeling:</b> After the quality assurance, FDA India continues with the
                                packaging and labeling of the products. The packaging materials used by us are ecofriendly, durable, and compliant with regulatory requirements. The products are labeled
                                with the product name, the usage instructions, the safety precautions, and the expiration
                                date so that they can be easily identified and used by people.
                            </li>
                            <li className='pt-3'><b className="text-dark">Distribution Centers:</b> We operate a network of distribution centers strategically
                                located across different regions to facilitate the efficient and timely delivery of products
                                to people. Our distribution centers act as a hub for the storage, sorting, and dispatch of
                                agricultural inputs to the Swabhimaan Kendras. All distribution centers are equipped
                                with modern storage facilities, transportation vehicles, and logistics infrastructure to
                                ensure smooth operations and timely delivery of products.
                            </li>
                            <li className='pt-3'><b className="text-dark">Individual Outreach:</b> Once the products reach our kendras, we conduct extensive
                                outreach and awareness campaigns to inform and educate individuals about the
                                availability and benefits of the products.
                            </li>
                        </ol>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <img className='mt-4 mb-5 w-100 rounded' style={{boxShadow:"20px 20px 60px #000000,-20px -20px 60px white"}} src={supplychain} alt="" />
                    </div>
                </div>
                <p className='' style={{ textAlign: "justify" }}> In other words, our supply chain management is a complex and multi-faceted process that requires careful planning, coordination, and execution to deliver agricultural inputs and
                    resources efficiently and effectively to individuals. Through strategic partnerships, b
                    quality assurance processes, and extensive outreach, we aim to empower people, improve their
                    productivity, and contribute to the development of Indian agriculture.</p>
            </div>
        </Fragment>
    )
}