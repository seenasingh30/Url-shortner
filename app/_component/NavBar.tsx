

const NavBar = () => {
    return (
        <section className="navbar">
            <div className="container grid grid-cols-3 items-center py-2">
                <div className="logo">
                    <h2 className="p-2 font-bold text-xl text-green-800">Url<span className="text-red-800" >Shortner</span></h2>
                </div>
                <div className="menu flex justify-center">
                    <ul className="flex p-2 mx-2 space-x-4 text-gray-600 font-semibold text-lg">
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div className="flex justify-end space-x-2 mr-2">
                    <button className="btn font-semibold p-2 border-red-500 border-opacity-100">Login</button>
                    <button className="btn bg-green-800 text-white font-semibold p-2 rounded-md">Sign Up</button>
                </div>
            </div>
        </section>
    );
}

export default NavBar;