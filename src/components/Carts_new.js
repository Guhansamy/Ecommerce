import React from "react";
import { useCart } from "react-use-cart";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards_new = () => {
    const { items, removeItem, totalItems, isEmpty } = useCart();
    let price = 60;
    let discountPercentage = 90;

    const tt = (price, discountPercentage) => {
        const discount = (discountPercentage / 100) * price;
        const amountAfterDiscount = price - discount;
        return Math.round(amountAfterDiscount);
    };

    const total = (price, discountPercentage) => {
        return tt(price, discountPercentage) * 100;
    };

    const amount = (price) => {
        return price * 100;
    };

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    let totalCartValue = 0;
    items.forEach((item) => {
        totalCartValue += total(item.price, item.discountPercentage);
    });

    let totalAmount = 0;
    items.forEach((item) => {
        totalAmount += amount(item.price);
    });

    let totDiscount = 0;
    items.forEach((item) => {
        totDiscount =
            amount(item.price) - total(item.price, item.discountPercentage);
    });

    const numberWithCommas = (number) => {
        return number.toLocaleString();
    };

    const amt = numberWithCommas(totalCartValue);
    const tot = numberWithCommas(totalAmount);
    const dis = numberWithCommas(totDiscount);
    const delivery = totalItems * 50;

    return (
        <div className="flex flex-row ]">
            <div className="flex flex-col bg-zinc-200 w-[1000px] ml-[140px] mr-20 ">
                {isEmpty ? (
                    <div className="flex flex-col items-center justify-center h-96">
                        {/* <img src="https://img.freepik.com/https://imghttps://images.creativefabrica.com/products/previews/2023/10/27/DopHxivj2/2XL09V68o6EpTcGq0JOTFmUGXtL-mobile.jpg.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?t=st=1708871988~exp=1708875588~hmhttps://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png?f=webpac=c58954032ef7b94876a598ed9a6b37b2eddcc965e7fb29e5a87fad273aeca74d&w=740premium-vector/girl-is-looking-empty-trolley_118167-11735.jpg?w=740" alt="Empty"
                        className="h-[300px] w-[300px] justify-center" /> */}
                        <div>
                            {" "}
                            <h1>Your cart is Empty </h1>
                        </div>
                    </div>
                ) : (
                    items.map((item) => (
                        <Link to={`/item/${item.id}`} state={{ data: item }}>
                            <div
                                key={item.id}
                                className="flex flex-row mb-3 h-[250px]"
                                style={{
                                    border: "1px solid #007bff",
                                    borderRadius: "0.25rem",
                                }}
                            >
                                <div className="flex flex-col ml-7">
                                    <div className="h-[200px] w-[200px] overflow-hidden mt-5">
                                        {
                                            item.images &&
                                            item.images.length > 0 ? (
                                                <>
                                                    <img
                                                        src={item.images[0]}
                                                        alt="poda"
                                                        className="h-[200px] w-[200px]  rounded-lg"
                                                    />
                                                    {console.log(
                                                        "this is " +
                                                            item.images[0] +
                                                            " avlo tha pa"
                                                    )}
                                                </>
                                            ) : (
                                                <h4>trial tha da</h4>
                                            )
                                            // console.log(item.images[0])
                                        }
                                    </div>
                                </div>

                                <div className="ml-10 mt-5 leading-[40px]">
                                    <div className="text-xl font-super-font">
                                        {" "}
                                        {item.title}{" "}
                                    </div>
                                    <div>
                                        {" "}
                                        <h5> {item.brand} </h5>
                                    </div>

                                    <div className="flex flex-row ">
                                        <div className=" mr-6">
                                            {" "}
                                            <b>
                                                {" "}
                                                ₹
                                                {total(
                                                    item.price,
                                                    item.discountPercentage
                                                )}{" "}
                                            </b>{" "}
                                        </div>
                                        <div style={{ color: "red" }}>
                                            {" "}
                                            <del>
                                                {" "}
                                                ₹{amount(item.price)}{" "}
                                            </del>{" "}
                                        </div>
                                    </div>

                                    <div style={{ color: "green" }}>
                                        {" "}
                                        <b>
                                            {item.discountPercentage}%off
                                        </b>{" "}
                                    </div>

                                    <div className="flex flex-row mt-5">
                                        <div className="flex flex-row bg-purple-500 rounded-lg mr-5 h-8 items-center">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/128/1672/1672241.png"
                                                alt="thunde"
                                                className="h-[20px] w-[30px] ml-4 mr-2"
                                            />
                                            <button className="text-white mr-6">
                                                Buy Now
                                            </button>
                                        </div>

                                        <div className="flex flex-row bg-purple-500 rounded-lg  h-8 items-center">
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/128/8997/8997755.png"
                                                alt="thunde"
                                                className="h-[20px] w-[20px] ml-4 mr-2"
                                            />
                                            <button
                                                className="text-white mr-6"
                                                onClick={() =>
                                                    handleRemoveItem(item.id)
                                                }
                                            >
                                                {" "}
                                                Remove Item{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* //dojo hb erhcf uoehcu */}
                            </div>
                        </Link>
                    ))
                )}
            </div>

            <div className="flex flex-col bg-zinc-200 w-[300px] mr-9 h-[300px] ">
                <div className="flex h-9 ">
                    <div className="ml-[100px] mt-1" style={{ color: "grey" }}>
                        {" "}
                        <b> Price Details </b>
                    </div>
                </div>

                <div className="flex flex-row ml-4 leading-10 mt-5">
                    <div className="flex flex-col">
                        <div>Price ({totalItems} items)</div>
                        <div>Discount</div>
                        <div>Delivey Charge</div>
                        <div className="mt-2">
                            <b>Total Amout</b>
                        </div>
                    </div>

                    <div className="flex flex-col ml-[40px]">
                        <div>
                            <b>₹{tot}</b>
                        </div>
                        <div>
                            <b style={{ color: "green" }}>-₹{dis}</b>
                        </div>
                        <div style={{ color: "green" }}>
                            {" "}
                            <del> {delivery}</del> <b>free</b>
                        </div>
                        <div className="mt-2">
                            {" "}
                            <b> ₹{amt}</b>
                        </div>
                    </div>
                </div>

                <div className="ml-5 mt-5 mb-3" style={{ color: "green" }}>
                    <b>You will save ₹{dis} on this order</b>
                </div>
            </div>
        </div>
    );
};

export default Cards_new;
