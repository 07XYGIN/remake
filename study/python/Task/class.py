class Person:
    """
        创建类
    """
    def __init__(self,name):
        self.name = name

    def getName(self):
        pass
        self.names = self.name + '  Hello'
        return self.names
Q = Person('jokc')
getnames = Q.getName()