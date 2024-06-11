from fastapi import Request, HTTPException, Depends
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from passlib.context import CryptContext

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
