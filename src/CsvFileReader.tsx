class CsvFileReader {
    async readCsv(file: File, separator?: string): Promise<Array<Array<string>>> {
        const reader = new FileReader();

        function parseLine(line: string) {
            return line.split(separator ?? ",")
        }

        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Problem parsing input file."));
            };

            reader.onload = () => {
                const lines: Array<Array<string>> = []
                const result = reader.result

                if (this.isString(result)) {
                    const allLines = result?.split(/\r\n|\n/);
                    for (let i = 0; i < allLines.length; i++) {
                        lines.push(parseLine(allLines[i]))
                    }
                }
                resolve(lines);
            };
            reader.readAsText(file);
        });
    }
    
    isString(x: any): x is string {
        return typeof x === "string";
    }
}



export default CsvFileReader;
