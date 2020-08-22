import React, { Component } from 'react'; //import React Component
import { render } from 'react-dom';

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends Component {
  render(){

    let listOfSenators = this.props.senators;

    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={listOfSenators}/>
      </div>
    );
  }
}

export class SenatorTable extends React.Component {
  render() {
    let tableClasses = 'table table-bordered';
    let colHeaders = ['Name', 'State', 'Phone', 'Twitter'];
    let allSens = this.props.senators.map((eachSen) => {
        let oneRow = <tbody key={eachSen.id}><SenatorRow senator={eachSen}/></tbody>
      return oneRow;
    })

    let tableElem = (
      <table className={tableClasses}>
        <TableHeader cols={colHeaders} />
        {allSens}
      </table>
    );

    return tableElem;
  }
}

export class TableHeader extends React.Component {
  render() {

    let headerNames = this.props.cols.map((hName) => {
      let colName = <th key={hName}>{hName}</th>;
      return colName;
    })

    let tabHeaders = (
      <thead>
        <tr>
          {headerNames}
        </tr>
      </thead>
    );

    return tabHeaders;
  }
}

export class SenatorRow extends React.Component {

  render() {
    let singSenator = this.props.senator;

    let senRow = (
      <tr>
        <td>{singSenator.name}</td>
        <td>{singSenator.party[0] + ' - ' + singSenator.state}</td>
        <td><a href={'tel:' + singSenator.phone}>{singSenator.phone}</a></td>
        <td><a href={'https://twitter.com/' + singSenator.twitter}>{'@' + singSenator.twitter}</a></td>
      </tr>
    );

    return senRow;
  }
}