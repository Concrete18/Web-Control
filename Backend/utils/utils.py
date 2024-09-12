# standard library
import time, keyboard, os


def wait_for_escape(timeout: int) -> bool:
    """
    Waits for a specified timeout and returns True if the escape key is not pressed, otherwise returns False.
    """
    start_time = time.time()
    while time.time() - start_time < timeout:
        if keyboard.is_pressed("esc"):
            return False
        time.sleep(0.1)
    return True


def set_title(title: str) -> None:
    """
    Sets the CLI window title to the specified title if provided.
    """
    if isinstance(title, str):
        os.system(f"title {title}")
