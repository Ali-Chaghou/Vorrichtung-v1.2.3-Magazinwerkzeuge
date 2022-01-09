import React from 'react';
import MagazinCart from './Components/MagazinCart';
import Data from "./Data.js";
import './App.css';


class App extends React.Component {

    constructor() {
        super()

        this.state = {
              Data,
        }
    }

    Ascending = () => {
            
        this.state.Data.sort(function (a, b) {
            return a.year - b.year;
          });
          this.setState(this.state.Data);
    }

    Descending = () => {

        this.state.Data.sort(function (a,b) {
            return b.year - a.year;
        });
        this.setState(this.state.Data);
    }

    Rate = () => {

        this.state.Data.sort(function (a,b) {
            return a.rate - b.rate;
        });
        this.setState(this.state.Data);
    }

    sortAZ = () => {
        let collator = new Intl.Collator(undefined, {
          numeric: true,
          sensitivity: "base",
        });
        this.setState(
          this.state.Data.sort(function (a, b) {
            return collator.compare(a.title, b.title);
          })
        );
      };
      //Test
      //Funktion in JS:


    //   let collator = new Intl.Collator(undefined, {
    //           numeric: true,
    //           sensitivity: "base",
    //         });
    //         numArray = numArray.sort(function (a, b) {
    //           return collator.compare(a.title, b.title);
    //         });


      //Weitere Funktion ohne Collator !!! Vereinfacht :)

    // AZ = () => {
        
    //     this.state.Data.sort(function(a, b){
    //         if(a.title < b.title) { return -1; }
    //         if(a.title > b.title) { return 1; }
    //         return 0;
    //     })
    //     this.setState(this.state.Data);
    //     console.log(this.state.Data);
    // }
    
    ZA = () => {
        
        this.state.Data.sort(function(a, b){
            if(a.title > b.title) { return -1; }
            if(a.title < b.title) { return 1; }
            return 0;
        })
        this.setState(this.state.Data);
        console.log(this.state.Data);
    }


    Searchbar = () => {
        let searchInput = document.querySelector("input").value.toUpperCase();
        let searching = Data.filter((movie) => movie.title.toUpperCase().includes(searchInput));
        this.setState({Data: searching});
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

    filterGenre = (event) => {
        this.setState({
        Data: Data.filter((magazin) => magazin.maschine.includes(event.target.value)),
        });
    };
    filterGenreLink = (event) => {
        this.setState({
        Data: Data.filter((magazin) =>
            magazin.maschine.includes(event.target.innerText)
        ),
        });
    };

 
    render() { 
        return <main>

            <div className="MD-Header">

                <div className="MD-Input">
                    <input type="text" onChange={this.Searchbar} placeholder="Gib hier ein title ein"></input>
                </div>

                <div className="MD-Button">
                    <button onClick={this.Ascending}>Datum aufsteigend</button>
                    <button onClick={this.Descending}>Datum absteigend</button>
                    <button onClick={this.Rate}>Schlechtester Zustand</button>
                    <button onClick={this.sortAZ}>A-Z</button>
                    <button onClick={this.ZA}>Z-A</button>
                </div>

                <div>
                    <select id="genreSelect" onChange={this.filterGenre} defaultValue="Genre">
                        <option disabled>Maschinen-Nr</option>
                        <option value="1149">1149</option>
                        <option value="1150">1150</option>
                        <option value="1157">1157</option>
                        <option value="1159">1159</option>
                        <option value="7177">7177</option>
                        <option value="7179">7179</option>
                        <option value="1149">4191</option>
                        <option value="1150">4193</option>
                        <option value="1157">4194</option>
                        <option value="1159">4195</option>
                        <option value="7177">4196</option>
                        <option value="7179">4197</option>
                        <option value="1149">4180</option>
                        <option value="1150">4181</option>
                        <option value="1157">4182</option>
                        <option value="1159">4183</option>
                        <option value="7177">4184</option>
                        <option value="7179">4185</option>
                     </select>
                </div>
                </div>
                <form>
                    <h2 className="CreateMovieText">Lege eine neue Vorrichtung an</h2>
                    

                    <input type="text" id="title" placeholder="Benennung" />
                    <input type="text" id="year"  placeholder="Herstellungsjahr"/>
                    <input type="text" id="typ" placeholder="Typ z.b Vorrichtung"/>
                    <input type="text" id="articleNumber" placeholder="Artikelnummer"/>
                    <input type="text" id="maschine" placeholder="Maschinennummer" />
                    <input type="number" id="rate"  placeholder="Zustand"/>
                    <input type="text" id="articleDescription" placeholder="Artikel verknüpfung" />
                    <input type="text" id="crowd"  placeholder="Stückzahl"/>


                    <button  onClick={this.NewTool}>Werkzeug anlegen</button>
               </form>   
      

            <section>
                {this.state.Data.map((magazin, index) => (
                 <MagazinCart 
                    key={`Magazin ${index}`}
                    image_url={magazin.image_url}
                    title={magazin.title}
                    year={magazin.year}
                    typ={magazin.typ}
                    articleNumber={magazin.articleNumber}
                    crowd={magazin.crowd}
                    articleDescriptions={magazin.articleDescription}
                    rates={magazin.rate}
                    maschinen={magazin.maschine}
                    filterFunction={(event) => this.filterGenreLink(event)}
                    />
                ))}
            </section>
        </main>
      
    }
}
 
export default App;



