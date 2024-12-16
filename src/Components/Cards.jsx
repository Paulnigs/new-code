import emojipedia from './emojipedia'


const Card = (props) => {
    return (
        <div className='grid col-span-3'>
            <div className='w-[350px] bg-slate-300 shadow-sm my-12 ml-12'>
                <h1 className='py-4 text-6xl flex justify-center'>{props.name}</h1>
                <h1 className='text-4xl font-bold flex justify-center'>{props.title}</h1>
                <p className='flex justify-center p-10'>{props.meaning}</p>            
            </div>
        </div>
      );
}
 
export default Card;