import os
from flask import Flask, jsonify
from dotenv import load_dotenv
from fs_repository import FSRepository

load_dotenv()

app = Flask(__name__)
repository = FSRepository(os.getenv('CSV_FILE_PATH'))

@app.route('/meta', methods=['GET'])
def index():
    csvMetaData = repository.getCSVMetaData()
    serializedData = map(lambda x: x.serialize(), csvMetaData)
    return jsonify(list(serializedData))

if __name__ == "__main__":
    app.run(debug=True)