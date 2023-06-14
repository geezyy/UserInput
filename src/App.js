// importing all required components
import React, { Component } from "react";
import Output from "./Output";

class App extends Component {
  state = {
    users: [{ username: "Geezzy" }],
  };

  nameChangeHandler = (e) => {
    this.setState({
      users: [{ username: e.target.value }],
    });
  };

  render() {
    return (
      <div className="App">
        {/*UserInput and userOutput is rendered  */}
        <div>
          {/* Rendering the username props */}
          <Output
            user={this.state.users[0].username}
            change={this.nameChangeHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
