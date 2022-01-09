import './Rating.css';
import Start from '../Images/Start.svg' ;
import StarX from '../Images/StarX.svg';

const Rating = (props) => {
    let rate = Math.round(props.rates);
    let rest = 10 - rate;
    let starsArray = [];

for (let i = 0; i < rate; i++) {
    starsArray.push(<img src={Start} alt="Star" key={`${props.title} yellowStar ${i}`}/>);
}
for (let i = 0; i < rest; i++) {
    starsArray.push(<img src={StarX} alt="StarX" key={`${props.title} grayStar ${i}`}/>);
}
return (
    <div className="rating">
        {starsArray}
    </div>
)
}

export default Rating

// {rateArray.map((x, index) => (
//     <img key={`${props.title} ${index}`} src={Start} alt="Star"/>
// ))}
// {restArray.map((x, index) => (
//     <img key={`${props.title} ${index}`} src={StarX} alt="Star"/>
// ))}

