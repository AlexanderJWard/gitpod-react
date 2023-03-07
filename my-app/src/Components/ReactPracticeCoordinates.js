// ---- Coordinates ----

// import React, { Component } from "react";

// export default class Coordinates extends Component {
//   state = { x: 0, y: 0 };

//   componentDidMount() {
//     window.addEventListener("mousemove", this.handleMouseMove);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("mousemove", this.handleMouseMove);
//   }

//   handleMouseMove = event => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>
//           {this.state.x} - {this.state.y}
//         </p>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";

function ReactPractiseCoordinates() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const handleMouseMove = (e) => {
    setX(x => e.clientX);
    setY(y => e.clientY);

  }

  useEffect(
    () => {
      // window.addEventListener("mousemove", (e) => setX(x => e.clientX));
      // window.addEventListener("mousemove", (e) => setY(y => e.clientY));
      window.addEventListener("mousemove", handleMouseMove);
      console.log("Component mount")
      return () => {
        // window.removeEventListener("mousemove", (e) => setX(x => e.clientX));
        // window.removeEventListener("mousemove", (e) => setY(y => e.clientY));
        window.removeEventListener("mousemove", handleMouseMove);
        console.log("Component unmount")
      }
    }, []
  )

  return (
    <div>
      <p>
        {x} - {y}
      </p>
    </div>
  );
}

export default ReactPractiseCoordinates
