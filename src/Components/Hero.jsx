
const Hero = () => {
    return ( 
        <div
                className="h-[800px] bg-cover bg-center bg-black bg-opacity-50 mb-12"
                style={{ backgroundImage: "url('/images/pic24.jpg')" }}
        >
            <div className="text-center">
                    <h1 className="uppercase text-6xl text-white font-bold pt-32">Amatip digital box</h1>
                    <h1 className=" text-white text-3xl font-semibold py-6">Your digital Transformation</h1>
                   <p className=" text-white text-2xl">Tools to build, grow and thrive</p>
            </div>

            <div className="text-center mt-12">
                <button className="bg-white rounded-md mx-5 px-5 py-2 text-black hover:bg-slate-200">Get Started</button>
                <button className="bg-white rounded-md mx-5 px-5 py-2 text-black hover:bg-slate-200">Book Consultation</button>
            </div>
           
        </div>
        

)};
 
export default Hero;