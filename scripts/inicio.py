#!/usr/bin/python
# Example using a character LCD connected to a Raspberry Pi or BeagleBone Black.
import RPi.GPIO as GPIO
import time
import sys
import Adafruit_CharLCD as LCD
print("ENTROU TEMP")

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

# Raspberry Pi pin configuration:
lcd_rs        = 25  # Note this might need to be changed to 21 for older revision Pi's.
lcd_en        = 24
lcd_d4        = 23
lcd_d5        = 27
lcd_d6        = 18
lcd_d7        = 22
lcd_backlight = 4
lcd_columns = 16
lcd_rows = 2


# Define LCD column and row size for 16x2 LCD.
lcd_columns = 16
lcd_rows    = 2

# Alternatively specify a 20x4 LCD.
# lcd_columns = 20
# lcd_rows    = 4

# Initialize the LCD
lcd = LCD.Adafruit_CharLCD(lcd_rs, lcd_en, lcd_d4, lcd_d5, lcd_d6, lcd_d7,
				lcd_columns, lcd_rows, lcd_backlight)
 
lcd.message(sys.argv[1] + "\n" + sys.argv[2])

GPIO.setup(20, GPIO.OUT) #Buzzer
GPIO.setup(21, GPIO.OUT) #LED 1

GPIO.output(20,True)
GPIO.output(21,True)
time.sleep(0.5)
GPIO.output(21,False)
time.sleep(0.5)
GPIO.output(21,True)
time.sleep(0.5)
GPIO.output(21,False)
time.sleep(0.5)
GPIO.output(21,True)
time.sleep(0.5)
GPIO.output(21,False)
GPIO.output(20,False)
