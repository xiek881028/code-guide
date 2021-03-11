# css 规范

该文档主要的设计目标是统一 css 的一致性和可维护性。格式样式统一使用[Prettier](https://prettier.io/)默认风格

虽然本文档是针对 CSS 设计的，但是在使用各种 CSS 的预编译器(如 less、sass、stylus 等)时，适用的部分也应尽量遵循本文档的约定。

## 代码风格

### 文件

_\[强制]_ `css`文件使用`utf-8`编码

### 命名

1. _\[强制]_ 命名统一使用英文，禁止使用特殊字符
2. _\[强制]_ 样式不能包含`ad`、`gg`、`guanggao`、`ads`等含有广告含义的关键词，避免被浏览器拓展、插件屏蔽
3. _\[强制]_ 名称之间使用`-`or`_`(讨论)分割
4. _\[建议]_ 类名需要语义化，命名词穷了可以试下这个工具[codelf](https://unbug.github.io/codelf/)（可能需要科学上网）

> 全局样式必须以 global 的首字母`g_`开头

命名示例：

| ClassName  | 含义         |
| ---------- | ------------ |
| arrow      | 箭头图标     |
| bg         | 含义         |
| bar        | 栏（工具类） |
| crumb      | 面包屑       |
| btn        | 按钮         |
| title      | 标题         |
| chart      | 图表         |
| clearfix   | 清除浮动     |
| col        | 列           |
| error      | 错误         |
| hide       | 隐藏         |
| hightlight | 高亮         |
| icon       | 图标         |
| popup      | 弹窗         |

### 缩进、空格与空行

- _\[强制]_ 统一使用 2 个空格进行代码缩进
- _\[强制]_ 在规则声明的左大括号 `{` 前加上一个空格
- _\[强制]_ 在属性的冒号 `:` 后面加上一个空格，前面不加空格
- _\[强制]_ 规则声明的右大括号 `}` 独占一行
- _\[强制]_ 在一个规则声明中应用了多个选择器时，每个选择器独占一行
- _\[建议]_ 规则声明之间用空行分隔开
- _\[强制]_ 统一采用展开格式书写样式。即一行只有一个样式属性，属性定义后必须以分号结尾

Bad

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}
.no,
.nope,
.not_good {
  // ...
}
#lol-no {
  // ...
}
```

Good

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

### 选择器

1. _\[强制]_ 无充分原因，禁止使用通用选择器`*`，使用了需注释写明原因
2. _\[强制]_ 无充分原因，禁止使用 id 选择器书写样式，书写了需注释写明原因
3. _\[强制]_ 使用新型选择器时需要注意浏览器兼容性
4. _\[强制]_ 应尽量避免对纯元素选择器设定样式，避免样式污染

Bad

```css
// 后期迭代有可能会在.userinfo加入新的span标签，会造成样式污染，且层级较深时，排查困难，不利于维护
.userinfo span {
  display: block;
}
```

Good

```css
.userinfo .name {
  display: block;
}
```

## 值与单位

### 文本

_\[强制]_ css 属性值需要用到引号时，统一使用单引号

### 数值

_\[强制]_ 当数值为 0 - 1 之间的小数时，省略整数部分的 0

### url

_\[强制]_`url()`函数中的路径必须加引号

### 颜色

_\[强制]_ 颜色值可以缩写时，必须使用缩写形式

Bad

```css
.success {
  color: #aaccaa;
}
```

Good

```css
.success {
  color: #aca;
}
```

_\[强制]_ 颜色不允许使用命名色值

Bad

```css
.success {
  color: red;
}
```

Good

```css
.success {
  color: #c00;
}
```

_\[强制]_ 颜色色值统一采用英文小写

## 文本编排

### 字体

_\[强制]_`font-family`属性中字体族名称应使用英文`family name`，如有空格，放在引号中

| 字体            | 操作系统 | family name       |
| --------------- | -------- | ----------------- |
| 宋体 (中易宋体) | Windows  | SimSun            |
| 微软雅黑        | Windows  | Microsoft YaHei   |
| 华文黑体        | Mac/iOS  | STHeiti           |
| 文泉驿正黑      | Linux    | WenQuanYi Zen Hei |

### 字号

_\[强制]_ 需要在 windows 平台显示的中文内容，其字号最小为`12px`

### 行高

_\[强制]_`line-height`在定义文本段落时，应使用数值

## 兼容性

### Hack

_\[强制]_ 对于需要添加`hack`时尽可能采取其他方式解决。如需使用`hcak`，必须在所在行注释标明版本以及作用
