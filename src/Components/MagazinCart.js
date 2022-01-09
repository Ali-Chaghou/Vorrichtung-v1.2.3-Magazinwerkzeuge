import './MagazinCart.css';
import Rating from './Rating';


const MagazinCart = (props) => {
    return (
        <article>
            <div className='ImgBx'>
               <img src={props.image_url} alt="Image"/>
            </div>
            <h2>Benenung.: <span> {props.title}</span></h2>
            <p>Datum.:<span> {props.year}</span></p>
            <p>Typ.:<span> {props.typ}</span></p>
            <p>Werkzeug-ID.: <span> {props.articleNumber}</span></p>
            <p>Menge.: <span> {props.crowd}</span> Stück</p>
            <p className='underline'>Verknüpfte Artikel</p>
            {props.articleDescriptions.map((articleDescription, index) =>(
             <p className="genres" key={`${props.title} articleDescription ${index}`}>{articleDescription}</p>
            ))}
            <Rating rates={props.rates} title={props.title}/>
            <p className='underline'>Maschinen Nummer</p>
            {props.maschinen.map((maschine, index) =>(
             <p className="genres" key={`${props.title} maschinen ${index}`}>{maschine}</p>
            ))}
        </article>
    )
}

export default MagazinCart
