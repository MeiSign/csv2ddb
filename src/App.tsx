import React from 'react';
import './App.css';
import FileSelector from './FileSelector';
import PreviewTable from './PreviewTable';

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
        <PreviewTable fileName={this.state.csvFile?.name}/>
      </div>
    );
  }
}

export default App;
