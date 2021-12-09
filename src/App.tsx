import React from 'react';
import './App.css';
import FileSelector from './FileSelector';
import Preview from './Preview';

interface State {
  csvFile?: File
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      csvFile: undefined
    }
  }

  handleFile(file: File) {
    this.setState({csvFile: file})
  }

  render() {
    return (
      <div className="App">
        <FileSelector onChange={(file: File) => this.handleFile(file)}/>
        <Preview file={this.state.csvFile}/>
      </div>
    );
  }
}

export default App;
