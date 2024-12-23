const data = [{id: '1', type:'text', placeholder: 'Username'},
            {id: '2', type: 'password', placeholder: 'Password'},
            {id: '3', type: 'password', placeholder: 'Confirm Password'}

]

const Card = ({type, placeholder}) => {
    return ( 
        <div className="bg-slate-200">
        <input className="mt-5 h-8 bg-black text-white rounded-sm border-2 placeholder-white" type={type} placeholder={placeholder} /><br></br>
        </div>
     );
}

const Form = () => {
    return ( 
        data.map((person) =>(
                <Card id={data.id} type={data.type} placeholder={data.placeholder} />
        )
    ));}
 
export default Form;