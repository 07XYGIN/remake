
## 1. 变量和数据类型

### 1.1 数据类型

在 C 语言中，常见的基本数据类型有：

-   **整型 (`int`)**：用于存储整数
-   **浮点型 (`float`)**：用于存储单精度浮点数
-   **双精度浮点型 (`double`)**：用于存储双精度浮点数
-   **字符型 (`char`)**：用于存储单个字符

### 1.2 变量声明

```c
int age = 25;     // 整数类型
float price = 19.99;  // 单精度浮点型
double pi = 3.14159;  // 双精度浮点型
char grade = 'A';    // 字符类型
```

## 2. 常量

常量是程序运行时不能改变的值。可以使用 `#define` 或 `const` 来定义常量。

### 2.1 使用 `#define` 定义常量

```c
#define PI 3.14159  // 定义常量 PI
```

### 2.2 使用 `const` 定义常量

```c
const int MAX = 100;  // 定义常量 MAX
```

## 3. 类型转换

### 3.1 自动类型转换

C 语言会自动进行类型转换（隐式转换），比如将较小范围的数据类型转换为较大范围的数据类型。

```c
int a = 5;
float b = 2.5;
float result = a + b;  // a 被自动转换为 float 类型
```

### 3.2 显式类型转换

可以使用强制类型转换（显式转换）来将一种类型的数据转换为另一种类型。

```c
float a = 5.5;
int b = (int) a;  // 强制转换为整数类型
```

## 4. 打印变量

使用 `printf()` 函数打印变量时，可以使用格式符来指定输出格式：

-   `%d` 打印整数
-   `%f` 打印浮点数
-   `%c` 打印字符
-   `%s` 打印字符串

```c
#include <stdio.h>

int main() {
    int age = 25;
    float price = 19.99;
    char grade = 'A';

    printf("Age: %d\n", age);      // 打印整数
    printf("Price: %.2f\n", price); // 打印浮点数，保留两位小数
    printf("Grade: %c\n", grade);  // 打印字符

    return 0;
}
```

## 5. 数组

数组是一个存储多个相同类型元素的集合。在 C 语言中，数组的大小是固定的。

### 5.1 定义数组

```c
int arr[5] = {1, 2, 3, 4, 5};  // 定义一个整型数组
```

### 5.2 访问数组元素

```c
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    printf("First element: %d\n", arr[0]);  // 输出第一个元素
    printf("Second element: %d\n", arr[1]); // 输出第二个元素

    return 0;
}
```

### 5.3 数组遍历

```c
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        printf("Element %d: %d\n", i + 1, arr[i]);
    }

    return 0;
}
```

## 6. 条件判断

### 6.1 if 语句

```c
#include <stdio.h>

int main() {
    int a = 10;

    if (a > 5) {
        printf("a is greater than 5\n");
    } else {
        printf("a is less than or equal to 5\n");
    }

    return 0;
}
```

### 6.2 switch 语句

```c
#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\n");
            break;
        case 2:
            printf("Tuesday\n");
            break;
        case 3:
            printf("Wednesday\n");
            break;
        default:
            printf("Invalid day\n");
    }

    return 0;
}
```

## 7. 循环

### 7.1 for 循环

```c
#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("i = %d\n", i);
    }

    return 0;
}
```

### 7.2 while 循环

```c
#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("i = %d\n", i);
        i++;
    }

    return 0;
}
```

### 7.3 do-while 循环

```c
#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("i = %d\n", i);
        i++;
    } while (i < 5);

    return 0;
}
```

## 8. 函数

函数是用来组织和管理代码的基本单位。在 C 语言中，函数可以有参数，并且可以返回值。

### 8.1 函数定义与调用

```c
#include <stdio.h>

void greet() {
    printf("Hello, World!\n");
}

int main() {
    greet();  // 调用 greet 函数
    return 0;
}
```

### 8.2 函数带参数

```c
#include <stdio.h>

void add(int a, int b) {
    printf("Sum: %d\n", a + b);
}

int main() {
    add(3, 5);  // 调用带参数的函数
    return 0;
}
```

### 8.3 函数返回值

```c
#include <stdio.h>

int multiply(int a, int b) {
    return a * b;
}

int main() {
    int result = multiply(3, 4);
    printf("Result: %d\n", result);
    return 0;
}
```
