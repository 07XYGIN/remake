
#### DDL

```sql
-- 查询所有数据库
SHOW DATABASES;

-- 创建数据库 
-- if not exists 如果没有则执行
CREATE DATABASES [if not exists] <数据库名称> [default charset <指定字符集>] [COLLATE 排序规则]

-- 删除
DROP DATABASE [IF EXISTS] <数据库名称>

-- 使用
USE <数据库名称>

-- 查询当前数据库中的所有表
SHOW TABLES;

-- 查询表结构
DESC 表名

-- 查询表的创建语句
SHOW CREATE TABLE 表名


-- 创建表
CREATE TABLE 表名(
	字段1 类型 [comment '字段注释'],
    ...
)[comment 表注释]

```



#### DML



#### DQL



#### DCL