import time, sys, os

from utils.utils import Utils
from audio.play_sound import sleep_20_sound, shutdown__20_sound, cancel_sound


class Power(Utils):

    def shutdown(self) -> None:
        """
        Shutsdown PC after 20 seconds if ESC is not pressed within the time.
        """
        delay = 20
        print(f"Shutdown in {delay} seconds")
        shutdown__20_sound.play
        if sys.platform == "win32":
            if self.wait_for_escape(delay=delay):
                os.system("shutdown /s /t 1")
            else:
                print("Cancelled Shutdown")
                cancel_sound.play()
        else:
            print("Shutdown is Unsupported.")

    def sleep(self) -> None:
        """
        Puts PC to sleep after 20 seconds if ESC is not pressed within the time.
        """
        delay = 20
        print(f"Sleeping in {delay} seconds")
        sleep_20_sound.play()
        if sys.platform == "win32":
            if self.wait_for_escape(delay=delay):
                os.system("rundll32.exe powrprof.dll,SetSuspendState 0,1,0")
                time.sleep(5)
            else:
                print("Cancelled Sleep")
                cancel_sound.play()
        else:
            print("Sleep is Unsupported.")
