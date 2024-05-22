import React, { Fragment } from 'react';
import blog1 from '../../Component/crm/assets/images/Blogs/blog1.JPG';
import '../../Css/Blog.css';

function Blogs1() {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-9 col-xl-10">
                        <div class="card">
                            <img src={blog1}  className="card-img blogCardImg" alt="..." />
                            <div class="card-body" style={{ textAlign: "justify" }}>
                                <h5 class="card-title pt-2">Swabhimaan Card: Your Key to Success</h5>
                                <p class="card-text pt-4">FDA India introduces <b>SWABHIMAAN CARD</b> to every individual and agricultural business.
                                    With this card, they will get enough credit for their farming and business activities. <br /><br />
                                    Even today, the majority of our nation's population is still dependent on agriculture, and their
                                    economic condition is still very bad. If they need money for agriculture or any other reason,
                                    then they have only two options: -
                                </p>
                                <ul>
                                    <li>The first is to get a loan from a bank, which is lengthy and requires a lot of paperwork.</li>
                                    <li>The second is to get money from a moneylender. The interest rate on the moneylender’s
                                        loans is very high, which makes their financial situation even worse.</li>
                                </ul>
                                <p>To get rid of all such problems, FDA India launched the Swabhimaan credit card</p>
                                <h5 className='card-title pt-2'>Let's explore how this special card is changing the future of Nation: -</h5>
                                <ol type='number'>
                                    <li>
                                        <p>
                                            <b>Easy Money for Agriculture:- </b>The Swabhimaan Card is like a friend that gives them
                                            money when they need it. With this card, they can buy necessary things like seeds,
                                            fertilizers, and machines. They don't have to worry about where to get the money from
                                            because the Swabhimaan Card is there to help them.</p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Helping Individuals Everywhere: </b> The swabhimaan card is not just for a person or a
                                            place. It is for everyone, across the Nation. Whether they are in a big city or a small
                                            village, the Swabhimaan Card can help them. It's like a superhero that comes to the
                                            rescue of everyone who needs financial help to fulfill their needs.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Making Farming Better: </b> In addition to growing crops, farmers can also try new ways
                                            of farming that improve the overall well-being of the community. For instance, they
                                            can utilise latest machines or technologies that reduce water consumption and improve
                                            soil health. This means farmers can grow more food without damaging the soil.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Protecting Farmers from Problems: </b> Sometimes, bad things happen in farming, like
                                            crops getting destroyed by pests or floods. The Swabhimaan card protects farmers from
                                            these issues. Swabhimaan Cards come with insurance, which means if something bad
                                            happens to their crops or products taken on debt, the insurance will help them get back
                                            on their feet.

                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <b>Bringing Money to Villages: </b>With the help of the Swabhimaan Card, individuals can
                                            make more money from their businesses. This means there's more money flowing into
                                            villages and small towns. People can use this money to buy things they need, like food,
                                            clothes, and medicine. It helps everyone in the village have a better life.
                                        </p>
                                    </li>
                                </ol>
                                <p>In the end, the Swabhimaan Card is like a magic key for everyone, bringing them money when
                                    they need it most. It's making farming and agriculture businesses easier, safer, and more
                                    profitable everywhere. The Swabhimaan Card could lead to a brighter future, not just for
                                    farmers but for all of us, with more food, better jobs, and a healthier environment. It's a small
                                    card with a big impact, showing that sometimes the key to big change fits in your pocket.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-2 col-xl-2 border border-secondary border-3">
                        <div class="input-group mb-3 pt-5">
                            <input type="text" class="form-control" placeholder="Search blogs..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                        <div className="blogcontainer">
                            <div className="animated-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Blogs1
