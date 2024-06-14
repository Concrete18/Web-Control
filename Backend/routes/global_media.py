from flask import Blueprint
import pyautogui, os, subprocess

global_media = Blueprint("global_media", __name__)


@global_media.route("/api/media_play_pause", methods=["POST"])
def media_play_pause():
    pyautogui.press("playpause")
    return "media_play_pause", 200


@global_media.route("/api/media_prev_track", methods=["POST"])
def media_prev_track():
    pyautogui.press("prevtrack")
    return "media_prev_track", 200


@global_media.route("/api/media_next_track", methods=["POST"])
def media_next_track():
    pyautogui.press("nexttrack")
    return "media_next_track", 200


@global_media.route("/api/open_browser", methods=["POST"])
def open_browser():
    os.system("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
    return "open_browser", 200


@global_media.route("/api/open_spotify", methods=["POST"])
def open_spotify():
    os.system("C:Users\Michael\AppData\Roaming\Spotify\Spotify.exe")
    return "open_spotify", 200


@global_media.route("/api/volume_up", methods=["POST"])
def volume_up():
    incr = 10
    pyautogui.press("volumeup", presses=int(incr / 2))  # one press increases by 2
    return "volume_up", 200


@global_media.route("/api/volume_down", methods=["POST"])
def volume_down():
    incr = 10
    pyautogui.press("volumedown", presses=int(incr / 2))  # one press decreases by 2
    return "volume_down", 200


@global_media.route("/api/volume_mute", methods=["POST"])
def volume_mute():
    pyautogui.press("volumemute")
    return "volume_mute", 200


@global_media.route("/api/audio_speakers", methods=["POST"])
def audio_speakers():
    pyautogui.hotkey("ctrl", "win", "z")
    return "audio_speakers", 200


@global_media.route("/api/audio_headphones", methods=["POST"])
def audio_headphones():
    pyautogui.hotkey("ctrl", "win", "x")
    return "audio_headphones", 200
