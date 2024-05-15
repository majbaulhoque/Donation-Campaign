
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[400px]">
        <div className="text-center">
            <h3 className="text-4xl text-black font-bold">I Grow By Helping People In Need</h3>
            <div className="flex w-96 bg-white items-center justify-center text-center mt-4 shadow-md">
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="w-full border-none bg-transparent px-4 py-1 text-black outline-none focus:outline-none rounded-md"
                />
                <div className="flex items-center justify-center ml-2">
                    <button className="bg-[#DF3B41] px-4 py-3 text-white text-base">Search</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;