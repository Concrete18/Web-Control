
from logging.handlers import RotatingFileHandler
import logging as lg

# logger setup
try:
    log_formatter = lg.Formatter(
        "%(asctime)s %(levelname)s %(message)s", datefmt="%m-%d-%Y %I:%M:%S %p"
    )
    logger = lg.getLogger(__name__)
    logger.setLevel(lg.DEBUG)  # Log Level
    my_handler = RotatingFileHandler("Backend/server.log", maxBytes=5 * 1024 * 1024, backupCount=2)
    my_handler.setFormatter(log_formatter)
    logger.addHandler(my_handler)
except:
    print("Failed create logger.")
