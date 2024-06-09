from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import uvicorn, os, logging

from dependencies import RedirectMiddleware

from routers import basic

from classes.config import Config

# sets script directory in case current working directory is different
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

config = Config("config.ini")
port = int(config.config["NETWORK"]["port"])

app = FastAPI(docs_url=None, redoc_url=None)
app.include_router(basic.router)

# Define the filter
class EndpointFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        current_route = record.args[2]
        routes_to_ignore = ["/favicon.ico", "/"]
        for ignored_route in routes_to_ignore:
            if ignored_route == current_route:
                return False
        return True

# Add filter to the logger
logging.getLogger("uvicorn.access").addFilter(EndpointFilter())

# middleware
app.add_middleware(RedirectMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=port)
