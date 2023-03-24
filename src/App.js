// *---VERY EASY:---*

// import { render } from "@testing-library/react";

// import React from "react";

// function App() {
//   render ();
//     return (
//       <div>
//         <h1>Name: Joseph</h1>
//         <p>Number: 704-999-2323</p>
//         <p>Date of Birth: August 13, 1999</p>
//       </div>
//     );
// }

// export default App;

// *--OR--*

  // class App extends Component {
  //   render(){
  //     return(
  //     <div className="App">
  //       <ul>
  //         <li> name: Joseph </li>
  //         <li> Number: 704-999-2323</li>
  //         <li> Date of Birth: August 13, 1999</li>
  //       </ul>
  //     </div>
  //     )
  //   }
  // }



// *---EASY:---*

// import React from "react";
// import { Component } from "react"; //specific items from a library

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//    };
//   }

//   render() {
//     return(
//       <div>
//         <h1>Name: {this.state.person.name}</h1>
//         <p>Number: {this.state.person.number}</p>
//         <p>Date of Birth: {this.state.person.dateOfBirth}</p>
//       </div>
//     );
//   }
// }

// export default App;

// *--OR--*

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//       }
//     }
//   } 
// }



// *---MEDIUM:---*

// import React from "react";
// import { Component } from "react";
// import BasicInfo from "./Component/BasicInfo";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {
//         name: 'Joseph',
//         number: '704-999-2323',
//         dateOfBirth: 'August 13, 1999'
//       }
//     };
//   }

//   render() {
//     return(
//       <BasicInfo
//       name = {this.state.person.name}
//       number = {this.state.person.number}
//       dateOfBirth = {this.state.person.dateOfBirth}
//       />
//     );
//   }
// }

// export default App;



// *--HARD--*

import React from "react";
import { Component } from "react";
import BasicInfo from "./Component/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Joseph Vang',
          number: '704-999-2323',
          dateOfBirth: 'August 13, 1999'
        },
        {
          name: 'Khu Vang',
          number: '980-698-0604',
          dateOfBirth: 'December 1, 1999'
        },
        {
          name: 'John Wick',
          number: '704-123-9876',
          dateOfBirth: 'April 1, 1970'
        }
      ]
    };
  }

  render() {
    const BasicInfo = this.state.people.map((person, index) => {
      return(
        <div key={index}>
          <BasicInfo
            name = {person.name}
            number = {person.number}
            dateOfBirth = {person.dateOfBirth}
          />
          <hr />
        </div>
      );
    });
    return
  }
}

export default App