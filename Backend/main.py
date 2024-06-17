from flask import Flask
from flask_cors import CORS
import os

from classes.config import Config

from routes.browser_control import browser_control
from routes.global_media import global_media
from routes.misc import misc

script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

config = Config("config.ini")
port = int(config.config["NETWORK"]["port"])

app = Flask(__name__)

# TODO set to only use specific devices
CORS(app)  # enable CORS for all routes

app.register_blueprint(browser_control)
app.register_blueprint(global_media)
app.register_blueprint(misc)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=port, debug=True)
