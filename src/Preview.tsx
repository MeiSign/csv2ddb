import React from "react";

interface InputProps {
    file?: File,
    csvLines: string[][]
}

class Preview extends React.Component<InputProps> {
    render() {
        return (
            <div className="Preview-table" data-testid="preview-div">
                <h1>{this.props.file?.name ?? "No file selected"}</h1>
                <PreviewTable file={this.props.file} csvLines={this.props.csvLines} />
            </div>
        );
    }
}

function PreviewTable(props: InputProps) {
    if (props.file === undefined) {
        return <p>Preview not available</p>;
    } else {
        return (
            <table data-testid="preview-csv-table">
                <tbody>
                    {
                        props.csvLines.map((row, index) =>
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