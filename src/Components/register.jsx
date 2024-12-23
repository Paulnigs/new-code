import { useState } from "react";
const Register = () => {
    const [count, setCount] = useState(0);

    function Increase () {
        setCount(count + 1);
    }
    function Decrease (){
        setCount(count - 1);
    }
    return ( 

        <div className="bg-teal-500 mt-20 text-center">
            <h1>{count}</h1>
            <button onClick={Increase}>+</button>
            <button className="ml-2" onClick={Decrease}>-</button>
        </div>
    );
}
 
export default Register;