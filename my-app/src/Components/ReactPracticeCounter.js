// ---- Counter ----
// import React, { Component } from "react";

// export default class Counter extends Component {
//   state = { count: 0 };

//   handleIncrement = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   handleDecrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleDecrement}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleIncrement}>+</button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

function ReactPracticeCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </div>
  );

}

export default ReactPracticeCounter