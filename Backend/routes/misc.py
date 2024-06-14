from flask import Blueprint
import pyautogui, ctypes, os

misc = Blueprint("misc", __name__)

# Display Control


@misc.route("/api/display_extend", methods=["POST"])
def display_extend():
    # TODO setup display extend
    print("display_extend is WIP")
    return "display_extend", 200


@misc.route("/api/display_main_only", methods=["POST"])
def display_main_only():
    # TODO setup display display_main_only
    print("display_main_only is WIP")
    return "display_main_only", 200


# window control


@misc.route("/api/minimize", methods=["POST"])
def minimize():
    pyautogui.hotkey("alt", "space")
    pyautogui.press("n")
    return "minimize", 200


# power control


@misc.route("/api/sleep", methods=["POST"])
def sleep():
    os.system("rundll32.exe powrprof.dll,SetSuspendState 0,1,0")
    return "sleep", 200


@misc.route("/api/shutdown", methods=["POST"])
def shutdown():
    os.system("shutdown /s /t 1")
    return "shutdown", 200


# debug


@misc.route("/api/refocus", methods=["POST"])
def refocus():
    # find screen size
    user32 = ctypes.windll.user32
    width, height = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)
    # click center of main screen
    pyautogui.click(x=width / 2, y=height / 2, button="left")
    return "refocus", 200
