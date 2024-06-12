from flask import Blueprint
import pyautogui

browser_media = Blueprint("browser_media", __name__)


@browser_media.route("/space", methods=["POST"])
def space():
    print("space")
    return "space", 200


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


# @router.post("/right_arrow")
# async def right_arrow():
#     pyautogui.press("right")
#     # logging
#     msg = "Right Arrow Pressed"
#     try:
#         logger.info(msg)
#     except:
#         print("Failed to log.")
#     return {"message": "Pressed Shift + N"}


# @router.post("/left_arrow")
# async def left_arrow():
#     pyautogui.press("left")
#     # logging
#     msg = "Left Arrow Pressed"
#     try:
#         logger.info(msg)
#     except:
#         print("Failed to log.")
#     return {msg}


# @router.post("/next_chapter")
# async def next_chapter():
#     pyautogui.hotkey("ctrl", "right")
#     # logging
#     msg = "Next Youtube Chapter"
#     try:
#         logger.info(msg)
#     except:
#         print("Failed to log.")
#     return {"message": msg}


# @router.post("/prev_chapter")
# async def prev_chapter():
#     pyautogui.hotkey("ctrl", "left")
#     # logging
#     msg = "Next Youtube Chapter"
#     try:
#         logger.info(msg)
#     except:
#         print("Failed to log.")
#     return {"message": msg}
