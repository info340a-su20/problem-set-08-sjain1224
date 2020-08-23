import React, { Component } from 'react'; //import React Component
import "./style.css";
import _ from 'lodash'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pets: this.props.pets
    }

  }

  adopt = (petName) => {
    this.setState((currentState) => {
      let petNeeded = _.find(currentState.pets, ['name', petName]);
      petNeeded.adopted = true;
      return currentState.pets;
    })
  }

  render() {

    let breedKeys = _.groupBy(this.props.pets, 'breed');
    let breedsArray = Object.keys(breedKeys);

    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={breedsArray}/>
              <AboutNav />
            </div> 

            <div id="petList" className="col-9">
              <PetList pets={this.state.pets} whenClicked={this.adoptCallback}/>

            </div>
          </div> 
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>
    );
  }
}

export default App;

class AboutNav extends Component{
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }
}

class BreedNav extends Component {

  render() {
    let breedsForNav = this.props.breeds.map((breedName) => {
      let breedNav = <li key={breedName}><a href="">{breedName}</a></li>;
      return breedNav;
    })

    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breedsForNav}
        </ul>            
      </nav>
    );
  }
}

class PetCard extends Component {

  handleClick = () => {
    this.props.adoptCallback(this.props.aPet.name);
  }

  render() {

    let nameOfPet = this.props.aPet.name;
    if (this.props.aPet.adopted === true){
      nameOfPet = nameOfPet + " (Adopted)"
    }

    return (
      <div className="card" onClick={this.handleClick}>
        <img className="card-img-top" src={this.props.aPet.img} alt={this.props.aPet.name} />
        <div className="card-body">
          <h3 className="card-title">{nameOfPet}</h3>
          <p className="card-text">{this.props.aPet.sex + " " + this.props.aPet.breed}</p>
        </div>
      </div>
    );
  }
}

class PetList extends Component {

  render() {

    let allDogs = this.props.pets.map((eachPet) => {
      let singlePet = <PetCard aPet={eachPet} key={eachPet.name} adoptCallback={this.props.whenClicked}/>;
      return singlePet;
    })

    return (
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {allDogs}
        </div>
      </div>
    );
  }
}
