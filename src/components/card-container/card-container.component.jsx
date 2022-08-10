import './card-container.style.css'

const CardContainer = ({monster}) => {
    const {name, email, id} = monster;
    return(
        <div className='card-container' key={id}>
            {console.log(id)}
            <img 
                src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                alt={`Monster ${name}`} 
            />
            <h2>{name}</h2>
            <p>{email}</p> 
        </div>
    )
}

export default CardContainer;