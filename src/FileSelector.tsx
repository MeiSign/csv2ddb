import React from "react";

interface InputProps {
    onChange: (file: File) => void;
}

class FileSelector extends React.Component<InputProps> {
    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files != null) {
            this.props.onChange(event.target.files[0])
        }
    }

    render() {
        return (
            <div className="File-selector" data-testid="file-selector">
                <input type="file" data-testid="file-input" accept=".csv" onChange={(event) => this.onChange(event)} />
            </div>);
    }
}

export default FileSelector;