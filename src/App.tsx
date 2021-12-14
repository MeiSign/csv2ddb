import React from 'react';
import './App.css';
import FileSelector from './FileSelector';
import Preview from './Preview';
import CsvFileReader from "./CsvFileReader";

interface State {
  csvFile?: File
  csvLines: string[][]
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      csvFile: undefined,
      csvLines: []
    }
  }

  handleFile(file: File) {
    this.setState({ csvFile: file })
    const reader = new CsvFileReader()
    reader.readCsv(file).then(res => {
      console.log(res)
      this.setState({ csvLines: res})
    }).catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div className="App">
        <FileSelector onChange={(file: File) => this.handleFile(file)} />
        <Preview file={this.state.csvFile} csvLines={this.state.csvLines}/>
      </div>
    );
  }
}

export default App;
