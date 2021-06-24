class Dog
    def initialize()
      name = getName()
      age = getAge()
      grade = getGrade()
      letterGrade = calcGrade(grade)
      if letterGrade != "F"
        puts "Congrats, #{name} you passed with a #{letterGrade}!"          
      else
        puts "Sorry, #{name}, you failed."
      end
  end
  def getName
    puts "What is your name?"
      @name=gets
      return @name
  end
  def getAge
    puts "What is your age?"
      @age=Integer(gets)
      return @age
  end
  def getGrade
    puts "What is your grade?"
      @grade=Integer(gets)
      return @grade
  end
  def calcGrade(grade)
    if grade < 60
        return "F"
    elsif grade >= 60 && grade < 70
        return "D"
    elsif grade >= 70 && grade < 80
        return "C"
    elsif grade >= 80 && grade < 90
        return "B"
    elsif grade >= 90
        return "A"
    end
  end
end
myDog = Dog.new