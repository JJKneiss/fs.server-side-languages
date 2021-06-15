import sys

name = input("What is your name?")
age = input("What is your age?")

if int(age) > 60:
    print("Wow your old" + name)
else:
    print("You're so young" + name)
