interface IWorkbook {
    commit: (path: string) => Promise<this>;
    getWorkbook: () => any;
    getData: (wsName: string) => any[];
    getHeadings: (wsName: string) => any[];
    getSheetNames: () => string[];
    init: () => Promise<this>;
    update: (wsName: string, jsonData: any[]) => void;
}
declare class Workbook implements IWorkbook {
    private filePath;
    private workbook;
    constructor(filePath?: string);
    getWorkbook(): any;
    init(): Promise<this>;
    getSheetNames(): string[];
    /**
     * get data from a particular worksheet
     *
     * @param wsName - name of the worksheet to get data from
     * @return array of objects representing a record
     */
    getData(wsName: string): any[];
    commit(path: string): Promise<this>;
    update(wsName: string, jsonData: any[]): void;
    getHeadings(wsName: string): any[];
    private getAoaData;
}
export = Workbook;
//# sourceMappingURL=index.d.ts.map