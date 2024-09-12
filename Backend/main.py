# standard library
import sys

# third-party library
from flask import Flask
from flask_cors import CORS
from waitress import serve

# local imports
from routes.browser import browser
from routes.global_control import global_control
from routes.power import power
from routes.window import window

from utils.config import Config
from utils.utils import set_title

app = Flask(__name__)

# loads config
config = Config("config.ini")
port = int(config.config["NETWORK"]["port"])
music_app = config.config["PATHS"]["music"]
browser_app = config.config["PATHS"]["browser"]
# adds to flask config
app.config["music_app"] = music_app
app.config["browser_app"] = browser_app

CORS(app)  # enable CORS for all routes

app.register_blueprint(browser)
app.register_blueprint(global_control)
app.register_blueprint(window)
app.register_blueprint(power)


def main():
    set_title("Web Control")
    host = "0.0.0.0"
    if len(sys.argv) > 1:
        if sys.argv[1] == "dev":
            app.run(host=host, port=port, debug=True)
    serve(app, host=host, port=port)


if __name__ == "__main__":
    main()
