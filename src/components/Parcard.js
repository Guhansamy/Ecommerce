import { useLocation, useParams, Outlet } from "react-router-dom";
import { useState } from "react";
import star from "../assets/star.png"
import hand from "../assets/right-hand.png"
import bullet from "../assets/bullet.png"
import staring from "../assets/staring.png"
import thunder from "../assets/lighting.png"
import cart from "../assets/shopping-cart.png"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
</style>



const Parcard = () => {

    const location = useLocation();
    const data = location.state.data;

    console.log(data);

    const {discountPercentage,images,category,brand,description,price,rating,title} = location.state.data;
    const firstImage = images && images.length > 0 ? images[0] : null;

    let amount = price*100;

    const getStarCount = () => {
        if (rating >= 4.50)
        return 5;
        else if (rating >= 4.40 && rating <4.50) return 4
        else if  (rating >= 4.30 && rating < 4.40 ) return 3
        else return 2

    };

    const tt = (price, discountPercentage) => {
        const discount = (discountPercentage / 100) * price;
        const amountAfterDiscount = price - discount;
        return Math.round(amountAfterDiscount);
    };

    let total = tt(price,discountPercentage)*100;
    let v = tt(price,discountPercentage)/8;
    let ten = Math.round(v);
    let emi = Math.round((total*10)/100);

    return (
        <div>
            <div className=" flex flex-row w-90% bg-white mr-5 ml-5 mt-10 rounded-xl">

                <div className="flex flex-col">
                    <div className=" flex mt-7 mb-5 mr-5 ml-5 w-[350px] justify-center">
                        {
                            firstImage ? (
                                <img
                                src = {firstImage}
                                alt="poda"
                                className="h-[400px] w-[300px] rounded-lg" />
                            ) : (<h4> trial tha da</h4>)
                        }
                    </div>

                    <div className="flex flex-row ml-5">
                        <div className="flex flex-row bg-purple-500 rounded-lg ml-5 mr-1 mb-2 h-10 items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1672/1672241.png" alt="thunde" className="h-[20px] w-[30px] ml-4 mr-2" />
                            <button className="text-white mr-6">Buy Now</button>
                        </div>
                        
                        <div className="flex flex-row bg-purple-500 rounded-lg ml-5 mb-2 h-10 items-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/1404/1404364.png" alt="thunde" className="h-[25px] w-[25px] ml-4 mr-2" />
                            <button className="text-white mr-6">Add To Cart</button>
                        </div>
                    </div>
                </div>
                  

                <div className="flex flex-col mr-3 mt-7 mb-5">

                    <div className="mr-3 ml-5">

                        <div className="flex flex-row leading-[48px] text-3xl font-super-font mb-3">
                            <h2> {brand} </h2>
                            <h2 className="ml-3"> {title} </h2>
                        </div>
                       
                        <div className="flex flex-row">
                            <div className= " flex flex-row bg-green-800 w-[70px] rounded-md mb-3"> 
                                <div className="text-slate-100 mr-1 ml-2">
                                    {rating}
                                </div>
                                <img src = {staring} alt="star" className="h-[20px] w-[20px]text-white filter invert" />
                            </div>
                            <div className="text-[#878787] ml-4">
                                11,990 Ratings & 960 Reviews
                            </div>
                        </div>
                        
                        <div className="flex flex-row items-center leading-[48px]">
                            <h2 className="font-nalla-font text-2xl"> ₹{total}  </h2>
                            <h2 className="text-red-600 text-base ml-4 mr-4 font-light"> <del>   ₹{amount}  </del></h2>
                            <h2 className="text-lg font-medium">{discountPercentage}%off </h2>
                        </div>
                        
                        

                        <div className="leading-10 mb-3">
                            + ₹99 Secured Packaging Fee
                        </div>

                        
                        
                        <div className="flex flex-col leading-10 font-medium mb-3">
                       <h3> Available offers</h3>
                       
                            <div className="flex items-center">
                                <img src= {bullet} alt="hand" className="h-[30px] w-[30px] mr-5"/>
                                <h6>Bank Offer10% Cashback on Shoppy G Bank Card</h6>
                            </div>
                           
                            <div className="flex items-center">
                                <img src= {bullet} alt="hand" className="h-[30px] w-[30px] mr-5"/>
                                <h6>Special PriceGet extra ₹{ten} off (price inclusive of cashback/coupon)</h6>
                            </div>

                            <div className="flex items-center">
                                <img src= {bullet} alt="hand" className="h-[30px] w-[30px] mr-5"/>
                                <h6>Buy this product and Get Extra ₹75 Off on our other products </h6>
                            </div>

                            <div className="flex items-center">
                                <img src= {bullet} alt="hand" className="h-[30px] w-[30px] mr-5"/>
                                <h6>EMI starting from ₹{emi}/monthView Plans</h6>
                            </div>

                        </div>
                        
                        <div className="flex flex-row leading-10 mb-2">
                            <div className="text-[#878787] mr-4" style={{fontSize : 18}}> Description :</div>
                            <div style={{fontSize : 16}}> {description} </div>
                        </div>

                        {/* <div className="flex">
                            {Array.from({ length: getStarCount() }, (_, index) => (
                                <img key={index} src={star} alt="star" className="h-[40px] w-[40px]" />
                            ))}
                        </div> */}

                        

                    </div>

                </div>        
                    
                <Outlet />
            </div>
        </div>
    );

}

export default Parcard;