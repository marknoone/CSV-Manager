import os
from flask import Flask, jsonify, abort, send_from_directory, request
from dotenv import load_dotenv
from fs_repository import FSRepository
from werkzeug.utils import secure_filename
from pathlib import Path

load_dotenv()

app = Flask(__name__)
uploadDir = os.getenv('CSV_FILE_DIR')
if uploadDir is None or uploadDir == "":
    uploadDir = 'uploads'


app.config['UPLOAD_PATH'] = os.path.join(os.getcwd(), uploadDir)
app.config['UPLOAD_EXTENSIONS'] = ['.csv']
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024 # Max Content 50MB 
repository = FSRepository(app.config['UPLOAD_PATH'])


@app.route('/meta', methods=['GET'])
def getCSVMetaData():
    csvMetaData = repository.getCSVMetaData()
    serializedData = map(lambda x: x.serialize(), csvMetaData)
    return jsonify(list(serializedData))


@app.route('/meta/<file_id>', methods=['GET'])
def getCSVMetaDataByID(file_id=None):
    csvMetaData = repository.getCSVMetaDataByID(file_id)
    if csvMetaData is None:
        return jsonify({})
    return jsonify(csvMetaData.serialize())


@app.route('/csv', methods=['POST'])
def upload_files():
    uploaded_file = request.files['file']
    filename = secure_filename(uploaded_file.filename)
    if filename != '':
        file_ext = os.path.splitext(filename)[1]
        if file_ext not in app.config['UPLOAD_EXTENSIONS']:
            return jsonify({"error": "Invalid file uploaded"}), 400
        uploaded_file.save(os.path.join(app.config['UPLOAD_PATH'], filename))
    return jsonify({}), 204



@app.route('/csv/<file_id>', methods=['GET'])
def getCSVFile(file_id=None):
    targetMetaData = repository.getCSVMetaDataByID(file_id)
    if targetMetaData is None:
        return jsonify({"error": "No file found."}), 404
    return send_from_directory(app.config['UPLOAD_PATH'], targetMetaData.name)



@app.route('/csv/<file_id>', methods=['DELETE'])
def deleteCSVFile(file_id=None):
    targetMetaData = repository.getCSVMetaDataByID(file_id)
    if targetMetaData is None:
        return jsonify({"error": "No file found."}), 404
    path = os.path.join(app.config['UPLOAD_PATH'], targetMetaData.name)
    if Path(path).is_file():
        os.remove(path)
    return jsonify({}), 200

    
if __name__ == "__main__":
    app.run(debug=True)