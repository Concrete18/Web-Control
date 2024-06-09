from fastapi import APIRouter, Request, Depends
from fastapi.templating import Jinja2Templates

import pyautogui, ctypes, os

from dependencies import verify_credentials
from classes.custom_logger import logger

router = APIRouter()

# main routes

templates = Jinja2Templates(directory="templates")


@router.get("/")
async def index(request: Request):
    # logger.info("Root Accessed")
    context = {"request": request, "data": {"name": "John", "age": 30}}
    return templates.TemplateResponse("index.html", context)


# @router.get("/protected")
# async def protected_route(credentials: bool = Depends(verify_credentials)):
#     # logging
#     logger.info("authorization confirmed")
#     return {"message": "You are authenticated"}

# Youtube/browser video routes


@router.post("/space")
async def space():
    pyautogui.press("space")
    # logging
    msg = "Pressed space"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": "Pressed Space Key"}


@router.post("/yt_next")
async def yt_next():
    pyautogui.hotkey("shift", "n")
    # logging
    msg = "Shift + N Pressed"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/yt_prev")
async def yt_prev():
    pyautogui.hotkey("shift", "p")
    # logging
    msg = "Shift + P Pressed"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/right_arrow")
async def right_arrow():
    pyautogui.press("right")
    # logging
    msg = "Right Arrow Pressed"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": "Pressed Shift + N"}


@router.post("/left_arrow")
async def left_arrow():
    pyautogui.press("left")
    # logging
    msg = "Left Arrow Pressed"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {msg}


@router.post("/next_chapter")
async def next_chapter():
    pyautogui.hotkey("ctrl", "right")
    # logging
    msg = "Next Youtube Chapter"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/prev_chapter")
async def prev_chapter():
    pyautogui.hotkey("ctrl", "left")
    # logging
    msg = "Next Youtube Chapter"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/fullscreen")
async def fullscreen():
    pyautogui.press("f")
    # logging
    msg = "Pressed F to Fullscreen"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/next_tab")
async def next_tab():
    pyautogui.hotkey("ctrl", "tab")
    # logging
    msg = "Went to Next Tab"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


@router.post("/prev_tab")
async def prev_tab():
    pyautogui.hotkey("ctrl", "shift", "tab")
    # logging
    msg = "Went to Prev Tab"
    try:
        logger.info(msg)
    except:
        print("Failed to log.")
    return {"message": msg}


# other media


@router.post("/media_play_pause")
async def media_play_pause():
    pyautogui.press("playpause")
    # logging
    msg = "Pausing using global media key"
    logger.info(msg)
    return {"message": msg}


@router.post("/media_prev_track")
async def media_prev_track():
    pyautogui.press("prevtrack")
    # logging
    msg = "prev_track Pressed"
    logger.info(msg)
    return {"message": msg}


@router.post("/media_next_track")
async def media_next_track():
    pyautogui.press("nexttrack")
    # logging
    msg = "next_track Pressed"
    logger.info(msg)
    return {"message": msg}


@router.post("/volume_up")
async def volume_up():
    incr = 10
    pyautogui.press("volumeup", presses=int(incr / 2))  # one press increases by 2
    # logging
    msg = f"Volume increased by {incr}"
    logger.info(msg)
    return {"message": msg}


@router.post("/volume_down")
async def volume_down():
    incr = 10
    pyautogui.press("volumedown", presses=int(incr / 2))  # one press decreases by 2
    # logging
    msg = f"Volume decreased by {incr}"
    logger.info(msg)
    return {"message": msg}


@router.post("/audio_speakers")
async def audio_speakers():
    pyautogui.hotkey("ctrl", "win", "z")
    # logging
    msg = f"Set Audio to Speakers"
    logger.info(msg)
    return {"message": msg}


@router.post("/audio_headphones")
async def audio_headphones():
    pyautogui.hotkey("ctrl", "win", "x")
    # logging
    msg = f"Set Audio to Headphones"
    logger.info(msg)
    return {"message": msg}


# Display Control


@router.post("/display extend")
async def display():
    # TODO setup display extend
    # self.computer.display_switch("PC Extend")
    # logging
    msg = f"Set Display to Extend"
    logger.info(msg)
    return {"message": msg}


# power control


@router.post("/sleep")
async def sleep():
    logger.info("computer put to sleep")
    os.system("rundll32.exe powrprof.dll,SetSuspendState 0,1,0")
    return {"message": "Putting PC to Sleep"}


@router.post("/shutdown")
async def protected_route(credentials: bool = Depends(verify_credentials)):
    logger.info("computer was shutdown")
    os.system("shutdown /s /t 1")
    return {"message": "Shutting Down PC"}


# debug


@router.post("/refocus")
async def refocus():
    # find screen size
    user32 = ctypes.windll.user32
    width, height = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)
    # click center
    pyautogui.click(x=width / 2, y=height / 2, button="left")
    # logging
    msg = "Window Refocused"
    logger.info(msg)
    return {"message": msg}


@router.post("/open_log")
async def open_log():
    log_file = "server.log"
    osCommandString = f"notepad.exe {log_file}"
    os.system(osCommandString)
    # logging
    msg = "Opened Log File in Notepad"
    logger.info(msg)
    return {"message": "Window Refocused"}
