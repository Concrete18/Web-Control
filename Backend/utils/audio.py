import subprocess


class SetDefaultAudio:

    speaker_mode_out = "Logitech Speakers"
    speaker_mode_in = "Webcam Mic"

    headset_mode_out = "Headset Audio"
    headset_mode_in = "Headset Microphone"

    def __init__(self) -> None:
        pass

    @staticmethod
    def set_default_sound_device(device, num):
        command = ["nircmd", "setdefaultsounddevice", device, str(num)]
        subprocess.run(command, shell=True)

    def to_speakers(self):
        """
        Sets autio to speakers mode.
        """
        self.set_default_sound_device(self.speaker_mode_out, 0)
        self.set_default_sound_device(self.speaker_mode_out, 2)
        self.set_default_sound_device(self.speaker_mode_in, 0)
        self.set_default_sound_device(self.speaker_mode_in, 2)

    def to_headset(self):
        """
        Sets autio to headset mode.
        """
        self.set_default_sound_device(self.headset_mode_out, 0)
        self.set_default_sound_device(self.headset_mode_out, 2)
        self.set_default_sound_device(self.headset_mode_in, 0)
        self.set_default_sound_device(self.headset_mode_in, 2)


if __name__ == "__main__":
    SetAudio = SetDefaultAudio()
    SetAudio.to_speakers()
    SetAudio.to_headset
