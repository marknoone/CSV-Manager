import os
import io
import psycopg2

from datetime import datetime as dt
from flask import Flask, jsonify, abort, send_file, request
from flask_cors import CORS 
from werkzeug.utils import secure_filename
from pathlib import Path
from postgres_repository import PostgresRepository

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    CORS(app)

    app.config.from_object('config.Config')
    postgresRepository = PostgresRepository(app)


    @app.route('/ping', methods=['GET'])
    def index():
        return jsonify({})
    
    
    @app.route('/meta', methods=['GET'])
    def getCSVMetaData():
        csvMetaData = postgresRepository.getCSVMetaData()
        if csvMetaData is None:
            return jsonify({}), 500
        return jsonify(list(csvMetaData))


    @app.route('/meta/<file_id>', methods=['GET'])
    def getCSVMetaDataByID(file_id=None):
        csvMetaData = postgresRepository.getCSVMetaDataByID(file_id)
        if csvMetaData is None:
            return jsonify({}), 404
        return jsonify(csvMetaData)


    @app.route('/csv', methods=['POST'])
    def upload_files():
        uploaded_file = request.files['file']
        filename = secure_filename(uploaded_file.filename)
        if filename != '':
            postgresRepository.addCSVFile(filename, uploaded_file.read())
        return jsonify({}), 204



    @app.route('/csv/<file_id>', methods=['GET'])
    def getCSVFile(file_id=None):
        name, csvFile = postgresRepository.getCSVDataByID(file_id)
        if csvFile is None:
            return jsonify({"error": "No file found."}), 404
        return send_file(
            io.BytesIO(csvFile),
            mimetype='text/csv',
            as_attachment=True,
            attachment_filename=name)



    @app.route('/csv/<file_id>', methods=['DELETE'])
    def deleteCSVFile(file_id=None):
        if file_id is not None:
            postgresRepository.deleteCSVData(file_id)
        return jsonify({}), 200

    return app