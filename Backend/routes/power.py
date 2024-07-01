from flask import Blueprint
import os, sys, time

from utils.utils import Utils
from audio.play_sound import sleep_20_sound, shutdown__20_sound, cancel_sound

power = Blueprint("power", __name__, url_prefix="/api")

utils = Utils()


def shutdown() -> None:
    """
    Shutsdown PC after 20 seconds if ESC is not pressed within the time.
    """
    timeout = 20
    print(f"Shutdown in {timeout} seconds")
    shutdown__20_sound.play
    if sys.platform == "win32":
        if utils.wait_for_escape(timeout):
            os.system("shutdown /s /t 1")
        else:
            print("Cancelled Shutdown")
            cancel_sound.play()
    else:
        print("Shutdown is Unsupported.")


def sleep() -> None:
    """
    Puts PC to sleep after 20 seconds if ESC is not pressed within the time.
    """
    timeout = 20
    print(f"Sleeping in {timeout} seconds")
    sleep_20_sound.play()
    if sys.platform == "win32":
        if utils.wait_for_escape(timeout):
            os.system("rundll32.exe powrprof.dll,SetSuspendState 0,1,0")
            time.sleep(5)
        else:
            print("Cancelled Sleep")
            cancel_sound.play()
    else:
        print("Sleep is Unsupported.")


@power.route("/power/<action>", methods=["POST"])
def power_control(action):
    match action:
        case "shutdown":
            shutdown()
        case "sleep":
            sleep()
        case _:
            return "invalid parameter", 422
    return action, 200
