"""Flask config class."""
import os

class Config:

    # General Config
    TESTING = True
    DEBUG = True
    SECRET_KEY = b'_5#y2L"F4Q8z\n\xec]/'

    # Database
    SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI',
                                             'postgresql+psycopg2://test:test@0.0.0.0:5401/test')
    SQLALCHEMY_TABLE = 'migrations'
    SQLALCHEMY_DB_SCHEMA = 'public'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # My API
    API_ENDPOINT = 'http://127.0.0.1/'