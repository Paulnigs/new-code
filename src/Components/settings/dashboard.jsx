import { FiSearch } from "react-icons/fi";
import Password from './password';

import Notification from './notification';
import Authentication from './authentication';
import Personalization from './personalization';
import Payment from './payment';
const dashboard = () => {
    return ( 
        <div className="bg-white shadow rounded-lg pb-4">
            <div>
            <h1 className="text-3xl font-bold mb-6 border-b-2 pt-10 pl-28">My Settings</h1>
            <FiSearch classname="mr-2 text-2xl" />
            <div className="flex flex-wrap gap-10 pl-28">
                <button className="px-4 py-2 bg-purple-400 text-white hover:text-black hover:bg-transparent rounded-lg hover:border-b-2  ">Password Subscription</button>
                <button className="px-4 py-2 bg-purple-400 text-white hover:text-black hover:bg-transparent rounded-lg hover:border-b-2  ">2FA</button>
                <button className="px-4 py-2 bg-purple-400 text-white hover:text-black hover:bg-transparent rounded-lg hover:border-b-2  ">Notification</button>
                <button className="px-4 py-2 bg-purple-400 text-white hover:text-black hover:bg-transparent rounded-lg hover:border-b-2  ">Subscription and Payment</button>
                <button className="px-4 py-2 bg-purple-400 text-white hover:text-black hover:bg-transparent rounded-lg hover:border-b-2  ">Personalization</button>
            </div>
        
            </div>
            <Password />
            <Authentication />
            <Notification />
            <Payment />
            <Personalization />
        
        </div>
     );
}
 
export default dashboard;