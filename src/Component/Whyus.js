import React, { Fragment } from 'react';
// import approach from "../Component/crm/assets/images/APPROACH-4.gif";
import fdagif from "../Component/crm/assets/video/fdagif.mp4"

function Whyus() {

    return (
        <Fragment>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 p-3 border border-2 rounded" style={{ fontFamily: "poppins" }}>
                        {/* <h1 className='h1 fs-3 fw-bold' style={{ color: '#bac34e', fontFamily: "Brush Script MT, Brush Script Std, cursive" }}>Why Choose Us</h1> */}
                        <div className="">
                            <div className="container">
                                <h1 className='pt-3 fs-1 fw-bold' style={{ color: 'darkgreen', fontFamily: 'poppins' }}>What makes us different?</h1>
                                <p className='ps-4 fs-6' style={{ textAlign: "justify", fontFamily: "poppins" }}><strong> FDA</strong> India represents a unique and significant approach to agricultural development. We stand out from others because of our objectives, methodologies, innovative approaches, and their impacts. We focus not only on providing financial assistance but also on empowering individuals with knowledge, resources, and opportunities for sustainable growth.Our goal is to uplift individuals, address their financial knowledge, technology, and marketrelated needs, and create sustainable livelihoods that benefit their communities and contribute to the overall development of the agricultural sector in India.</p>
                            </div>
                            <h3 className='fw-4 ps-2 fw-bold text-secondary pt-3 pb-3'>Our Approches</h3>
                        </div>
                        <div className="container pt-3 d-block d-xxl-none d-xl-none d-lg-none d-md-block">
                            <video className='w-100 shadow-lg' autoPlay loop muted src={fdagif} ></video>
                        </div>

                        <div className="container d-block d-xxl-none d-xl-none d-lg-none">

                            <div className="accordion pt-4 pb-4" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <span className='text-primary fs-4'>1. Holistic approach</span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>
                                                    One of our approaches is focused on empowering individuals through a holistic approach. We've come up with this idea to empower individuals in agriculture through the <b>Swabhimaan card</b>,which gives them access to all the essentials like FMCG products, seeds, fertilizers, pesticides, and even modern equipment at subsidized rates, making it easier on their wallets. <br /><br />
                                                    Agriculture is a field that requires considerable investment, not just at the planting stage but throughout the crop cycle. So, this Card comes with a zero-interest rate facility that allows them to borrow money for agricultural purposes without paying any interest. It helps them cover immediate expenses without having to sell their produce in haste or at low prices. This financial support allows them to invest in high-quality inputs for crop cultivation, which boosts their agricultural productivity and income.
                                                    <br /><br />
                                                    Another key aspect of the holistic approach is its focus on technology adoption and innovation in agriculture. Our card encourages individuals to use modern agricultural technology so that they can easily adapt to changing environmental conditions and market dynamics. We're here to help them out in any way we can, making sure they have everything they need for successful agriculture.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span className='text-primary fs-4'>2. Agriculture Centric Initiatives</span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>  Agriculture-centric initiatives are all about providing comprehensive support to
                                                    individuals and promoting agriculture businesses. In order to take things to the next
                                                    level, we are opening <b>Swabhimaan Kendras </b>across the country.
                                                    <br /><br />
                                                    One of the primary initiatives of these Kendras is to supply quality agricultural inputs
                                                    to individuals. This includes seeds, fertilizers, pesticides, and other essential materials
                                                    needed for crop cultivation. These Kendras help individuals raise the quality and
                                                    production of their crops by ensuring the availability of quality inputs.
                                                    <br /><br />
                                                    Another significant initiative is to educate individuals about innovative farming
                                                    techniques. This includes sustainable farming practices such as crop rotation, organic
                                                    farming, and integrated pest management. By adopting these methods, they can
                                                    improve soil health, reduce the use of chemical pesticides and fertilizers, and increase
                                                    crop yields in an eco-friendly way.
                                                    <br /><br />
                                                    Furthermore, Swabhimaan Kendras play a crucial role in connecting individuals with
                                                    markets. They provide information on market trends, prices, and demand to help them
                                                    make informed decisions about what crops to grow and when to sell them. Additionally,
                                                    they can even sell their products at our Kendras. This initiative helps reduce the number
                                                    of middlemen, ensuring better prices for people and fresher produce for consumers.
                                                    These Kendras help individuals become more sustainable and productive by offering
                                                    high-quality resources, expanding market access, and combining traditional knowledge
                                                    with modern technology. As a result, Kendras are not just supporting the livelihoods of
                                                    millions of people but also contributing to the overall food security and economic
                                                    development of the country.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span className='text-primary fs-4'>3. Youth Employment</span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>Swabhimaan Kendras encourage youth to explore business opportunities in the
                                                    agriculture sector. They assist them in starting their own firm and also provide them
                                                    with free initial agricultural stocks. <br /><br />
                                                    These Kendras create a variety of job roles that go beyond traditional farming. From
                                                    agri-technology experts and agricultural engineers to marketing specialists and supply
                                                    chain managers, the scope for employment is wide and varied. In other words, these
                                                    serve as hubs for connecting youth with job opportunities in agriculture. They
                                                    collaborate with local people and agricultural businesses to identify employment
                                                    opportunities and facilitate job placements for youth. Whether it is as a farm manager,
                                                    agricultural technician, extension officer, or agricultural-business, Swabhimaan
                                                    kendras allow young people to engage in agricultural activities while enhancing their
                                                    own skills and livelihoods. <br /><br />
                                                    It helps build a community of knowledgeable, skilled, and motivated young people and
                                                    businessmen who are ready to take on the challenges of the 21st-century agricultural
                                                    sector. By doing so, Swabhimaan Kendra not only secures the future of agriculture in
                                                    the country but also ensures that the youth find meaningful and rewarding employment
                                                    in their local communities. This approach has the potential to transform rural
                                                    economies, making them more vibrant, sustainable, and resilient. This diversification
                                                    not only helps in retaining the youth in rural areas but also attracts those from urban
                                                    areas, reversing the rural-to-urban migration trend.
                                                    <br /> <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <span className='text-primary fs-4'>4. Promoting Sustainable Development</span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>Swabhimaan Card and Swabhimaan Kendra are two innovative initiatives that play a
                                                    crucial role in promoting sustainable development in the agricultural sector. They
                                                    address key issues such as poverty, inflation, unemployment, and environmental
                                                    degradation by equipping individuals with the resources, tools, and knowledge they
                                                    need to succeed. <br /><br />
                                                    Firstly, the Swabhimaan Card encourages individuals to adopt sustainable farming
                                                    practices by providing them with access to resources and technologies. With the Card,
                                                    people can invest in eco-friendly technologies such as drip irrigation, organic fertilizers,
                                                    and integrated pest management systems. These technologies help in conserving water,
                                                    reducing chemical use, and reducing environmental pollution, which in turn helps in
                                                    maintaining the sustainability of agricultural ecosystems in the long term.<br /><br />
                                                    This card makes it easy for individuals to access services and products that are
                                                    necessary for modern, sustainable agriculture. For example, individuals can get access
                                                    to eco-friendly seeds, fertilizers, and pesticides, as well as information on how to use
                                                    these resources most effectively. The card acts as a bridge, connecting individuals with
                                                    the latest advancements in agricultural science and technology. It ensures that each
                                                    individual can access what they need to increase their productivity. <br /><br />Moreover, Swabhimaan Kendras actively promote sustainable agriculture through
                                                    innovative and latest technologies. They offer technical assistance to educate people
                                                    about sustainable farming methods and their benefits. These Kendras empower people
                                                    to adopt practices like soil conservation, crop rotation, and biodiversity conservation
                                                    that enhance soil health, protect natural resources, and preserve biodiversity.
                                                    <br /><br />Furthermore, our Kendras serve as hubs for knowledge exchange and modern
                                                    technology in sustainable agriculture. They provide people with access to the latest and
                                                    most advanced technologies to help them face challenges in sustainable farming. By
                                                    fostering a culture of innovation and continuous learning, these Kendras drive positive
                                                    change and adaptation in agricultural practices, contributing to the overall sustainability
                                                    of the sector.
                                                    <br /><br />By doing this, they not only improve their livelihoods but also contribute to the overall
                                                    goal of sustainable development, which includes economic prosperity, social inclusion,
                                                    and environmental protection.
                                                    <br /> <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container d-none d-xxl-block d-xl-block d-lg-block">

                            <div className="accordion pt-4 pb-4" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <span className='text-primary fs-4'>1. Holistic approach</span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>
                                                    One of our approaches is focused on empowering individuals through a holistic approach. We've come up with this idea to empower individuals in agriculture through the <b>Swabhimaan card</b>,which gives them access to all the essentials like FMCG products, seeds, fertilizers, pesticides, and even modern equipment at subsidized rates, making it easier on their wallets. <br /><br />
                                                    Agriculture is a field that requires considerable investment, not just at the planting stage but throughout the crop cycle. So, this Card comes with a zero-interest rate facility that allows them to borrow money for agricultural purposes without paying any interest. It helps them cover immediate expenses without having to sell their produce in haste or at low prices. This financial support allows them to invest in high-quality inputs for crop cultivation, which boosts their agricultural productivity and income.
                                                    <br /><br />
                                                    Another key aspect of the holistic approach is its focus on technology adoption and innovation in agriculture. Our card encourages individuals to use modern agricultural technology so that they can easily adapt to changing environmental conditions and market dynamics. We're here to help them out in any way we can, making sure they have everything they need for successful agriculture.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span className='text-primary fs-4'>2. Agriculture Centric Initiatives</span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>  Agriculture-centric initiatives are all about providing comprehensive support to
                                                    individuals and promoting agriculture businesses. In order to take things to the next
                                                    level, we are opening <b>Swabhimaan Kendras </b>across the country.
                                                    <br /><br />
                                                    One of the primary initiatives of these Kendras is to supply quality agricultural inputs
                                                    to individuals. This includes seeds, fertilizers, pesticides, and other essential materials
                                                    needed for crop cultivation. These Kendras help individuals raise the quality and
                                                    production of their crops by ensuring the availability of quality inputs.
                                                    <br /><br />
                                                    Another significant initiative is to educate individuals about innovative farming
                                                    techniques. This includes sustainable farming practices such as crop rotation, organic
                                                    farming, and integrated pest management. By adopting these methods, they can
                                                    improve soil health, reduce the use of chemical pesticides and fertilizers, and increase
                                                    crop yields in an eco-friendly way.
                                                    <br /><br />
                                                    Furthermore, Swabhimaan Kendras play a crucial role in connecting individuals with
                                                    markets. They provide information on market trends, prices, and demand to help them
                                                    make informed decisions about what crops to grow and when to sell them. Additionally,
                                                    they can even sell their products at our Kendras. This initiative helps reduce the number
                                                    of middlemen, ensuring better prices for people and fresher produce for consumers.
                                                    These Kendras help individuals become more sustainable and productive by offering
                                                    high-quality resources, expanding market access, and combining traditional knowledge
                                                    with modern technology. As a result, Kendras are not just supporting the livelihoods of
                                                    millions of people but also contributing to the overall food security and economic
                                                    development of the country.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <span className='text-primary fs-4'>3. Youth Employment</span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}> Swabhimaan Kendras encourage youth to explore business opportunities in the
                                                    agriculture sector. They assist them in starting their own firm and also provide them
                                                    with free initial agricultural stocks. <br /><br />
                                                    These Kendras create a variety of job roles that go beyond traditional farming. From
                                                    agri-technology experts and agricultural engineers to marketing specialists and supply
                                                    chain managers, the scope for employment is wide and varied. In other words, these
                                                    serve as hubs for connecting youth with job opportunities in agriculture. They
                                                    collaborate with local people and agricultural businesses to identify employment
                                                    opportunities and facilitate job placements for youth. Whether it is as a farm manager,
                                                    agricultural technician, extension officer, or agricultural-business, Swabhimaan
                                                    kendras allow young people to engage in agricultural activities while enhancing their
                                                    own skills and livelihoods. <br /><br />
                                                    It helps build a community of knowledgeable, skilled, and motivated young people and
                                                    businessmen who are ready to take on the challenges of the 21st-century agricultural
                                                    sector. By doing so, Swabhimaan Kendra not only secures the future of agriculture in
                                                    the country but also ensures that the youth find meaningful and rewarding employment
                                                    in their local communities. This approach has the potential to transform rural
                                                    economies, making them more vibrant, sustainable, and resilient. This diversification
                                                    not only helps in retaining the youth in rural areas but also attracts those from urban
                                                    areas, reversing the rural-to-urban migration trend.
                                                    <br /> <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" style={{boxShadow:"none"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <span className='text-primary fs-4'>4. Promoting Sustainable Development</span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="card card-body">
                                                <p style={{ textAlign: "justify" }}>Swabhimaan Card and Swabhimaan Kendra are two innovative initiatives that play a
                                                    crucial role in promoting sustainable development in the agricultural sector. They
                                                    address key issues such as poverty, inflation, unemployment, and environmental
                                                    degradation by equipping individuals with the resources, tools, and knowledge they
                                                    need to succeed. <br /><br />
                                                    Firstly, the Swabhimaan Card encourages individuals to adopt sustainable farming
                                                    practices by providing them with access to resources and technologies. With the Card,
                                                    people can invest in eco-friendly technologies such as drip irrigation, organic fertilizers,
                                                    and integrated pest management systems. These technologies help in conserving water,
                                                    reducing chemical use, and reducing environmental pollution, which in turn helps in
                                                    maintaining the sustainability of agricultural ecosystems in the long term.<br /><br />
                                                    This card makes it easy for individuals to access services and products that are
                                                    necessary for modern, sustainable agriculture. For example, individuals can get access
                                                    to eco-friendly seeds, fertilizers, and pesticides, as well as information on how to use
                                                    these resources most effectively. The card acts as a bridge, connecting individuals with
                                                    the latest advancements in agricultural science and technology. It ensures that each
                                                    individual can access what they need to increase their productivity. <br /><br />Moreover, Swabhimaan Kendras actively promote sustainable agriculture through
                                                    innovative and latest technologies. They offer technical assistance to educate people
                                                    about sustainable farming methods and their benefits. These Kendras empower people
                                                    to adopt practices like soil conservation, crop rotation, and biodiversity conservation
                                                    that enhance soil health, protect natural resources, and preserve biodiversity.
                                                    <br /><br />Furthermore, our Kendras serve as hubs for knowledge exchange and modern
                                                    technology in sustainable agriculture. They provide people with access to the latest and
                                                    most advanced technologies to help them face challenges in sustainable farming. By
                                                    fostering a culture of innovation and continuous learning, these Kendras drive positive
                                                    change and adaptation in agricultural practices, contributing to the overall sustainability
                                                    of the sector.
                                                    <br /><br />By doing this, they not only improve their livelihoods but also contribute to the overall
                                                    goal of sustainable development, which includes economic prosperity, social inclusion,
                                                    and environmental protection.
                                                    <br /> <br /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <p className='fs-5 d-block d-xxl-none d-xl-none d-lg-none' style={{ textAlign: "justify" }}>
                                These initiatives show how targeted support and education can transform traditional farming into a modern, sustainable, and profitable venture.
                            </p>
                        </div>
                        <div className="container">
                            <p className='fs-5 d-none d-xxl-block d-xl-block d-lg-block' style={{ textAlign: "justify" }}>
                                These initiatives show how targeted support and education can transform traditional farming into a modern, sustainable, and profitable venture.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="container pt-3 mt-3 d-none d-xxl-block d-xl-block d-lg-block">
                            <video className='w-100 shadow-lg' autoPlay loop muted src={fdagif} ></video>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Whyus

