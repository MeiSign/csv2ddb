import React from "react";

interface InputProps {
    fileName?: String
}

class PreviewTable extends React.Component<InputProps> {
    render() {
        return (
            <div className="Preview-table" data-testid="preview-table">
                <h1>{this.props.fileName ?? "No file selected"}</h1>    
            </div>
        );
    }
}

export default PreviewTable;