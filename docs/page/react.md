# node 规范

该文档主要的设计目标是统一 js 的一致性和可维护性，补充react专属部分。

## 使用约定

### 文件组织

- _\[强制]_ 同一目录下不得拥有同名的`.js`和`.jsx`文件
- _\[强制]_ 组件文件使用一致的`.js`或 `.jsx`。后缀禁止部分组件使用`.js`，部分组件使用 `.jsx`
- _\[强制]_ 每一个文件以`export default`的形式暴露一个组件
  > 允许一个文件中存在多个不同的组件，但仅允许通过export default暴露一个组件，其它组件均定义为内部组件。

### 命名规则

- _\[强制]_ 组件名称与文件名称保持相同。同时组件名称应当能体现出组件的功能，以便通过观察文件名即确定使用哪一个组件
- _\[强制]_ 组件名采用大驼峰命名，遵守`react`对自定义组件调用的建议. eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

### 对齐

- _\[强制]_ 遵循以下JSX语法的对齐风格. eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

  ```jsx
  // bad
  <Foo superLongParam='bar'
      anotherSuperLongParam='baz' />

  // good
  <Foo
    superLongParam='bar'
    anotherSuperLongParam='baz'
  />

  // if props fit in one line then keep it on the same line
  <Foo bar='bar' />

  // children get indented normally
  <Foo
    superLongParam='bar'
    anotherSuperLongParam='baz'
  >
    <Quux />
  </Foo>

  // bad
  {showButton &&
    <Button />
  }

  // bad
  {
    showButton &&
      <Button />
  }

  // good
  {showButton && (
    <Button />
  )}

  // good
  {showButton && <Button />}
  ```

### 空格

- _\[强制]_ 自闭合的标签前要加一个空格. eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces), [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

  ```jsx
  // bad
  <Foo/>

  // very bad
  <Foo                 />

  // bad
  <Foo
  />

  // good
  <Foo />
  ```

- _\[强制]_ 不要在 JSX 的花括号里边加空格. eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

  ```jsx
  // bad
  <Foo bar={ baz } />

  // good
  <Foo bar={baz} />
  ```

### 属性

- _\[强制]_ 属性名使用小驼峰

  ```jsx
  // bad
  <Foo
    UserName='hello'
    phone_number={12345678}
  />

  // good
  <Foo
    userName='hello'
    phoneNumber={12345678}
  />
  ```

- _\[强制]_ 对于多属性需要换行，从第一个属性开始，每个属性一行

  ```jsx
  // bad
  <SomeComponent longProp={longProp} anotherLongProp={anotherLongProp} />

  // good
  <SomeComponent
    longProp={longProp}
    anotherLongProp={anotherLongProp}
  />
  ```

- _\[建议]_ 当属性值为true时可以省略. eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

  ```jsx
  // bad
  <Foo
    hidden={true}
  />

  // good
  <Foo
    hidden
  />

  // good
  <Foo hidden />
  ```

### 圆括号

- _\[强制]_ 当 JSX 标签超过一行时使用圆括号包裹. eslint: [react/wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

  ```jsx
  // bad
  render () {
    return <MyComponent className='long body' foo='bar'>
            <MyChild />
          </MyComponent>
  }

  // good
  render () {
    return (
      <MyComponent className='long body' foo='bar'>
        <MyChild />
      </MyComponent>
    )
  }

  // good, when single line
  render () {
    const body = <div>hello</div>
    return <MyComponent>{body}</MyComponent>
  }
  ```

### 标签

- _\[强制]_ 没有子元素的标签需要自闭合

  ```jsx
  // bad
  <Foo className='stuff'></Foo>

  // good
  <Foo className='stuff' />
  ```

- _\[强制]_ 如果组件包含多行属性，在新的一行闭合标签. eslint:[react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

  ```jsx
  // bad
  <Foo
    bar='bar'
    baz='baz' />

  // good
  <Foo
    bar='bar'
    baz='baz'
  />
  ```
