

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto container">
            <div className="lg:flex  mt-6">
                <div className="flex-[1] my-5">
                    <h1 className="text-4xl">Quality Cleaning for your home</h1>
                    <p className="font-serif mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci temporibus obcaecati vero deserunt, atque nemo! Consectetur impedit architecto esse magnam reiciendis harum animi itaque, ipsum molestiae porro mollitia sit?</p>
                    <div className="flex gap-4 mt-10">
                        <div className="avatar-group -space-x-6 mr-5">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/sFS7xyv/fashion-boy-with-yellow-jacket-blue-pants.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/sFS7xyv/fashion-boy-with-yellow-jacket-blue-pants.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/sFS7xyv/fashion-boy-with-yellow-jacket-blue-pants.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/sFS7xyv/fashion-boy-with-yellow-jacket-blue-pants.jpg" />
                                </div>
                            </div>

                           

                        </div>
                        <div className="rating rating-md mt-2">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                    </div>
                </div>
                <div className="flex-[1] rounded-md overflow-hidden ">
                    <img src="https://i.ibb.co/nfHFHz1/5056193-52864.jpg" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Home;