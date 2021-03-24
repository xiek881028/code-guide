# 图片

该文档主要的设计目标是统一图片导入和使用的一致性和可维护性。

## 原则

在保证视觉效果的基础上，为加快加载速度减少传输量，图片体积越小越好。

## 标注说明

- <font color="#f0c929">[建议]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有一定帮助，不做强制要求；
- <font color="#ff7171">[质量]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有较大帮助。必要时会采用`eslint`进行检查。

### 图片命名

- <font color="#ff7171">[质量]</font> 图片命名建议以以下顺序命名：
**（mod\_）图片功能类别（必选）+图片模块名称（可选）+其他区别信息（可选）+图片精度（可选）**

  - 图片功能类别
    - mod\_：是否公共，可选
    - icon：图标
    - logo：Logo 类
    - btn：按钮
    - bg：可平铺或背景
    - ...
  - 图片模块名称
    - userinfo：用户信息
    - goodslist：商品列表
    - goodsinfo：商品信息
    - ...
  - 图片精度：
    - 普清：@1x
    - Retina：@2x | @3x
    - ...

  例如：

  ```bash
  // 公共的用户信息删除箭头图标
  mod_icon_userinfo_del_arrow.png

  // 商品信息普清背景图
  bg_goodsinfo@1x.jpg
  ```

### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

- <font color="#ff7171">[质量]</font>优先考虑 JPEG 格式
- <font color="#ff7171">[质量]</font>尽量不适用 PNG，PNG8 色味太低，PNG24 压缩率低，文件体积大

### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起装饰作用的图片

- <font color="#ff7171">[质量]</font>有动图效果优先考虑 GIF 格式
- <font color="#ff7171">[质量]</font>图像颜色比较简单的，如纯色块线条图标，优先考虑用 CSS 实现，其次考虑用 PNG8 格式，避免使用 JPEG 格式
- <font color="#ff7171">[质量]</font>图像颜色丰富且图片文件不太大（< 40KB）或有半透明效果的优先考虑 PNG24 格式
- <font color="#ff7171">[质量]</font>图像颜色丰富且文件比较大的（> 40KB）优先考虑 JPEG 格式
- <font color="#f0c929">[建议]</font>兼容条件允许时，优先考虑 WebP 代替 PNG 和 JPEG 格式

> JPEG 图片条件允许，压缩至 60%品质即可，保证文字清晰。JPEG 导出时如果可以使用渐进式图片，优先使用渐进式

> 可使用以下网址进行在线图片压缩[optimizilla](https://imagecompressor.com/zh/)、[tinypng](https://tinypng.com/)、[onlineimagetool](https://www.onlineimagetool.com/zh/)，也可以使用npm包[imagemin](https://www.npmjs.com/package/imagemin)，或shell工具[kuma-imagemin](https://www.npmjs.com/package/kuma-imagemin)

### 图片使用

- <font color="#f0c929">[建议]</font> 当图片尺寸可以预见时，添加`width`和`height`属性，以避免页面抖动
- <font color="#f0c929">[建议]</font> 无下载需求的图片原则上采用 css 背景图实现
