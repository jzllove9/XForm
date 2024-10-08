---
group:
  title: Essentials
  order: 0
order: 6
toc: content
mobile: false
---


# 数组对象

有时候我们希望表单生成数组对象结构，例如，需要录入一个组织信息，包括组织姓名和组织成员。其中需要对组织成员的姓名和性别进行数据维护，操作包括增删改查。

因此，我们希望得到如下数据：

``` json
{
  "organizationName": "",
  "member": [
    {
      "name": "",
      "sex": ""
    },
    {
      "name": "",
      "sex": ""
    }
  ]
}
```

要描述该结构，需要使用 `ArrayList` 组件。

## 实现数组对象

schema 配置如下：

```js {8,11}
const schema = {
  organizationName: {
    c: 'TextField',
    xs: 12,
    label: 'Organization Name',
  },
  member: {
    c: 'ArrayList',
    xs: 12,
    label: 'Member',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: 'Sex',
        options: ['male', 'female'],
      },
    },
  },
};
export default schema;
```

代码解释：

* `ArrayList` 是一个专门实现数组对象的组件，内部嵌套了 XForm 标准的 `schema`，用来表达数组元素，每一个对象内部的数据结构和表单组件。
* 除了组件的基础数据录入能力，该组件还内置了排序、增加、删除功能。

完整示例：

<code src="./examples/array" compact background="#fff"></code>



## 数组对象的校验与联动
校验和联动，依然是使用 `rule` 和 `onChange` 来实现，只是 XFormEvents 的方法中传递路径参数会变的复杂。

尽管你可以使用 `member[3].name` 这样的路径来定位到数据和组件，但在 `schema` 的路径描述中很难描述当前操作索引，尤其是在类似 `organization[1].group[2].member[0].name` 这种复杂的路径中准确定位。

我们引入了 `prefixPath` 概念，你可以像这样 `${prefixPath}.name` 来在数组表单的局部 `schema` 表单中进行定位。

代码示例：

<code src="./examples/arrayValidation" compact background="#fff"></code>
