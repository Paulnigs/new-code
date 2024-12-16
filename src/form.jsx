
const Form = () => {
    return ( 

        <div className="mt-5 py-10 ">
            <div className="pl-24">
                <h1 className="text-2xl font-bold">Sign-Up Form: Create Your Digital Self</h1>
                <p>Step into the future with Your personalized Digital self</p>
                <p>Tell us about You and pick a Date for your Customized Setup</p>
            </div> 
            <form action="" className="pl-20 m-4 border-2">

            <div>
                <h1 className="text-2xl font-bold">Personal Information:</h1>
                <div className="">
                    <label className="block text-xl">Full name: </label>
                    <input className="w-2/6 text-gray-700 shadow rounded border-2 border-black " type="text" placeholder="full name"></input>
                </div>   
                <div className="pt-5"> 
                    <label className="block text-xl">Email: </label>
                    <input className=" w-2/6  text-gray-700 shadow rounded border-black border-2" type="email" placeholder="email"></input>
                </div>  

                <div className="pt-5">
                    <label className="block text-xl">Phone Number: </label>
                    <input className="w-2/6 text-gray-700 shadow rounded border-2 border-black " type="number" placeholder="Phone number"></input>
                </div>    

                <div className="pt-5">
                    <h1 className="text-xl" >Preferred Contact Method</h1>
                    <input type="checkbox" name="email"></input>
                    <label className="pl-2" for="email">Email</label><br></br>
                    <input type="checkbox" name="number"></input>
                    <label className="pl-2" for="number">Number</label><br></br>
                    <input type="checkbox" name="whatsapp"></input>
                    <label className="pl-2" for="whatsapp">Whatsapp</label><br></br>   
                </div> 
            </div>

                

                <div className="pt-6">
                    <h1 className="text-2xl font-bold">Goals and Interests:</h1>

                    <div>
                            <label className="block py-2 text-xl" for="cars">What would you like to achieve with your Digital Self?:</label>
                        <select className="border-2 border-black w-2/6 rounded" >
                            <option value="volvo">Career Growth</option>
                            <option value="saab">Business Development</option>
                            <option value="fiat">Passive Income</option>
                            <option value="audi">Personal Branding</option>
                            <option>Others:</option>
                        </select>
                        <input className="block mt-3 w-2/6" type="text" placeholder="other"></input>
                    </div>

                    <div className="pt-5">
                        <h1 className="text-xl" >What tools or features are most important to you?</h1>
                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">Monetization Tools</label><br></br>

                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">AI-Powered Insights</label><br></br>

                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">Content Management</label><br></br>  

                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">Career Planning</label><br></br> 

                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">Networking Opportunities</label><br></br>  

                        <input type="checkbox" name=""></input>
                        <label className="pl-2" for="">Other</label><br></br>  
                    </div> 
                    

                </div>

                <div className="pt-5">
                    <h1 className="text-2xl font-bold">Subscription Plan</h1>
                    <p>Subscription Package: Pre-selected at $29/month for 2 years (70% discount).</p>
                </div>

                <div className="pt-5">
                <h1 className="text-2xl font-bold">Schedule Your Meeting:</h1>
                <p className="py-3">Choose your Preferred meeting date and time</p>
                <input type="date" /><br></br>
                <input type="datetime-local" /><br></br>
                </div>

                <div className="pt-5">
                    <h1 className="text-2xl font-bold">Payment Information</h1>
                    <p>Card details</p>
                    <input></input>
                </div>
            </form>
        </div>
     );
}
 
export default Form;