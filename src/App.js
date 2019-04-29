import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/lib/FormGroup";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";

const marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  };

  updateMarkdown = function(markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div>
        <div id="FormCon">
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel id="App">
              <h1>Markdown Input</h1>
            </ControlLabel>

            <FormControl
              style={{ height: "200px", width: "210vh" }}
              componentClass="textarea"
              placeholder="Enter Markdown"
              value={markdown}
              onChange={event => this.updateMarkdown(event.target.value)}
            />
          </FormGroup>
        </div>

        <div className="App-header">
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
      </div>
    );
  }
}

export default App;
