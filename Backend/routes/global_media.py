from flask import Blueprint
import pyautogui, os

global_media = Blueprint("global_media", __name__)


@global_media.route("/api/global/media/<action>", methods=["POST"])
def media(action):
    match action:
        case "play_pause":
            pyautogui.press("playpause")
        case "prev_track":
            pyautogui.press("prevtrack")
        case "next_track":
            pyautogui.press("nexttrack")
        case "open_browser":
            os.system("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
        case "open_spotify":
            os.system("C:Users\Michael\AppData\Roaming\Spotify\Spotify.exe")
        case _:
            return "incorrect parameter", 400
    return action, 200


@global_media.route("/api/global/audio/<action>", methods=["POST"])
def audio(action):
    incr = 10
    key_presses = int(incr / 2)  # one press increases by 2
    match action:
        case "volume_up":
            pyautogui.press("volumeup", presses=key_presses)
        case "volume_down":
            pyautogui.press("volumedown", presses=key_presses)
        case "volume_mute":
            pyautogui.press("volumemute")
        case "audio_speakers":
            pyautogui.hotkey("ctrl", "win", "z")
        case "audio_headphones":
            pyautogui.hotkey("ctrl", "win", "x")
        case _:
            return "incorrect parameter", 400
    return action, 200
