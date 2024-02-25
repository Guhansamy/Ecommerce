import { Link } from "react-router-dom";

const Subheader = () => {

    return (
        <div className="flex justify-center items-center bg-white w-11/12 rounded-2xl mb-4">

                <div className="flex h-[120px] w-11/12 bg-white mb-5 items-center justify-between rounded-2xl">

                    <Link to= "/smart-phone/" >
                        <div className="flex flex-col" >
                            <img src='https://img.freepik.com/premium-photo/mobile-phone-isolated-white-background-with-sample-app-icons-back-view-with-camera-lenses_746318-511.jpg?w=996' 
                            className="h-[90px] w-[90px]"/>
                            <div className=" flex font-light justify-center"> Mobiles</div>
                        </div>
                    </Link>

                    <Link to= "/laptops/" >
                        <div className="flex flex-col" >
                            <img src='https://img.freepik.com/free-psd/elegant-computer-mockup_1310-736.jpg?w=996&t=st=1703353386~exp=1703353986~hmac=f003d3893a72ddac5cd8428c168c67f3daaba4a9a4eb3e8456c46a73e3ee762a' 
                            className="h-[90px] w-[90px]"/>
                            <div className=" flex font-light justify-center"> Laptops</div>
                        </div>
                    </Link>

                    <Link to= "/fragrance/" >
                    <div className="flex flex-col" >
                        <img src='https://img.freepik.com/free-vector/blue-glass-spray-bottle_88138-34.jpg?1&w=740&t=st=1708748088~exp=1708748688~hmac=5f2f018e382bc77579270d5b2350d36449a95ced962d8c6984d1f353a1411000' 
                        className="h-[70px] w-[70px]"/>
                        <div className=" flex font-light justify-center"> Fragrances </div>
                    </div>
                    </Link>

                    <Link to= "/grocieries/" >
                    <div className="flex flex-col" >
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIrgSZwyWF5OlRFGuI6v3esjfYoIieYOr0-NLT1CoaQ&s' 
                        className="h-[90px] w-[90px]"/>
                        <div className=" flex font-light justify-center"> Groceries </div>
                    </div>
                    </Link>

                    <Link to= "/skin-care/" >
                    <div className="flex flex-col" >
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoY7klQ_5mstsj2LWZUlbexVcQ3qJ5c9Kv_Ohq97jCg&s' 
                        className="h-[75px] w-[75px]"/>
                        <div className=" flex font-light justify-center"> Skin Care </div>
                    </div>
                    </Link>

                </div>

        </div>

    )

}

export default Subheader;