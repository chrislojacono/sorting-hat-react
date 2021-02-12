import React from 'react';
import JumbotronComponent from '../Jumbotron';
import InputComponent from '../Input';

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
    const { showInput } = this.state;
    return (
      <div className="App d-flex justify-content-center flex-column">
        <JumbotronComponent jumbotronButton={this.jumbotronButtonClick}/>
       {showInput && <InputComponent/>}
      </div>
    );
  }
}

export default App;
