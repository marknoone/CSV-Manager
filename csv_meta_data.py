from pathlib import Path

class CSVMetaData:
    def __init__(self, id: int, name: str, filepath: str, filesizeBytes: int, dateLastModified: int):
        self.id = id
        self.name = name
        self.filepath = filepath
        self.filesizeBytes = filesizeBytes
        self.dateLastModified = dateLastModified

    def openTextFile(self, mode: str):
        file = Path(self.filepath)
        if file.is_file(): 
            return open(self.filepath, mode)
        else:
            return None
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "filesize": self.filesizeBytes,
            "dateLastModified": self.dateLastModified}