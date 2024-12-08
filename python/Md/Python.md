# python

## 1.Hello,word!

```py
print('hello,word')
```

## 2.字符串(str)

### 2.1 字符串的大小写

```py
#1.首字母大写
name = 'title'.title()
#2. 字符串全部大写
name = 'title'.upper()
#3. 全字母小写
name = 'title'.lower()
```

### 2.2 去除空白

```python
#1.去除末尾空白
name = 'title'.rstrip()
#2.去除头部空白
name = 'title'.lstrip()
#3.去除所有空白
name = 'title'.strip()
```

## 3.制表符

-   `\t` 向前缩进
-   `\n` 换行

## 4.列表

```py
list = ['first','second','three']
#在末尾添加
list.append('four')
#在指定地址添加
#<listName>.insert(_index,_object)
list.insert(0,'one')
#在指定地方删除
#del <listName>[_index]
del list[0]
#获取删除的元素
#<listName>.pop(_index)
delData = list.pop(1)
#删除列表内指定值
#<listName>.remove(_value)
list.remove('second')
#查看数组内元素个数
#len(listName)
len(list)
#列表的切片
#<listName>[n?,m?] 可选 n是起点  m是终点 某个值为空时默认从头开始 全部为空时则为整个列表
list[:,5]
```

## 5.元组

元组里面的元素不可修改

```python
lists = (1,2,3)
lists[0] = 4 #error
lists = (4,2,3) #OK
```

## 6.条件判断

```py
# 1.与或非
and == &&
or == ||
! = !
# 2.特定的值未包含再列表
not in
# 3.if-elif-else
if :
    elif:
        else:
```

## 7.字典

```py
#0.
obj = {
    'name':'job',
    'age':10
}
print(obj['age'])
#1. 在字典中添加键值对
obj['set'] = "gril"
#2. 修改键值对
obj['set'] = 'woman'
#3. 删除键值对
del obj['set']
#4. 遍历字典
for key,value in obj.items():
    print(key,value)
#5.遍历字典中所有键
for key in obj.keys():
    print(key)
#5.1 遍历字典中的所有值
for values in obj.values():
    print(values)
#6. 按照某个顺序进行排列   for key in sorted('#顺序')
for key in sorted(obj.keys()):
    print(key)
```

## 8.类

```py
class People:
    #self 引用实例
    def __init__(self, name, age):
        self.name = name
        self.age = age
        # 可以对参数进行默认
        # 并没有在形参中书写isHappy
        self.isHappy = false
    def eat(self):
        return self.name  + '\n'+ 'eat apple'

    # 使用类
    zhangsan = People('zhangsan', 18)
    eat = zhangsan.eat()

    ##修改属性的值
    ## 1.可以直接修改
    zhangsan.age = 20
```

```py
    #类的继承 super()
class Person:
    def __init__(self,age,name='P'):
        self.age = age
        self.name = name
    def init(self):
        print('fea',self.age,self.name)


class People(Person):
    def __init__(self,set,age,name):
        self.set = set
        super().__init__(age,name)
    def get(self):
        print('sonDef',self.set,self.age)

b = People(1,'a','a')

b.get()

## 先执行son 然后执行fea
#重写父类
#可在⼦类中定义⼀个与要重写的⽗类⽅法同名的⽅法。这样，Python将不会考虑这个⽗类⽅法
```

## 9.文件读取

```py
with open('文件路径') as fileProject:
    contents = fileProject.read()
    print(contents)

```

## 10.文件写入

```py
with open('文件路径','key') as file
    file.read()  #读文件
    file.readlines() #读文件的每行
    file.write('nb') #写入文件
```

-   key = w 写入文件
-   key = a 不清空文件内容继续写入文件
-   key = r 读取模式
-   key = r+ 读写模式
    默认只读
-   注 若文件已经有内容 写入时会清空文件的内容 如果不想清空 请使用'a'
-   Python 只能将字符串写入文本文件。要将数值数据存储到文本文件中，必须先使用函数 str()将其转换为字符串格式

## 11.JSON

```py
import json
json.dump() #存数据
json.load() #读数据
```

## 12.导入

`form module_path import className,className1,className2....`

`import module_path`

`form module_path import *`




