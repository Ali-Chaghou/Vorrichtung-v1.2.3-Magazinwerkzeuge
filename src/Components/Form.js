import "./Form.css";
import React from "react";

import Data from "../Data.js";

class Form extends React.Component {

    constructor() {
        super()

        this.state = {
              Data,
        }
    }


    NewTool = (e) => {
        e.preventDefault();
        let newTool = {
        title: document.querySelector("#title").value,
        year: document.querySelector("#year").value,
        typ: document.querySelector("#typ").value,
        articleNumber: document.querySelector("#articleNumber").value,
        maschine: [document.querySelector("#maschine").value],
        rate: document.querySelector("#rate").value,
        articleDescription: [document.querySelector("#articleDescription").value],
        crowd: document.querySelector("#crowd").value,
    };
    Data.push(newTool);
    this.setState({ Data });
    };

 
    render() { 
        return <section className="FormSection">
                 <div className="Formlogo"> 
                            <h4><i> Lege hier ein neues Werkzeug an</i></h4>
                            <p>Lorem1000 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                            </p>
                    </div> 
                  <div className="container">
                  <div className="login">
                    <form className="createNewTool">
                      <div className="fade-box">
                            <input type="text" id="title" placeholder="Benennung" />
                            <input type="text" id="year"  placeholder="Herstellungsjahr"/>
                            <input type="text" id="typ" placeholder="Typ z.b Vorrichtung"/>
                            <input type="text" id="articleNumber" placeholder="Artikelnummer"/>
                            <input type="text" id="maschine" placeholder="Maschinennummer" />
                            <input type="number" id="rate"  placeholder="Zustand"/>
                            <input type="text" id="articleDescription" placeholder="Artikel verknüpfung" />
                            <input type="text" id="crowd"  placeholder="Stückzahl"/>
                      </div>
                   

                        <button  onClick={this.NewTool}>Werkzeug anlegen</button>
                     </form> 
                     </div>     
                    
                </div>        
              </section>;
    }
}
 
export default Form;