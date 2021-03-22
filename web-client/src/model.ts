export type CSVMetaData = {
    id: number;
    title: string;
    createdAt: number;
    fileSizeBytes: number;
    sourceURL: string;
}

export type CSVData = { 
    [key: string]: any;
}