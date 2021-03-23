import os
from dotenv import load_dotenv
from datetime import datetime as dt
from flask import Flask, request, jsonify

def create_app():

    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    @app.route('/', methods=['GET'])
    def hello_world():
        return {
            'hello': 'world'
        }

    @app.route('/csv', methods=['GET'])
    def create_csv_file():
        return {
            'hello': 'csv'
        }

    # @app.route('/meta', methods=['GET'])
    # def index():
    #     csvMetaData = repository.getCSVMetaData()
    #     serializedData = map(lambda x: x.serialize(), csvMetaData)
    #     return jsonify(list(serializedData))

    return app

