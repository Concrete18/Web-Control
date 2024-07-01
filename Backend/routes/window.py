from flask import Blueprint
import pyautogui, ctypes, subprocess

window = Blueprint("window", __name__, url_prefix="/api")

# window control


@window.route("/window/<action>", methods=["POST"])
def window_control(action):
    match action:
        case "minimize":
            pyautogui.hotkey("alt", "space")
            pyautogui.press("n")
        case "maximize":
            pyautogui.hotkey("win", "up")
        case "next":
            pyautogui.hotkey("alt", "esc")
        case "prev":
            pyautogui.hotkey("alt", "shift", "esc")
        case _:
            return "invalid parameter", 422
    return action, 200


@window.route("/window/refocus", methods=["POST"])
def refocus():
    # find primary screen size
    user32 = ctypes.windll.user32
    width, height = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)
    # click center of main screen
    pyautogui.click(x=width / 2, y=height / 2, button="left")
    return "refocus", 200


# display control


@window.route("/display/<action>", methods=["POST"])
def display(action):
    valid_display_modes = ["extend", "internal", "external", "duplicate"]
    if action in valid_display_modes:
        subprocess.run(["C:\Windows\System32\DisplaySwitch.exe", f"/{str(action)}"])
        return action, 200
    return "invalid parameter", 422
