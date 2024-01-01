// import { useState } from "react"

const Item = (props) => {

    const{title, brand, price, rating, discountPercentage, images} = props.item_data;
    const firstImage = images && images.length > 0 ? images[0] : null;

    return (
        <div className="flex flex-col h-[300px] w-[250px] justify-center items-center mb-7 ml-10 border-[1px] border-black
        rounded-xl " style={{backgroundColor : "#F0ECE3"}}>
                <div>
                {
                    firstImage ? (
                        <img
                        src = {firstImage}
                        alt="poda"
                        className="h-[200px] w-[200px] mb-5 rounded-lg" />
                    ) : (<h4> trial tha da</h4>)
                }
                </div>
                <div className="flex flex-col ">

                <div>{title} </div> 
                <div className="flex justify-center font-semibold"> Upto {discountPercentage}% off </div>

                </div>
                
        </div>
    )
}

export default Item;