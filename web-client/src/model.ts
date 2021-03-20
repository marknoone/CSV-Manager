export type CSVMetaData = {
    id: number;
    title: string;
    createdAt: number;
    fileSizeKB: number;
    sourceURL: string;
}

export type CSVData = {
    headers: string[];
    data: any;
}