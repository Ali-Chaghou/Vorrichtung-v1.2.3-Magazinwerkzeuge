import React from "react";
// import Loupe from '../Images/Searchloupe.svg';
import "./Searchbar.css";

class Searchbar extends React.Component {
    render() { 
        return <div>
             <form className='form-searchbar'>
                    <input type='text' id='input-search' className='input-search' ></input>
            </form>
        </div>;
    }
}
 
export default Searchbar;