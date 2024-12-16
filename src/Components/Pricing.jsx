const web = [
{
    id: '1',
    name: 'Basic',
    title: 'Perfect for beginner to establish an online presence',
    price: '$9.99/month',
},

{
    id: '2',
    name: 'Premium',
    title: 'Perfect for professional to monitize their digital presence',
    price: '$29.99/month',
},

{
    id: '3',
    name: 'Enterprise',
    title: "Ideal for businesses and organization's all round growth",
    price: '$9.99/month',
},
];

const Card = ({ name, title, price, }) => {
    return ( 
        <div className=" text-center rounded-sm overflow-hidden shadow-lg bg-gray-100  md:ml-20 mx-4 my-4 py-8 px-3 ">
            <h1 className="font-semibold text-xl">{name}</h1>
            <p className="text-purple-400">{title}</p>
            <h1 className="text-2xl py-3">{price}</h1>
            <button className="bg-purple-400 rounded-md px-4 py-2 text-white border-none mt-4 hover:bg-purple-500">Choose {name}</button>
        </div>
     );
}
 

const pricing = () => {
    return ( 
        <div className="flex flex-wrap justify-between bg-purple-400 py-10 my-10 ">
            {web.map((Person) => (
                <Card key={Person.id}  name={Person.name} title={Person.title} price={Person.price} />
            ))}
        </div>
     );
}
 
export default pricing;