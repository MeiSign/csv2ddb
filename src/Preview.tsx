import React from "react";

interface InputProps {
    file?: File
}

class Preview extends React.Component<InputProps> {
    render() {
        return (
            <div className="Preview-table" data-testid="preview-table">
                <h1>{this.props.file?.name ?? "No file selected"}</h1>
                <PreviewTable file={this.props.file}/>
            </div>    
        );
    }
}

function readPreviewData(file: File): Array<Array<String>> {
    return [
        ["A", "B", "C", "D", "E", "F"], 
        ["1", "2", "3", "4", "5", "6"],
        ["7", "8", "9", "10", "11", "12"],
    ]
}

function PreviewTable(props: {file: File | undefined}) {
    if (props.file === undefined) {
        return <p>Preview not available</p>;
    } else {
        return (
        <table>
            <tbody>
            {
                readPreviewData(props.file).map((row, index) => 
                    <tr key={index}>
                        {row.map((column, index) => 
                            <td key={index}>{column}</td>
                        )}
                    </tr>
                )
            }
            </tbody>
        </table>
        )
    }        
}

export default Preview;