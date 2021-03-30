# React 规范

该文档主要的设计目标是统一 js 的一致性和可维护性，补充 react 专属部分。

## 标注说明

- <font color="#16c79a">[风格]</font>：表示该规范是`格式风格`类型，可以使用[prettier](https://prettier.io/)自动格式化，可无需关注；
- <font color="#f0c929">[建议]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有一定帮助，不做强制要求；
- <font color="#ff7171">[质量]</font>：表示该规范是`代码质量`类型，书写时需要注意，对于提升代码质量有较大帮助。必要时会采用`eslint`进行检查。

## 使用约定

### 文件组织

- <font color="#ff7171">[质量]</font> 同一目录下不得拥有同名的`.js`和`.jsx`文件
- <font color="#ff7171">[质量]</font> 组件文件使用一致的`.js`或 `.jsx`。后缀禁止部分组件使用`.js`，部分组件使用 `.jsx`
- <font color="#f0c929">[建议]</font> 每一个文件以`export default`的形式暴露一个组件
  > 允许一个文件中存在多个不同的组件，但仅允许通过`export default`暴露一个组件，其它组件均定义为内部组件。
- <font color="#f0c929">[建议]</font> 原则上单个组件内`state`数量不应超过`10`个，如果`state`数量过多，应考虑合并`state`或拆分成新的组件。如果无法调整，应注释说明情况
  > 过多的`state`会使组件过于庞大难以阅读，也会增加后续人员的维护难度

### 命名规则

- <font color="#f0c929">[建议]</font> 组件名称与文件名称保持相同。同时组件名称应当能体现出组件的功能，以便通过观察文件名即确定使用哪一个组件
- <font color="#f0c929">[建议]</font> 文件名使用帕斯卡命名. 如`ReservationCard.jsx`
- <font color="#ff7171">[质量]</font> React 模块名使用帕斯卡命名，实例使用骆驼式命名。 eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx
  // bad
  import reservationCard from './ReservationCard';

  // good
  import ReservationCard from './ReservationCard';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

### 对齐

- <font color="#16c79a">[风格]</font> 遵循以下 JSX 语法的对齐风格. eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

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

- <font color="#16c79a">[风格]</font> 自闭合的标签前要加一个空格. eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces), [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

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

- <font color="#16c79a">[风格]</font> 不要在 JSX 的花括号里边加空格. eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

  ```jsx
  // bad
  <Foo bar={ baz } />

  // good
  <Foo bar={baz} />
  ```

### 属性

- <font color="#f0c929">[建议]</font> 属性名使用小驼峰

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

- <font color="#16c79a">[风格]</font> 对于多属性需要换行，从第一个属性开始，每个属性一行

  ```jsx
  // bad
  <SomeComponent longProp={longProp} anotherLongProp={anotherLongProp} />

  // good
  <SomeComponent
    longProp={longProp}
    anotherLongProp={anotherLongProp}
  />
  ```

- <font color="#f0c929">[建议]</font> 当属性值为 true 时可以省略. eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

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

- <font color="#f0c929">[建议]</font> `<img>` 标签总是添加 `alt` 属性. eslint: [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

  ```jsx
  // bad
  <img src="hello.jpg" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />

  // good
  <img src="hello.jpg" alt="" />
  ```

- <font color="#f0c929">[建议]</font> 避免使用数组的index来作为属性key的值，推荐使用唯一ID ([为什么](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

### 圆括号

- <font color="#16c79a">[风格]</font> 当 JSX 标签超过一行时使用圆括号包裹. eslint: [react/wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

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

- <font color="#ff7171">[质量]</font> 没有子元素的标签需要自闭合。 eslint:[react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

  ```jsx
  // bad
  <Foo className='stuff'></Foo>

  // good
  <Foo className='stuff' />
  ```

- <font color="#16c79a">[风格]</font> 如果组件包含多行属性，在新的一行闭合标签. eslint:[react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

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
