from flask import Blueprint
import pyautogui

browser_control = Blueprint("browser_control", __name__)


@browser_control.route("/api/fullscreen", methods=["POST"])
def fullscreen():
    pyautogui.press("f")
    return "fullscreen", 200


@browser_control.route("/api/next_tab", methods=["POST"])
def next_tab():
    pyautogui.hotkey("ctrl", "tab")
    return "next_tab", 200


@browser_control.route("/api/prev_tab", methods=["POST"])
def prev_tab():
    pyautogui.hotkey("ctrl", "shift", "tab")
    return "prev_tab", 200
