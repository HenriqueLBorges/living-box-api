#! /usr/bin/python

# Import the libraries we need
import RPi.GPIO as GPIO
import time
import sys

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
print(sys.argv[1])
print(sys.argv[2])
if (sys.argv[1] == "LED"):
	print("entrou no led")
	LED = 21
elif (sys.argv[1] == "BUZZER"):
	LED = 20
else:
	LED = 16


# Set the LED GPIO pin as an output
GPIO.setup(LED, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
if (sys.argv[2] == '1'):
	print("Entrou para ligar")
	GPIO.output(LED,True)
	GPIO.output(20,True)
	time.sleep(2)
	GPIO.output(20,False)
else:
	GPIO.output(LED,False)

print("oi")
#GPIO.cleanup()
