const Login = (props) => {
    return ( 
        <div className="bg-teal-500 items-center">
            <h1 className="text-white text-center">Log In</h1>
            <form  className="flex justify-center">
                <div className="text-center pt-10 pb-20 mt-40">
                    <input className="mt-5 h-8 bg-black text-white rounded-sm border-2 placeholder-teal-500" type="text" placeholder="username" /><br></br>
                    <input className="my-5 h-8 bg-black text-white rounded-sm border-2" type="password" placeholder="password" /><br />
                    
                    <input className="mb-5 h-8 bg-black text-white rounded-sm border-2" type="password" placeholder="confirm password" /><br />
                    
                    <button className="px-[66px] h-8 bg-white rounded hover:bg-transparent hover:border-2 hover:text-white">
                        {props.isRegistered ? "Login" : "Register"}
                    </button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;