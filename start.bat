@echo off
cd "Frontend"
start /B cmd /c "npm run dev"
cd "../Backend"
start python "main.py"
