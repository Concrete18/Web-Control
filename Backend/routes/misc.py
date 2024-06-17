from flask import Blueprint
import pyautogui, ctypes, os, subprocess

misc = Blueprint("misc", __name__)

# window control


@misc.route("/api/window/<action>", methods=["POST"])
def window(action):
    match action:
        case "minimize":
            pyautogui.hotkey("alt", "space")
            pyautogui.press("n")
        case _:
            return "invalid parameter", 400
    return action, 200


@misc.route("/api/window/refocus", methods=["POST"])
def refocus():
    # find primary screen size
    user32 = ctypes.windll.user32
    width, height = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)
    # click center of main screen
    pyautogui.click(x=width / 2, y=height / 2, button="left")
    return "refocus", 200


# display control


@misc.route("/api/display/<action>", methods=["POST"])
def display(action):
    valid_display_modes = ["extend", "internal", "external"]
    if action in valid_display_modes:
        subprocess.run(["C:\Windows\System32\DisplaySwitch.exe", f"/{str(action)}"])
        return action, 200
    return "invalid parameter", 400


# power control


@misc.route("/api/power/<action>", methods=["POST"])
def power(action):
    match action:
        case "shutdown":
            os.system("shutdown /s /t 1")
        case "sleep":
            os.system("rundll32.exe powrprof.dll,SetSuspendState 0,1,0")
        case _:
            return "invalid parameter", 400
    return action, 200
