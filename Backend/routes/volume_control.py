from flask import Blueprint
import pyautogui

browser_media = Blueprint("browser_media", __name__)


@browser_media.route("/space", methods=["POST"])
def space():
    pyautogui.press("space")
    return "space", 200


@browser_media.route("/yt_next", methods=["POST"])
async def yt_next():
    pyautogui.hotkey("shift", "n")
    return "yt_next", 200


@browser_media.route("/yt_prev", methods=["POST"])
def yt_prev():
    pyautogui.hotkey("shift", "p")
    return "yt_prev", 200


@browser_media.route("/right_arrow", methods=["POST"])
async def right_arrow():
    pyautogui.press("right")
    return "right_arrow", 200


@browser_media.route("/left_arrow", methods=["POST"])
async def left_arrow():
    pyautogui.press("left")
    return "left_arrow", 200


@browser_media.route("/next_chapter", methods=["POST"])
async def next_chapter():
    pyautogui.hotkey("ctrl", "right")
    return "next_chapter", 200


@browser_media.route("/prev_chapter", methods=["POST"])
async def prev_chapter():
    pyautogui.hotkey("ctrl", "left")
    return "prev_chapter", 200
