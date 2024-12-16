const data = [
{   id: 1, 
    name: 'Amatip Basics', 
    pic: '/images/stud.jpg', 
    title: 'Learn the essentials of Amatip Digital Box to build your digital presence.', 
    rating: 'Rating: 5.0' 
},
  { id: 2, 
    name: 'Build brand awareness', 
    pic: '/images/studd.jpg', 
    title: 'Leverage the Amatip tools to enhance your brand visibility and trust.', 
    rating: 'Rating: 4.5' 
},
  { id: 3, 
    name: 'Drive Conversions', 
    pic: '/images/students.jpg', 
    title: 'Turn leads into loyal customers using our digital transformation strategies.', 
    rating: 'Rating: 4.0' 
},
  { id: 4, 
    name: 'Promote your app', 
    pic: '/images/stud.jpg', 
    title: 'Discover the best practices to market your app effectively with Amatip.', 
    rating: 'Rating: 4.0' 
},
  { id: 5, 
    name: 'Generate Leads', 
    pic: '/images/students.jpg', 
    title: 'Discover the best practices to market your app effectively with Amatip.', 
    rating: 'Rating: 4.0' 
},
];

const Card = ({ name, pic, title, rating }) => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={pic} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className='text-gray-600 py-3'>{rating}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  return (

    <div className="flex flex-wrap justify-center my-10">
      
      {data.map((person) => (
        <Card key={person.id} name={person.name} pic={person.pic} title={person.title} rating={person.rating} />
      ))}
    </div>
  );
};

export default CardList;
