from flask import Blueprint
import pyautogui

browser = Blueprint("browser_control", __name__, url_prefix="/api")


@browser.route("/browser/media/<action>", methods=["POST"])
def media(action):
    match action:
        case "play_pause":
            pyautogui.press("space")
        case "next":
            pyautogui.hotkey("shift", "n")
        case "prev":
            pyautogui.hotkey("shift", "p")
        case "skip_forwards":
            pyautogui.press("right")
        case "skip_backwards":
            pyautogui.press("left")
        case "next_chapter":
            pyautogui.hotkey("ctrl", "right")
        case "prev_chapter":
            pyautogui.hotkey("ctrl", "left")
        case _:
            return "invalid  parameter", 422
    return action, 200


@browser.route("/browser/nav/<action>", methods=["POST"])
def nav(action):
    match action:
        case "fullscreen":
            pyautogui.press("f")
        case "next_tab":
            pyautogui.hotkey("ctrl", "tab")
        case "prev_tab":
            pyautogui.hotkey("ctrl", "shift", "tab")
        case _:
            return "invalid  parameter", 422
    return action, 200


@browser.route("/browser/audio/<action>", methods=["POST"])
def audio(action):
    match action:
        case "volume_up":
            pyautogui.press("up")
        case "volume_down":
            pyautogui.press("down")
        case "volume_mute":
            pyautogui.press("m")
        case _:
            return "invalid  parameter", 422
    return action, 200
