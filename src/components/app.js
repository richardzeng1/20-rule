import React from "react";
import Timer from "./timer";
import ImageDisplay from "./image_display";

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageDisplay />
        <Timer />
      </div>
    );
  }
}

export default App;
