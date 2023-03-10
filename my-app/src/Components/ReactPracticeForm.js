// ---- Form ----
// import React, { Component } from "react";

// export default class Form extends Component {
//   state = {
//     name: "",
//     surname: ""
//   };

//   handleInputChange = event => {
//     const { target } = event;
//     const { value } = target;
//     const { name } = target;

//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, surname } = this.state;
//     const result = `Hi ${name} ${surname}`;
//     alert(result);
//   };

//   render() {
//     const { name, surname } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Surname:
//           <input
//             type="text"
//             name="surname"
//             value={surname}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

import React, { useState } from "react";

function ReactPracticeForm() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );

}

export default ReactPracticeForm

