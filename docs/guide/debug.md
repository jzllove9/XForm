---
order: 3
toc: content
mobile: false
---

# Debug Panel

时时查看表单生成的最终数据，以及表单的状态，只需要在组件上增加一个 `debug` 参数：

``` js | pure {6}
export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
    debug
  />
));
```

以下是完整示例：

<code src="./examples/debug" compact background="#fff"></code>


