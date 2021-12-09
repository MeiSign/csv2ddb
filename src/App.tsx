import React from 'react';
import './App.css';
import FileSelector from './FileSelector';
import PreviewTable from './PreviewTable';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FileSelector/>
        <PreviewTable/>
      </div>
    );
  }
}

export default App;
