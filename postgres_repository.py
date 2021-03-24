import psycopg2

def mapMetaToObj(metaData):
    return {
        "id": metaData[0], 
        "name": metaData[1], 
        "createdAt": metaData[2], 
        "lastModified": metaData[3]
    }

class PostgresRepository():

    def __init__(self, app):
        self._conn = psycopg2.connect(
            host=app.config['DATABASE_HOST'],
            port=app.config['DATABASE_PORT'],
            database=app.config['DATABASE'],
            user=app.config['DATABASE_USERNAME'],
            password=app.config['DATABASE_PASSWORD'])
    

    def addCSVFile(self, name, file):
        try: 
            cur = self._conn.cursor()
            cur.execute("INSERT INTO files(Name, File) " +
                        "VALUES(%s,%s)",
                        (name, psycopg2.Binary(file)))

            self._conn.commit()
            cur.close()
        
        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
        
        return 


    def getCSVMetaData(self):
        metaDataList = None
        try:
            cur = self._conn.cursor()
            cur.execute(""" SELECT ID, Name, Created, LastModified FROM files """)
            metaDataList = cur.fetchall()
            cur.close()

        except (Exception, psycopg2.DatabaseError) as error:
            print(error)

        return map(mapMetaToObj, metaDataList)


    def getCSVMetaDataByID(self, fileID):
        metaData = None
        try:
            cur = self._conn.cursor()
            cur.execute(""" SELECT ID, Name, Created, LastModified FROM files
                            WHERE ID = %s """,
                        ([fileID]))
            metaData = cur.fetchone()
            cur.close()

        except (Exception, psycopg2.DatabaseError) as error:
            print(error)

        return mapMetaToObj(metaData)


    def getCSVDataByID(self, fileID):
        data = None
        try:
            cur = self._conn.cursor()
            cur.execute(""" SELECT ID, Name, File FROM files
                            WHERE ID = %s """,
                        ([fileID]))

            result = cur.fetchone()
            data = (result[1], result[2])
            cur.close()

        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
        
        return data


    def deleteCSVData(self, fileID):
        try:
            cur = self._conn.cursor()
            cur.execute(""" DELETE FROM files WHERE id = %s;""", ([fileID]))
            self._conn.commit()
            cur.close()

        except (Exception, psycopg2.DatabaseError) as error:
            print(error)

        return 

 
