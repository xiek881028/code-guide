# html 规范

该文档主要的设计目标是统一 html 的一致性和可维护性。

## 标注说明

- <font color="#16c79a">[风格]</font>：表示该规范是`格式风格`类型，可以使用[prettier](https://prettier.io/)自动格式化，可无需关注；
- <font color="#f0c929">[建议]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有一定帮助，不做强制要求；
- <font color="#ff7171">[质量]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有较大帮助。必要时会采用`eslint`进行检查。

## 代码风格

### 文件

- <font color="#ff7171">[质量]</font> `html`文件使用`utf-8`编码

### 缩进

- <font color="#16c79a">[风格]</font> html 缩进统一为`4`个空格

### 命名

- <font color="#f0c929">[建议]</font> 除非有特定的功能、组件要求等，禁止随意使用 id 来定义元素样式

### 标签

- <font color="#16c79a">[风格]</font> 标签必须合法且闭合、嵌套正确，标签名必须小写
- <font color="#f0c929">[建议]</font> 标签语法无错误，需要符合语义化
- <font color="#f0c929">[建议]</font> 标签的自定义属性以 data-开头，如：`<a href="#" data-num='18'></a>`

### 结构

- <font color="#f0c929">[建议]</font> 除非有特殊原因，禁止在内联元素内包裹块级元素
- <font color="#f0c929">[建议]</font> 元素嵌套建议每个块级元素独立一行，内联元素可选
- <font color="#f0c929">[建议]</font> 结构应尽量简洁，避免使用额外的冗余嵌套
- <font color="#f0c929">[建议]</font> 结构块之间应保留一个空行
- <font color="#f0c929">[建议]</font> html 的注释位于要注释的代码的上面，单独占一行

### 模板

- <font color="#f0c929">[建议]</font> 空白页面可以采用以下模板

  ```html
  <!DOCTYPE html>
  <html lang="zh">
    <head>
      <title>title</title>
      <meta charset="UTF-8" />
      <!-- 在IE下优先使用edge渲染，激活Chrome Frame -->
      <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
      <!-- 告诉如360等双核浏览器，优先使用webkit内核渲染 -->
      <meta name="renderer" content="webkit" />
      <meta name="author" content="caih <http://caih.com>" />
      <!-- 网页宽度适应手机屏幕，shrink-to-fit 为 IOS9 兼容设置 -->
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <!-- 启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <!-- "添加到主屏幕“后，全屏显示 -->
      <meta name="apple-touch-fullscreen" content="yes" />
      <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
      <meta name="format-detection" content="telephone=no,email=no" />
      <meta name='keywords' content='关键词,关键词'>
      <meta name='description' content='描述'>
    </head>
    <body></body>
  </html>

  ```

## header

### html

- <font color="#f0c929">[建议]</font> `html`标签需要注明`lang`
- <font color="#f0c929">[建议]</font> 需要标明所用字符集`<meta charset="UTF-8" />`

### title

- <font color="#f0c929">[建议]</font> 页面必须包含`title`标签声明标题

### favicon

- <font color="#f0c929">[建议]</font> 保证`favicon`必须可访问

### viewport

- <font color="#f0c929">[建议]</font> 必须指定页面`viewport`以保证对移动端最基本的支持
