from fastapi import Request, HTTPException, Depends
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from passlib.context import CryptContext

# middleware


class RedirectMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        if request.url.path != "/":
            response = await call_next(request)
            # Modify the response to redirect to a specific route
            response.headers["location"] = "/"
            response.status_code = 302  # Redirect status code
            return response
        return await call_next(request)


# security

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

users = {"admin": "password123"}


def verify_credentials(self, credentials: HTTPBasicCredentials = Depends(HTTPBasic())):
    if credentials.username in self.users:
        stored_password = self.users[credentials.username]
        if self.pwd_context.verify(credentials.password, stored_password):
            return True
    raise HTTPException(
        status_code=401,
        detail="Invalid username or password",
        headers={"WWW-Authenticate": "Basic"},
    )
