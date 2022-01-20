import './MagazinCart.css';
import "./Animation.css";
import Rating from './Rating';

//Logo IMG
import Logo from "../Images/Logo.jpg";


const MagazinCart = (props) => {
    return (
        <article >
         
                <div className='logo ImgBx'>
                     <img src={Logo} alt='logo' className='Logo'/>
                     <img src={props.image_url} alt='img' className='Werkzeug'/>
                     <p className='ID-Number'> <span> {props.articleNumber}</span></p>
                </div>
                <h2 className='title'> <span> {props.title}</span></h2>
                <div className='rating'>
                    <Rating rates={props.rates} title={props.title}/>
                </div>
                <div className='cardBody'>

                    <div className='Date-Typ-Pcs'>
                        <p className='Left-to-right '>Datum<span> {props.year}</span></p>
                        
                        <p className='Left-to-right '>Typ<span> {props.typ}</span></p>
                        
                        <p className='Left-to-right '>Menge<span> {props.crowd} pcs</span> </p>
                    </div>

                    <div className='articleDescription'>
                        Verknüpfte Artikel
                        {props.articleDescriptions.map((articleDescription, index) =>(
                        <p className="genres" key={`${props.title} articleDescription ${index}`}><span>{articleDescription}</span></p>
                        ))}
                    </div>

                    <div className='maschine'>
                        Maschinennummern
                        {props.maschinen.map((maschine, index) =>(
                        <p className="genres" key={`${props.title} maschinen ${index}`}><span>{maschine}</span></p>
                        ))}
                    </div>

                </div>
        </article>
        
    )
}

export default MagazinCart
