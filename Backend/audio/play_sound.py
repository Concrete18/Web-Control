from os import environ

environ["PYGAME_HIDE_SUPPORT_PROMPT"] = "1"

import pygame

pygame.mixer.init()

sleep_20_sound = pygame.mixer.Sound("audio/sleep-20.mp3")
shutdown__20_sound = pygame.mixer.Sound("audio/shutdown-20.mp3")
cancel_sound = pygame.mixer.Sound("audio/action-cancelled.mp3")
