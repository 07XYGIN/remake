## 基础结构与输出

### 1.1 Java 基本结构

Java 程序的入口是 `main` 方法。一个最简单的 Java 程序示例：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("你好，Java！");
    }
}
```

**代码解释：**

- **public class HelloWorld**  
  定义了一个名为 `HelloWorld` 的公共类。  
  - `public`：表示该类对于所有包都可见。  
  - `class`：表示这是一个类的声明。

- **public static void main(String[] args)**  
  定义了程序入口，即主方法：  
  - `public`：该方法对所有程序可见。  
  - `static`：静态方法，不依赖于类的具体实例。  
  - `void`：方法没有返回值。  
  - `main`：主方法名称。  
  - `String[] args`：参数数组，用于接收命令行参数。

- **System.out.println("你好，Java！")**  
  调用 `System.out` 对象的 `println` 方法，向标准输出打印字符串，并换行。

### 1.2 输出方法详解

Java 中常用的输出方法：

```java
System.out.println("换行输出");
System.out.print("不换行输出");
System.out.printf("格式化输出：姓名=%s, 年龄=%d", "张三", 20);
```

**说明：**

- **println**：输出内容并在结尾自动换行。
- **print**：输出内容但不换行，需要手动添加换行符 `\n`。
- **printf**：格式化输出，可以使用格式化符号，如 `%s`（字符串）、`%d`（整数）、`%f`（浮点数）。

---

## 数据类型与变量

Java 中数据分为基本数据类型和引用类型。

### 2.1 基本数据类型

| 数据类型 | 说明                              | 示例代码                              |
|----------|-----------------------------------|---------------------------------------|
| **byte**    | 8 位有符号整数，范围：-128 ~ 127      | `byte b = 100;`                        |
| **short**   | 16 位有符号整数，范围较 byte 大       | `short s = 10000;`                     |
| **int**     | 32 位有符号整数，常用整数类型          | `int i = 12345;`                       |
| **long**    | 64 位有符号整数，更大范围整数          | `long l = 123456789L;` *(结尾加 L)*      |
| **float**   | 单精度浮点数，后缀须加 f             | `float f = 3.14f;`                     |
| **double**  | 双精度浮点数，常用小数类型              | `double d = 3.1415926;`                |
| **char**    | 16 位 Unicode 字符                   | `char c = 'A';`                        |
| **boolean** | 布尔类型，只有 `true` 或 `false`       | `boolean flag = true;`                 |

### 2.2 引用类型

主要包括类、接口、数组等。示例：

```java
// String 是一个引用类型
String str = "Hello, Java!";

// 定义一个数组（引用类型）
int[] numbers = {1, 2, 3, 4, 5};
```

**重点解释：**  
- 引用类型变量存放的是对象的地址，与基本类型不同。  
- `String` 在 Java 中是特殊的不可变对象（immutable）。

---

## 运算符

### 3.1 算术运算符

用于数学计算的符号。

```java
int a = 10, b = 3;

int sum = a + b;      // 加法：13
int diff = a - b;     // 减法：7
int prod = a * b;     // 乘法：30
int quot = a / b;     // 除法：3（整数除法只保留整数部分）
int mod = a % b;      // 取模：1

a++;  // 自增（等同于：a = a + 1）
b--;  // 自减（等同于：b = b - 1）
```

### 3.2 关系运算符

用于比较两个操作数，返回布尔值（true/false）。

```java
boolean eq = (a == b);  // 等于
boolean ne = (a != b);  // 不等于
boolean gt = (a > b);   // 大于
boolean lt = (a < b);   // 小于
boolean ge = (a >= b);  // 大于等于
boolean le = (a <= b);  // 小于等于
```

### 3.3 逻辑运算符

用于连接多个布尔表达式。

```java
boolean cond1 = (a > 5);
boolean cond2 = (b < 5);

boolean andResult = cond1 && cond2; // 与运算: 两边都为 true 才为 true
boolean orResult  = cond1 || cond2; // 或运算: 只要一边为 true 则为 true
boolean notResult = !cond1;         // 非运算: 取反
```

### 3.4 位运算符

直接操作整数的二进制位。

```java
int x = 5;  // 二进制：0101
int y = 3;  // 二进制：0011

int andOp = x & y; // 按位与：0101 & 0011 = 0001 (结果1)
int orOp  = x | y; // 按位或：0101 | 0011 = 0111 (结果7)
int xorOp = x ^ y; // 按位异或：0101 ^ 0011 = 0110 (结果6)
int notOp = ~x;    // 按位取反：~0101（具体值取决于整数位数）

// 左移和右移
int leftShift = x << 1;  // 左移1位，相当于乘以2：1010（二进制，结果10）
int rightShift = x >> 1; // 右移1位，相当于除以2：0010（二进制，结果2）
```

### 3.5 赋值运算符

用于给变量赋值及复合操作：

```java
int num = 10;
num += 5;   // 相当于 num = num + 5;
num -= 3;   // num = num - 3;
num *= 2;   // num = num * 2;
num /= 4;   // num = num / 4;
num %= 3;   // num = num % 3;
```

---

## 控制语句

### 4.1 条件分支：if / else

用于根据条件执行不同代码块。

```java
int score = 75;
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}
```

**代码解释：**

- `if` 判断条件是否成立，成立则执行对应代码块。  
- `else if` 可以接续多个条件判断。  
- `else` 用于所有不符合前面条件的情况。

### 4.2 多分支：switch

用于根据变量值多分支判断。

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("星期一");
        break;
    case 2:
        System.out.println("星期二");
        break;
    case 3:
        System.out.println("星期三");
        break;
    default:
        System.out.println("未知的星期");
        break;
}
```

**说明：**

- 每个 `case` 对应一个具体取值。  
- `break` 用于终止 switch，否则会继续执行下面的 case。  
- `default` 用于没有匹配任何 case 的情况。

### 4.3 循环语句

#### 4.3.1 for 循环

一般用于已知循环次数的场景。

```java
// 输出 0 到 4
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}
```

**解释：**

- 初始化：`int i = 0` 定义计数器。  
- 条件：`i < 5` 满足条件则执行循环体。  
- 更新：`i++` 每次循环结束后递增计数器。

#### 4.3.2 while 循环

先判断条件，再执行循环体。

```java
int i = 0;
while (i < 5) {
    System.out.println("while: " + i);
    i++;
}
```

#### 4.3.3 do...while 循环

先执行循环体，再判断条件，保证至少执行一次。

```java
int j = 0;
do {
    System.out.println("do-while: " + j);
    j++;
} while (j < 5);
```

#### 4.3.4 for-each 循环

用于遍历数组或集合。

```java
int[] arr = {1, 2, 3, 4, 5};
for (int num : arr) {
    System.out.println("数组元素：" + num);
}
```

#### 4.3.5 break, continue, return

- **break：** 跳出当前循环体。  
- **continue：** 跳过本次循环，开始下一次循环。  
- **return：** 结束方法执行并返回（无返回值时仅结束）。

示例：

```java
for (int i = 0; i < 10; i++) {
    if (i == 3) {
        continue;  // 跳过 i == 3 的循环
    }
    if (i == 7) {
        break;     // 当 i == 7 时，退出整个循环
    }
    System.out.println(i);
}
```

---

## 方法（函数）

方法是可复用的代码模块，可以带参数和返回值。

### 5.1 方法定义

```java
// 定义一个求和方法
public static int sum(int a, int b) {
    // a, b 为参数，本方法返回它们的和
    return a + b;
}

// 定义一个无返回值的方法
public static void sayHello(String name) {
    System.out.println("Hello, " + name + "!");
}
```

**关键点：**

- **返回类型：** 方法可返回任何数据类型，也可为 `void` 表示不返回。  
- **参数列表：** 参数可以是零个或多个，类型必须声明。  
- **方法调用：** 在 `main` 方法或其它方法中调用已定义的方法。

### 5.2 方法调用示例

```java
public class MethodDemo {
    public static void main(String[] args) {
        int result = sum(10, 15);  // 调用返回整数的方法
        System.out.println("10 + 15 = " + result);
        sayHello("张三");         // 调用无返回值的方法
    }
    
    public static int sum(int a, int b) {
        return a + b;
    }
    
    public static void sayHello(String name) {
        System.out.println("Hello, " + name + "!");
    }
}
```

### 5.3 方法重载（Overload）

在同一类中允许多个方法名称相同，但参数列表不同：

```java
public class OverloadDemo {
    // 重载方法 1：无参数
    void print() {
        System.out.println("无参数");
    }
    
    // 重载方法 2：一个参数
    void print(String message) {
        System.out.println("参数为：" + message);
    }
    
    // 重载方法 3：两个参数
    void print(int a, int b) {
        System.out.println("数字相加：" + (a + b));
    }
    
    public static void main(String[] args) {
        OverloadDemo demo = new OverloadDemo();
        demo.print();
        demo.print("Java");
        demo.print(5, 10);
    }
}
```

---

## 数组

数组存储固定大小的同一类型数据的集合。

### 6.1 数组声明与初始化

```java
// 声明一个数组，含有 5 个整型元素，默认值均为 0
int[] arr = new int[5];

// 静态初始化赋值
String[] names = {"Alice", "Bob", "Charlie"};
```

### 6.2 数组属性和遍历

```java
// 获取数组长度：arr.length 表示数组元素个数
System.out.println("数组长度：" + arr.length);

// 传统 for 循环
for (int i = 0; i < names.length; i++) {
    System.out.println("元素 " + i + "：" + names[i]);
}

// 增强 for 循环（for-each）
for (String name : names) {
    System.out.println("姓名：" + name);
}
```

---

## 面向对象编程（OOP）

### 7.1 类的定义与对象的创建

```java
public class Person {
    // 成员变量（属性）
    String name;
    int age;

    // 构造方法：用于初始化对象
    public Person(String name, int age) {
        this.name = name; // this 表示当前对象
        this.age = age;
    }

    // 成员方法（行为）
    public void introduce() {
        System.out.println("我是 " + name + "，今年 " + age + " 岁。");
    }
}
```

**使用示例：**

```java
public class OOPDemo {
    public static void main(String[] args) {
        // 使用 new 关键字创建 Person 对象
        Person p = new Person("李四", 25);
        p.introduce(); // 调用对象方法，输出个人信息
    }
}
```

### 7.2 构造方法说明

- **构造方法名称与类名相同**  
- **没有返回类型**  
- 可重载：提供不同参数的构造方法满足不同需求

示例增加无参构造方法：

```java
public class Person {
    String name;
    int age;

    // 无参构造方法
    public Person() {
        // 可赋予默认值
        this.name = "默认姓名";
        this.age = 0;
    }
    
    // 带参数构造方法
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

---

## 继承、多态、方法重载与重写

### 8.1 继承（Inheritance）

使用 `extends` 实现继承，子类自动拥有父类的属性与方法。

```java
// 父类（超类）
class Animal {
    public void eat() {
        System.out.println("动物在进食");
    }
}

// 子类：继承 Animal 类
class Dog extends Animal {
    public void bark() {
        System.out.println("汪汪叫");
    }
}
```

**使用示例：**

```java
public class InheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();  // 调用从 Animal 继承的方法
        dog.bark(); // 调用 Dog 类特有的方法
    }
}
```

### 8.2 多态（Polymorphism）

父类引用指向子类对象，调用重写的方法时，执行的是子类版本（动态绑定）。

```java
class Animal {
    public void sound() {
        System.out.println("动物发出声音");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("喵喵叫");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Animal animal = new Cat(); // 父类引用指向子类对象
        animal.sound();  // 输出：喵喵叫
    }
}
```

### 8.3 方法重写（Override）

子类可以重写父类的方法，使用 `@Override` 注解（可选，但建议使用）：

```java
class Animal {
    public void move() {
        System.out.println("动物在移动");
    }
}

class Bird extends Animal {
    @Override
    public void move() {
        System.out.println("鸟儿在飞翔");
    }
}
```

### 8.4 方法重载（Overload）  
前面已有详细示例，不再重复。

---

## 访问修饰符与关键字总结

### 9.1 访问修饰符

| 修饰符       | 说明                                         |
|--------------|----------------------------------------------|
| **public**   | 公开的，任何地方都可以访问                     |
| **private**  | 私有的，仅限于所在类内部访问                    |
| **protected**| 受保护的，同一包内以及子类中可访问               |
| **default**  | 默认的（不写修饰符），仅限同一包内可访问           |

### 9.2 其它关键字

| 关键字         | 说明                                                     |
|----------------|----------------------------------------------------------|
| **static**     | 表示静态成员（方法或变量），不依赖于对象                     |
| **final**      | 表示常量或不可修改（类、方法、变量）                         |
| **abstract**   | 抽象类或抽象方法，不能实例化，必须被子类继承并实现抽象方法         |
| **synchronized** | 同步，用于多线程控制，确保方法或代码块在同一时刻仅被一个线程执行  |
| **volatile**   | 保证变量在多个线程之间的可见性，防止线程缓存                         |
| **transient**  | 序列化时跳过的变量                                        |
| **native**     | 声明本地方法（使用非 Java 语言实现，如 C/C++）                    |
| **strictfp**   | 限制浮点运算精度，使结果在所有平台一致                           |

此外，还有与异常、接口、包等相关的关键字，如：  
`try`, `catch`, `finally`, `throw`, `throws`, `import`, `package`, `interface`, `implements`, `instanceof`。

---

## String 类及其常用 API

`String` 是 Java 中最常用的类，代表不可变的字符序列。以下列出常用方法及示例：

```java
public class StringDemo {
    public static void main(String[] args) {
        String str = " Hello, Java! ";

        // 获取字符串长度
        System.out.println("长度: " + str.length());

        // 截取字符串（下标从0开始，[起始,结束)区间）
        String substr = str.substring(1, 8);
        System.out.println("子串: " + substr);

        // 转换为大写和小写
        System.out.println("大写: " + str.toUpperCase());
        System.out.println("小写: " + str.toLowerCase());

        // 去除两边空白字符
        System.out.println("去空格: [" + str.trim() + "]");

        // 查找子串位置
        int index = str.indexOf("Java");
        System.out.println("\"Java\"的位置: " + index);

        // 字符串拼接
        String combined = str + " 学习";
        System.out.println("拼接后: " + combined);

        // 替换字符串中的内容
        String replaced = str.replace("Java", "World");
        System.out.println("替换后: " + replaced);

        // 分割字符串
        String[] words = str.trim().split(", ");
        for (String word : words) {
            System.out.println("单词: " + word);
        }
        
        // 字符串比较
        boolean equals = str.equals(" Hello, Java! ");
        boolean equalsIgnoreCase = str.equalsIgnoreCase(" hello, java! ");
        System.out.println("严格相等: " + equals);
        System.out.println("忽略大小写相等: " + equalsIgnoreCase);
    }
}
```

**详细说明：**

- **length()** 返回字符串长度。  
- **substring(int beginIndex, int endIndex)** 提取子字符串，包含起始位置，不含结束位置。  
- **toUpperCase/toLowerCase()** 改变字符串大小写。  
- **trim()** 删除字符串前后空格。  
- **indexOf()** 查找子字符串首次出现的位置。  
- **replace()** 替换指定字符或字符串。  
- **split()** 根据指定的正则表达式分割字符串，返回字符串数组。  
- **equals()/equalsIgnoreCase()** 比较字符串是否相等（区分/不区分大小写）。

---

## 异常处理基础

异常处理用于捕获并处理运行时可能出现的错误，确保程序不至于崩溃。

### 11.1 try-catch-finally

```java
public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int result = a / b; // 此处可能抛出 ArithmeticException 除零异常
            System.out.println("结果：" + result);
        } catch (ArithmeticException e) {
            System.out.println("捕获异常：除零错误。");
        } finally {
            // 不论是否发生异常，该代码块均会执行
            System.out.println("finally 块：清理资源。");
        }
    }
}
```

### 11.2 throws 与 throw

- **throws**：声明方法可能抛出的异常，由调用者处理。  
- **throw**：在方法内部主动抛出异常。

```java
public class ThrowDemo {
    public static void validateAge(int age) throws Exception {
        if (age < 18) {
            throw new Exception("年龄不满足要求！");
        }
        System.out.println("合法年龄：" + age);
    }

    public static void main(String[] args) {
        try {
            validateAge(16);
        } catch (Exception e) {
            System.out.println("异常：" + e.getMessage());
        }
    }
}
```

---

## 其它常见 API

### 12.1 Math 类

提供了大量数学运算方法，均为静态方法。

```java
public class MathDemo {
    public static void main(String[] args) {
        // 返回绝对值
        System.out.println("绝对值: " + Math.abs(-10));
        
        // 计算平方根
        System.out.println("平方根: " + Math.sqrt(16));
        
        // 计算 2 的 3 次方
        System.out.println("幂运算: " + Math.pow(2, 3));
        
        // 计算最大值和最小值
        System.out.println("最大值: " + Math.max(10, 20));
        System.out.println("最小值: " + Math.min(10, 20));
        
        // 四舍五入
        System.out.println("四舍五入: " + Math.round(3.6));
    }
}
```

### 12.2 System 类

提供了标准输入、输出、错误流以及与系统相关信息和控制方法。

```java
public class SystemDemo {
    public static void main(String[] args) {
        // 系统当前时间（毫秒）
        long currentTime = System.currentTimeMillis();
        System.out.println("当前时间 (毫秒): " + currentTime);
        
        // 退出程序
        // System.exit(0); // 注释掉，不然会直接中断程序运行
    }
}
```

---