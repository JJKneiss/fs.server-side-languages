class Dog:
    def __init__(self):  # this is a constructor
        name = input("What is your name?")
        age = input("What is your age?")
        grade = input("What is your grade?")
        letterGrade = self.myFunction(grade)
        if letterGrade != "F":
            print(f'Congrats {name}, you passed with a {letterGrade}!')
        else:
            print(f'Sorry, {name}. You seem to have failed.')

    def myFunction(grade):
        if grade < 60:
            return "F"
        elif grade >= 60 and grade < 70:
            return "D"
        elif grade >= 70 and grade < 80:
            return "C"
        elif grade >= 80 and grade < 90:
            return "B"
        else:
            return "A"


myDog = Dog()
# print(myDog.getAge())
