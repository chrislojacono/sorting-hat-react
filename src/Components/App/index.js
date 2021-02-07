import React from 'react';
import JumbotronComponent from '../Jumbotron';

class App extends React.Component {
  state = {
    showInput: false,
  }

  jumbotronButtonClick = () => {
    this.setState({
      showInput: !this.state.showInput,
    });
  }

  render() {
    return (
      <div className="App d-flex justify-content-center">
        <JumbotronComponent jumbotronButton={this.jumbotronButtonClick}/>
      </div>
    );
  }
}

export default App;
