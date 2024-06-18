from flask import Blueprint
import pyautogui, os

from classes.audio import SetDefaultAudio

global_media = Blueprint("global_media", __name__)

SetAudio = SetDefaultAudio()

# volume increment
increment = 10
key_presses = int(increment / 2)  # one press increases by 2


@global_media.route("/api/global/media/<action>", methods=["POST"])
def media_control(action):
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
            return "invalid  parameter", 422
    return action, 200


@global_media.route("/api/global/audio/<action>", methods=["POST"])
def audio_control(action):
    match action:
        case "volume_up":
            pyautogui.press("volumeup", presses=key_presses)
        case "volume_down":
            pyautogui.press("volumedown", presses=key_presses)
        case "volume_mute":
            pyautogui.press("volumemute")
        case "audio_speakers":
            SetAudio.to_speakers()
        case "audio_headphones":
            SetAudio.to_headset()
        case _:
            return "invalid  parameter", 422
    return action, 200
