
# MySQL 使用文档

## 目录

- [1. 数据定义语言 (DDL)](#1-数据定义语言-ddl)
  - [1.1 数据库操作](#11-数据库操作)
  - [1.2 表结构操作](#12-表结构操作)
- [2. 数据操作语言 (DML)](#2-数据操作语言-dml)
- [3. 数据查询语言 (DQL)](#3-数据查询语言-dql)
- [4. 数据控制语言 (DCL)](#4-数据控制语言-dcl)
- [5. 增删改查 (CRUD) 示例](#5-增删改查-crud-示例)
- [6. MySQL 常用数据类型](#6-mysql-常用数据类型)

---

## 1. 数据定义语言 (DDL)

DDL 用于定义、修改和删除数据库及表结构。下面是常用的 DDL 语句示例：

### 1.1 数据库操作

```sql
-- 显示所有数据库
SHOW DATABASES;

-- 创建数据库（如果不存在则创建），并可指定字符集和校对规则
CREATE DATABASE IF NOT EXISTS database_name
    DEFAULT CHARACTER SET utf8mb4
    COLLATE utf8mb4_general_ci;

-- 删除数据库（如果存在则删除）
DROP DATABASE IF EXISTS database_name;

-- 选择数据库
USE database_name;
```

### 1.2 表结构操作

```sql
-- 显示当前数据库中的所有表
SHOW TABLES;

-- 查看表结构（字段信息、数据类型、约束等）
DESC table_name;

-- 查看表的创建语句（详细信息，包括表注释等）
SHOW CREATE TABLE table_name;

-- 创建表
CREATE TABLE table_name (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '主键ID',
    username VARCHAR(50) NOT NULL COMMENT '用户名',
    email VARCHAR(100) NOT NULL COMMENT '邮箱地址',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) COMMENT = '用户信息表';
```

---

## 2. 数据操作语言 (DML)

DML 语句用于向数据库中插入、更新或删除数据。常见语句包括：

```sql
-- 插入数据
INSERT INTO table_name (username, email)
VALUES ('alice', 'alice@example.com');

-- 插入多条数据
INSERT INTO table_name (username, email)
VALUES ('bob', 'bob@example.com'), ('charlie', 'charlie@example.com');

-- 更新数据（注意 WHERE 条件，防止全表更新）
UPDATE table_name
SET email = 'new_email@example.com'
WHERE username = 'alice';

-- 删除数据
DELETE FROM table_name
WHERE username = 'charlie';
```

---

## 3. 数据查询语言 (DQL)

DQL 主要用于从数据库中查询数据。常用的查询语句包括：

```sql
-- 简单查询所有数据
SELECT * FROM table_name;

-- 条件查询
SELECT id, username, email
FROM table_name
WHERE username LIKE 'a%';

-- 分组和聚合查询
SELECT COUNT(*) AS user_count, DATE(created_at) AS create_date
FROM table_name
GROUP BY DATE(created_at);

-- 排序查询
SELECT * FROM table_name
ORDER BY created_at DESC;

-- 分页查询
SELECT * FROM table_name
LIMIT 10 OFFSET 20;
```

---

## 4. 数据控制语言 (DCL)

DCL 用于管理数据库用户及其权限。常用语句如下：

```sql
-- 授予用户权限
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost' IDENTIFIED BY 'password';

-- 撤销用户权限
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'username'@'localhost';

-- 刷新权限（使变更立即生效）
FLUSH PRIVILEGES;
```

---

## 5. 增删改查 (CRUD) 示例

下面进一步结合 DML 和 DQL 展示常见的增删改查操作：

### 5.1 增（Insert）

```sql
-- 增加单条记录
INSERT INTO employees (name, position, salary)
VALUES ('John Doe', 'Engineer', 70000);

-- 增加多条记录
INSERT INTO employees (name, position, salary)
VALUES ('Jane Smith', 'Manager', 85000),
       ('Bob Brown', 'Technician', 50000);
```

### 5.2 删（Delete）

```sql
-- 删除单条记录
DELETE FROM employees
WHERE name = 'Bob Brown';

-- 根据条件删除多条记录
DELETE FROM employees
WHERE salary < 60000;
```

### 5.3 改（Update）

```sql
-- 更新单条记录
UPDATE employees
SET salary = 75000
WHERE name = 'John Doe';

-- 批量更新
UPDATE employees
SET position = 'Senior Engineer'
WHERE position = 'Engineer';
```

### 5.4 查（Select）

```sql
-- 查询所有记录
SELECT * FROM employees;

-- 带条件的查询
SELECT name, salary
FROM employees
WHERE salary >= 70000;

-- 使用排序和分页
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;
```

---

## 6. MySQL 常用数据类型

MySQL 数据类型主要分为数字类型、字符串类型和日期/时间类型，常见数据类型说明如下：

### 6.1 数字类型

- **整型**：
  - `INT`：整数类型（一般占 4 字节），范围 -2147483648 到 2147483647。
  - `TINYINT`：小整数，通常占 1 字节，范围 -128 到 127。
  - `SMALLINT`：小范围整数，占 2 字节。
  - `MEDIUMINT`：中等范围整数，占 3 字节。
  - `BIGINT`：大整数，占 8 字节。

- **浮点型和定点数**：
  - `FLOAT`：单精度浮点数。
  - `DOUBLE`：双精度浮点数。
  - `DECIMAL(precision, scale)`：定点数，可以精确存储小数，适用于货币计算等场景。

### 6.2 字符串类型

- **定长和变长字符串**：
  - `CHAR(n)`：定长字符串，若实际字符长度不足 n，会自动补充空格。
  - `VARCHAR(n)`：变长字符串，适用于大部分需要存储变化长度字符的场景。

- **文本类型**：
  - `TEXT`：用于存储大量文本数据，最大长度为 65,535 字节。
  - `MEDIUMTEXT`：用于存储更大文本，最大长度为 16,777,215 字节。
  - `LONGTEXT`：用于存储非常大的文本，最大长度为 4,294,967,295 字节。

- **二进制数据**：
  - `BLOB`：用于存储二进制数据，最大长度为 65,535 字节。
  - `MEDIUMBLOB`、`LONGBLOB` 与 TEXT 类型对应，用于更大数据。

### 6.3 日期和时间类型

- **日期/时间组合**：
  - `DATETIME`：格式为 `YYYY-MM-DD HH:MM:SS`，用于存储日期和时间。
  - `TIMESTAMP`：存储从1970年1月1日以来的秒数，可自动更新为当前时间。

- **单独的日期或时间**：
  - `DATE`：仅存储日期，格式 `YYYY-MM-DD`。
  - `TIME`：仅存储时间，格式 `HH:MM:SS`。
  - `YEAR`：存储年份，格式为 4 位数字或 2 位数字（建议使用 4 位）。

---