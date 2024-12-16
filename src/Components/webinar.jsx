const web = [
{
    id: '1',
    date: 'Dec 15 - 10:00 AM - EST',
    day: 'In 3 Days',
    title: 'Digital Transformation and Monetization Strategies',
    name: 'Presenter: Joe Biden',
},

{
    id: '2',
    date: 'Dec 19 - 10:00 PM - EST',
    day: 'In 6 Days',
    title: 'Building Your Digital Identity with Amatip Box',
    name: 'Presenter: Kamala Harris',
},

{
    id: '2',
    date: 'Dec 20 - 12:00 PM - EST',
    day: 'In 10 Days',
    title: 'Building Your Digital Identity with Amatip Box',
    name: 'Presenter: Rishi Sunak',
},
];

const Card = ({ date, day, title, name }) => {
    return ( 
        <div className=" rounded-sm overflow-hidden shadow-lg bg-gray-100  md:ml-20 mx-4 my-4 p-3 ">
            <h1>{date}</h1>
            <p className="text-purple-400">{day}</p>
            <h1 className="py-2">{title}</h1>
            <p>{name}</p>
            <button className="bg-purple-400 rounded-md px-4 py-2 text-white border-none mt-4 hover:bg-purple-500">Enroll Now</button>
        </div>
     );
}
 

const Webinar = () => {
    return ( 
        <div className="flex flex-wrap justify-start bg-purple-400 py-10 my-10 ">
            {web.map((Person) => (
                <Card key={Person.id} date={Person.date} day={Person.day} title={Person.title} name={Person.name} />
            ))}
        </div>
     );
}
 
export default Webinar;