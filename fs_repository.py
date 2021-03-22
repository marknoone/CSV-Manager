from pathlib import Path
from csv_meta_data import CSVMetaData
import os

class FSRepository:

    def __init__(self, filepath: str): 
        self._csvMetaData = {}
        self._filepath = filepath
        self.findCSVFromRoot()
        
    def findCSVFromRoot(self):
        csvFilesFound = Path(self._filepath ).rglob('**/*.csv')
        for fileID, path in enumerate(csvFilesFound):
            csvFileStats = path.stat()
            self._csvMetaData[fileID] = CSVMetaData(fileID, 
                path.name,
                path.absolute(),
                csvFileStats.st_size,
                int(csvFileStats.st_mtime) )

    def addCSVFile(self):
        return

    def getCSVMetaData(self):
        return list(self._csvMetaData.values())

    def getCSVData(self, fileID: int):
        if fileID in self._csvMetaData.keys():
            fileMetaData = self._csvMetaData[fileID]
            file = fileMetaData.openTextFile("rt")
            return file.read()
        
        return ""