import React, { Component } from 'react'

import './Order.css'

class Order extends Component {
    render() {
        return (
            <div id="Wrapper">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h2 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#Subway" aria-expanded="false" aria-controls="collapseOne">
                                    Subway
                                </a>
                            </h2>
                        </div>
                        <div id="Subway" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Type of Sandwich </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="radio" name="sandwich" value="forest" id="forest" /> Black Forest Ham<br />
                                            <input type="radio" name="sandwich" value="chicken_bacon" id="chicken_bacon" /> Chick and Bacon Ranch Melt<br />
                                            <input type="radio" name="sandwich" value="cold_cut" id="cold_cut" /> Cold Cut Combo<br />
                                            <input type="radio" name="sandwich" value="bmt" id="bmt" /> Italian B.M.T.<br />
                                            <input type="radio" name="sandwich" value="meatball" id="meatball" /> Meatball Marinara<br />
                                            <input type="radio" name="sandwich" value="roasted_c" id="roasted_c" /> Over Roasted Chicken<br />
                                            <input type="radio" name="sandwich" value="roast_beef" id="roast_beef" /> Roast Beef<br />
                                            <input type="radio" name="sandwich" value="rotisserie" id="rotisserie" /> Rotisserie-Style Chicken<br />
                                            <input type="radio" name="sandwich" value="spicy" id="spicy" /> Spicy Italian<br />
                                            <input type="radio" name="sandwich" value="steak" id="steak" /> Steak and Cheese<br />
                                            <input type="radio" name="sandwich" value="subway" id="subway" /> Subway Club<br />
                                            <input type="radio" name="sandwich" value="sweet" id="sweet" /> Sweet Onion Chicken Teriyaki<br />
                                            <input type="radio" name="sandwich" value="tuna" id="tuna" /> classNameic Tuna<br />
                                            <input type="radio" name="sandwich" value="turkey" id="turkey" /> Turkey Breast<br />
                                            <input type="radio" name="sandwich" value="veggie" id="veggie" /> Veggie Delite<br /><br />
                                        </form>
                                    </div>
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Bread </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="radio" name="bread" value="Italian" id="Italian" /> Italian<br />
                                            <input type="radio" name="bread" value="9-Grain" id="9-Grain" /> 9-Grain Wheat<br />
                                            <input type="radio" name="bread" value="Herbs" id="Herbs" /> Italian Herbs and Cheese<br />
                                            <input type="radio" name="bread" value="Flatbread" id="Flatbread" /> Flatbread<br />
                                            <input type="radio" name="bread" value="Monterey_Bread" id="Monterey_Bread" /> Monterey Cheddar<br />
                                            <input type="radio" name="bread" value="Multi" id="Multi" /> Multi-Grain Flatbread<br /><br />
                                        </form>
                                        <form action="/action_page.php" method="get">
                                            <input type="radio" name="toast" value="not_toasted" id="not_toasted" /> Not Toasted<br />
                                            <input type="radio" name="toast" value="toasted" id="toasted" /> Toasted<br /><br />
                                        </form>
                                    </div>
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Cheese </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="checkbox" name="cheese" value="no_cheese" id="no_cheese" /> No Cheese<br />
                                            <input type="checkbox" name="cheese" value="cheddar" id="cheddar" /> Cheddar<br />
                                            <input type="checkbox" name="cheese" value="Monterey_Cheese" id="Monterey_Cheese" /> Monterey Cheddar<br />
                                            <input type="checkbox" name="cheese" value="Pepper_Jack" id="Pepper_Jack" /> Pepper Jack<br />
                                            <input type="checkbox" name="cheese" value="Provolone" id="Provolone" /> Provolone<br />
                                            <input type="checkbox" name="cheese" value="Shredded_Mozzarella" id="Shredded_Mozzarella" /> Shredded Mozzarella<br />
                                            <input type="checkbox" name="cheese" value="American" id="American" /> American<br /><br />
                                        </form>
                                    </div>
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Extras </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="checkbox" name="extras" value="deluxe" id="deluxe" /> Deluxe<br />
                                            <input type="checkbox" name="extras" value="extra_cheese" id="extra_cheese" /> Extra Cheese<br />
                                            <input type="checkbox" name="extras" value="bacon" id="bacon" /> Bacon<br />
                                            <input type="checkbox" name="extras" value="pepperoni" id="pepperoni" /> Pepperoni<br />
                                            <input type="checkbox" name="extras" value="guac" id="guac" /> Guacamole<br />
                                            <input type="checkbox" name="extras" value="double" id="double" /> Double Meat<br /><br />
                                        </form>
                                    </div>
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Veggies </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="checkbox" name="veggies" value="lettuce" id="lettuce" /> Lettuce<br />
                                            <input type="checkbox" name="veggies" value="spinach" id="spinach" /> Spinach<br />
                                            <input type="checkbox" name="veggies" value="tomatoes" id="tomatoes" /> Tomatoes<br />
                                            <input type="checkbox" name="veggies" value="cucumbers" id="cucumbers" /> Cucumbers<br />
                                            <input type="checkbox" name="veggies" value="pickles" id="pickles" /> Pickles<br />
                                            <input type="checkbox" name="veggies" value="green" id="green" /> Green Peppers<br />
                                            <input type="checkbox" name="veggies" value="black" id="black" /> Black Olives<br />
                                            <input type="checkbox" name="veggies" value="red" id="red" /> Red Onions<br />
                                            <input type="checkbox" name="veggies" value="jalepenos" id="jalepenos" /> Jalepe&ntilde;os<br />
                                            <input type="checkbox" name="veggies" value="banana" id="banana" /> Banana Peppers<br /><br />
                                        </form>
                                    </div>
                                    <div className="col-sm-6 col-md-2">
                                        <h4> Condiments </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="checkbox" name="condiments" value="mayo" id="mayo" /> Mayonnaise<br />
                                            <input type="checkbox" name="condiments" value="light" id="light" /> Light Mayonnaise<br />
                                            <input type="checkbox" name="condiments" value="yellow" id="yellow" /> Yellow Mustard<br />
                                            <input type="checkbox" name="condiments" value="honey" id="honey" /> Honey Mustard<br />
                                            <input type="checkbox" name="condiments" value="dell" id="dell" /> Dell Brown Mustard<br />
                                            <input type="checkbox" name="condiments" value="chipotle" id="chipotle" /> Chipotle Southwest<br />
                                            <input type="checkbox" name="condiments" value="sweet_onion" id="sweet_onion" /> Sweet Onion<br />
                                            <input type="checkbox" name="condiments" value="ranch" id="ranch" /> Ranch<br />
                                            <input type="checkbox" name="condiments" value="oil" id="oil" /> Oil<br />
                                            <input type="checkbox" name="condiments" value="wine" id="wine" /> Red Wine Vinegar<br />
                                            <input type="checkbox" name="condiments" value="sriracha" id="sriracha" /> Creamy Sriracha<br />
                                            <input type="checkbox" name="condiments" value="vinegarette" id="vinegarette" /> Vinegarette<br />
                                            <input type="checkbox" name="condiments" value="caesar" id="caesar" /> Caesar<br />
                                            <input type="checkbox" name="condiments" value="thousand" id="thousand" /> Thousand Island Dressing<br />
                                            <input type="checkbox" name="condiments" value="cranberry" id="cranberry" /> Cranberry Mustard Sauce<br />
                                            <input type="checkbox" name="condiments" value="salt" id="salt" /> Salt<br />
                                            <input type="checkbox" name="condiments" value="pepper" id="pepper" /> Pepper<br />
                                            <input type="checkbox" name="condiments" value="oregano" id="oregano" /> Oregano<br />
                                            <input type="checkbox" name="condiments" value="grated" id="grated" /> Grated<br /><br />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#SmashBurger" aria-expanded="false" aria-controls="collapseTwo">
                                    Smash Burger
                                </a>
                            </h4>
                        </div>
                        <div id="SmashBurger" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingThree">
                            <h4 className="panel-title">
                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#TacoBell" aria-expanded="false" aria-controls="collapseThree">
                                    Taco Bell/Pizza Hut
                                </a>
                            </h4>
                        </div>
                        <div id="TacoBell" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFour">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#Hagerty" aria-expanded="false" aria-controls="collapseFour">
                                    Hagerty Family Cafe
                                </a>
                            </h4>
                        </div>
                        <div id="Hagerty" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div className="panel-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order
{/*
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFive">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#Modern" aria-expanded="false" aria-controls="collapseFive">
                                    Modern Market
                                </a>
                            </h4>
                        </div>
                        <div id="Modern" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <h4> Breakfast Sandwiches and Burritos </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="radio" name="burrito" value="rocket" id="rocket"> The Rocket<br />
                                                <input type="radio" name="burrito" value="chipotle_bacon" id="chipotle_bacon"> Chipotle Bacon<br />
                                                    <input type="radio" name="burrito" value="maple" id="maple"> Maple Sausage<br />
                                                        <input type="radio" name="burrito" value="classNameic" id="classNameic"> classNameic Sandwich<br />
                                                            <input type="radio" name="burrito" value="green_chili" id="green_chili"> Green Chili Burrito<br />
                                                                <input type="radio" name="burrito" value="chili_bacon" id="chili_bacon"> Chili Bacon Burrito<br /><br />
                </form>
              </div>
                                                            <div className="col-sm-6 col-md-3">
                                                                <h4> Oatmeals </h4>
                                                                <form action="/action_page.php" method="get">
                                                                    <input type="radio" name="oatmeal" value="peanut_butter" id="peanut_butter"> Peanut Butter Banana<br />
                                                                        <input type="radio" name="oatmeal" value="basic" id="basic"> Basic Oatmeal<br />
                                                                            <input type="radio" name="oatmeal" value="super" id="super"> Super Berry<br />
                </form>
              </div>
                                                                        <div className="col-sm-6 col-md-3">
                                                                            <h4> Avacado Toast </h4>
                                                                            <form action="/action_page.php" method="get">
                                                                                <input type="radio" name="Avacado" value="modern" id="modern"> Modern Avo Toast<br />
                </form>
              </div>
                                                                            <div className="col-sm-6 col-md-3">
                                                                                <h4> Brick Oven Pizza </h4>
                                                                                <form action="/action_page.php" method="get">
                                                                                    <input type="radio" name="brick" value="m'rita" id="m'rita"> M'rita<br />
                                                                                        <input type="radio" name="brick" value="three" id="three"> Three Cheese<br />
                                                                                            <input type="radio" name="brick" value="pepe" id="pepe"> Pep&eacute;<br />
                                                                                                <input type="radio" name="brick" value="crimini" id="crimini"> Crimini Kale<br />
                                                                                                    <input type="radio" name="brick" value="bacon_corn" id="bacon_corn"> Bacon Corn<br />
                                                                                                        <input type="radio" name="brick" value="bbq" id="bbq"> BBQ<br />
                                                                                                            <input type="radio" name="brick" value="sausage" id="sausage"> Sausage Pesto<br /><br />
                </form>
              </div>
                                                                                                        <div className="col-sm-6 col-md-3">
                                                                                                            <h4> Soups </h4>
                                                                                                            <form action="/action_page.php" method="get">
                                                                                                                <input type="radio" name="soup" value="split" id="split"> Curry Split Pea<br />
                                                                                                                    <input type="radio" name="soup" value="green_chili_soup" id="green_chili_soup"> Green Chili<br />
                                                                                                                        <input type="radio" name="soup" value="tomato_basil" id="tomato_basil"> Tomato Basil<br /><br />
                </form>
              </div>
                                                                                                                    <div className="col-sm-6 col-md-3">
                                                                                                                        <h4> Salads </h4>
                                                                                                                        <form action="/action_page.php" method="get">
                                                                                                                            <input type="radio" name="salads" value="thai" id="thai"> Thai Coconut<br />
                                                                                                                                <input type="radio" name="salads" value="farmer" id="farmer"> Farmer<br />
                                                                                                                                    <input type="radio" name="salads" value="flat" id="flat"> Flatiron<br />
                                                                                                                                        <input type="radio" name="salads" value="merida" id="merida"> M&eacute;rida<br />
                                                                                                                                            <input type="radio" name="salads" value="steak_caesar" id="steak_caesar"> Steak Caesar<br /><br />
                </form>
              </div>
                                                                                                                                        <div className="col-sm-6 col-md-3">
                                                                                                                                            <h4> Toasted Sandwiches </h4>
                                                                                                                                            <form action="/action_page.php" method="get">
                                                                                                                                                <input type="radio" name="toasted_sandwiches" value="chipotle_steak" id="chipotle_steak"> Chipotle Steak<br />
                                                                                                                                                    <input type="radio" name="toasted_sandwiches" value="tender" id="tender"> Tender Belly BLT+A<br />
                                                                                                                                                        <input type="radio" name="toasted_sandwiches" value="basil_chicken" id="basil_chicken"> Basil Chicken<br />
                                                                                                                                                            <input type="radio" name="toasted_sandwiches" value="blueberry" id="blueberry"> Blueberry Pesto<br /><br />
                </form>
              </div>
            </div>
          </div>
        </div>
                                                                                                                                        </div>
                                                                                                                                        <div className="panel panel-default">
                                                                                                                                            <div className="panel-heading" role="tab" id="headingSix">
                                                                                                                                                <h4 className="panel-title">
                                                                                                                                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#StarGinger" aria-expanded="false" aria-controls="collapseSix">
                                                                                                                                                        Star Ginger
        </a>
                                                                                                                                                </h4>
                                                                                                                                            </div>
                                                                                                                                            <div id="StarGinger" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                                                                                                                                <div className="panel-body">
                                                                                                                                                    <div className="row">
                                                                                                                                                        <form action="/action_page.php" method="get">
                                                                                                                                                            <div className="col-sm-6 col-md-4">
                                                                                                                                                                <h4> Asian Grill </h4>
                                                                                                                                                                <input type="radio" name="star" value="thai_bbq" id="thai_bbq"> Thai BBQ Chicken<br />
                                                                                                                                                                    <input type="radio" name="star" value="lemongrass" id="lemongrass"> Lemongrass Tofu<br />
                                                                                                                                                                        <input type="radio" name="star" value="popsticker" id="popsticker"> Popsticker<br />
                                                                                                                                                                            <input type="radio" name="star" value="egg" id="egg"> Egg Roll<br />
                                                                                                                                                                                <input type="radio" name="star" value="fresh" id="fresh"> Fresh Vegetables<br /><br />
                </div>
                                                                                                                                                                                <div className="col-sm-6 col-md-4">
                                                                                                                                                                                    <h4> Hot Wok and Stir Fry </h4>
                                                                                                                                                                                    <input type="radio" name="star" value="orange" id="orange"> Orange Chicken<br />
                                                                                                                                                                                        <input type="radio" name="star" value="thai_chicken" id="thai_chicken"> Thai Chicken Curry<br />
                                                                                                                                                                                            <input type="radio" name="star" value="special" id="special"> Wok Special of the Day<br />
                </div>
                                                                                                                                                                                            <div className="col-sm-6 col-md-4">
                                                                                                                                                                                                <h4> Pho Noodle Bowls </h4>
                                                                                                                                                                                                <input type="radio" name="star" value="tofu_veggies_v" id="tofu_veggies_v"> Vietnamese Pho with Tofu and Veggies<br />
                                                                                                                                                                                                    <input type="radio" name="star" value="chicken_v" id="chicken_v"> Vietnamese Pho with chicken<br />
                                                                                                                                                                                                        <input type="radio" name="star" value="beef_v" id="beef_v"> Vietnamese Pho with beef<br />
                                                                                                                                                                                                            <input type="radio" name="star" value="tofu_veggies_s" id="tofu_veggies_s"> Spicy Thai with Tofu and Veggies<br />
                                                                                                                                                                                                                <input type="radio" name="star" value="chicken_s" id="chicken_s"> Spicy Thai with Chicken<br />
                                                                                                                                                                                                                    <input type="radio" name="star" value="beef_s" id="beef_s"> Spicy Thai with Beef <br /><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
                                                                                                                                                                                            </div>

                                                                                                                                                                                            <p className='text-center'><button type='button' className='btn btn-primary' id='calc' onclick="checkingstuff()">Add To Order</button></p>
                                                                                                                                                                                            <p className='text-center'><a role='button' className='btn btn-primary' href='payment.html' target='_self'>Checkout</a></p>
  </div>
                                                                                                                                                                                   )
                                                                                                                                                                                    }
}
*/}