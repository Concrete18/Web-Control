import sys
from flask import Flask
from flask_cors import CORS

from waitress import serve

from utils.config import Config

from routes.browser_control import browser_control
from routes.global_media import global_media
from routes.misc import misc

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

app.register_blueprint(browser_control)
app.register_blueprint(global_media)
app.register_blueprint(misc)


def main():
    host = "0.0.0.0"
    if len(sys.argv) > 1:
        if sys.argv[1] == "dev":
            app.run(host=host, port=port, debug=True)
    serve(app, host=host, port=port)


if __name__ == "__main__":
    main()
