import time, keyboard


class Utils:

    def delayed_function(self, delay) -> None:
        """
        ph
        """
        while delay > 0:
            if keyboard.is_pressed("esc"):
                return False
            increment = 0.1
            time.sleep(increment)
            delay -= increment
        return True
