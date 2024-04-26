import './card.css';

function Card(){
    return(
        <div className="card">
            <img className="card-image"src="https://picsum.photos/200" alt="A random image generated" />
            <h2 className='card-title'>Steph</h2>
            <p className='card-text'>Software Developer</p>
        </div>
    );
}

export default Card