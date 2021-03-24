"""Flask config class."""
import os

class Config:

    # General Config
    TESTING = True
    DEBUG = True
    UPLOAD_EXTENSIONS = ['.csv']
    MAX_CONTENT_LENGTH = 50 * 1024 * 1024

    # Database
    DATABASE = os.getenv('POSTGRES_DB', 'db')
    DATABASE_HOST = os.getenv('POSTGRES_HOST', '127.0.0.1')
    DATABASE_PORT = os.getenv('POSTGRES_PORT', '5432')
    DATABASE_USERNAME = os.getenv('POSTGRES_USER', 'postgres')
    DATABASE_PASSWORD = os.getenv('POSTGRES_PASSWORD', 'password')