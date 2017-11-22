#! /usr/bin/python

# Import the libraries we need
import RPi.GPIO as GPIO
import time

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)


LED = 21

# Set the LED GPIO pin as an output
GPIO.setup(LED, GPIO.OUT)


GPIO.output(LED,True)

time.sleep(5)

GPIO.output(LED,False)

