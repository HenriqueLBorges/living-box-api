#! /usr/bin/python

# Import the libraries we need
import RPi.GPIO as GPIO
import time
import sys

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)

if (sys.argv[1] == "LED"):
	LED = 21
elif (sys.argv[1] == "BUZZER"):
	LED = 22
else:
	LED = 23

# Set the LED GPIO pin as an output
GPIO.setup(LED, GPIO.OUT)

if (sys.argv[2] == 1):
	GPIO.output(LED,True)
else:
	GPIO.output(LED,False)

