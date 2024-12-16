import { useState } from "react";

const Navbar = () => {
    const [name, setName] = useState('Garnacho');

    const handleClick = () => {

        setName('Diallo');
    }
    return (
        <nav className="bg-slate-100 flex justify-between py-6">
            <div className="pl-40 uppercase font-bold text-2xl text-teal-400">CRYPT</div>
            <div className="links pt-2">
                <ul className="flex gap-10">
                    <li><a className="" href="/">Home</a></li>
                    <li><a className="hover:text-teal-400" href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">{ name }</a></li>
                </ul>
            </div>
            <div className="pr-40 mt-1 flex gap-5">
                <button onClick={handleClick} className="bg-teal-400 py-1 px-3 rounded-md text-white hover:bg-teal-500">Sign up</button>
                <button onClick={handleClick} className="border-2 border-teal-400 py-1 px-3 rounded-md text-teal-400 hover:bg-teal-400 hover:text-white hover:border-2">Log in</button>
            </div>
        </nav>
    );
}
 
export default Navbar;