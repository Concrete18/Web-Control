import time, keyboard


class Utils:

    def wait_for_escape(self, timeout: int) -> bool:
        """
        Waits for a specified timeout and returns True if the escape key is not pressed, otherwise returns False.
        """
        start_time = time.time()
        while time.time() - start_time < timeout:
            if keyboard.is_pressed("esc"):
                return False
            time.sleep(0.1)
        return True
