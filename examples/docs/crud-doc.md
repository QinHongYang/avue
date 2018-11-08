## CRUD 文档

### Avue-crud Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | Array | — | — |
| option | 组件配置属性，详情见下面Option属性 | Object | — | — |
| table-loading | 表格等待框的控制 | Boolean | true / false  | false |
| before-open |  打开前的回调，会暂停 Dialog 的打开	function(done,type)，done 用于关闭 Dialog,type为当前窗口的类型 |	Function | — | — |
| before-close |  关闭前的回调，会暂停 Dialog 的关闭	function(done,type)，done 用于关闭 Dialog,type为当前窗口的类型|	Function | — | — |
| upload-before |  图片上传前的回调,会暂停图片上传 function(file,done)，done 用于继续图片上传|	Function | — | — |
| upload-after |  图片上传后的回调, function(res,done)，done 用于结束操作|	Function | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className,function({row, rowIndex}) | Function | - | - |
| span-method | 合并行或列的计算方法Function({ row, column, rowIndex, columnIndex }) | Function | - | - |
| summary-method | 自定义的合计计算方法Function({ columns, data }) | Function | - | - |


### Avue-crud Option Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 表格宽度 | Number | — | 100% |
| height | 表格高度 | Number | — | auto |
| header | 头部显隐 | Boolean | true / false | true |
| title | 表格标题 | String | — | 表格标题 |
| maxHeight | 表格最大高度 | Number | — | auto |
| calcHeight | 表格高度差（主要用于减去其他部分让表格高度自适应） | Number | — | auto |selection
| border | 表格边框 | Boolean | true / false  | false |
| selection | 行可勾选 | Boolean | true / false  | false |
| expand | 是否展开折叠行 | Boolean | true / false  | false |
| empty-text | 空数据时显示的文本内容，也可以通过 slot="empty" 设置 | String | -  | 暂无数据 |
| index | 是否显示表格序号（根据分页会自动计算，比如每页10行，到了第二页就会从11开始记数） | Boolean | true / false  | false |
| indexLabel | 序号的标题 | String | — | # |
| stripe | 是否显示表格的斑马条纹 | Boolean | true / false | false |
| showHeader | 是否显示表格的表头 | Boolean | true / false  | true |
| showSummary | 是否在表尾显示合计行 | Boolean | true / false  | false |
| sumColumnList | 表格合计需要配置的字段 | Array | -  | - |
| defaultSort | 表格的排序字段{prop: 'date', order: 'descending'}prop默认排序字段，order排序方式 | Object | — | - |
| align | 表格列齐方式 | String | left / center /right  | left |
| menu | 是否显示操作菜单栏 | Boolean | true / false  | true |
| menuWidth | 操作菜单栏的宽度 | Number | -  | 240 |
| menuAlign | 菜单栏对齐方式 | String | left / center /right  | left |
| searchsolt | 开启自定义搜索定义 | Boolean | true / false  | false |
| searchSize | 搜索框的大小 | String | small / mini  | small |
| searchShow | 首次加载是否显示搜索 | Boolean | true / false | true |
| page | 是否显示分页 | Boolean | true / false  | true |
| labelWidth | 弹出表单标题宽度 | Number | - | 110 |
| dialogWidth | 弹出表单的弹窗宽度 | String / Number | - | 50% |
| formWidth | 弹出表单宽度 | String / Number | - | 100% |
| dicData | 传入本次需要的静态字典（在column中dicData写对象key值即可加载） | Object | - | - |
| dicUrl | 字典的网络请求接口（例如配置/xxx/xx/{{key}},这样的格式，在column中dicData写加载的字典，自动替换key挂载请求） | String | - | - |
| addBtn | 添加按钮 | Boolean | true / false  | true |
| delBtn | 删除按钮 | Boolean | true / false  | true |
| editBtn | 删除按钮 | Boolean | true / false  | true |
| viewBtn | 查看按钮 | Boolean | true / false  | false |
| dateBtn | 日期组件按钮 | Boolean | true / false  | false |
| dateDefault | 日期控件默认的值 | Boolean | true / false  | false |
| menuType | 操作栏菜单按钮类型 | String | button / icon / text / menu | button |
| menuBtnTitle | 菜单按钮的文字 | String | -  | 功能 |
| serchBtn | 搜索显隐按钮（当column中有搜索的属性，或则searchsolt为true时自定义搜索启动起作用） | Boolean | true / false  | true |
| columnBtn | 列显隐按钮 | Boolean | true / false  | true |
| refreshBtn | 刷新按钮 | Boolean | true / false  | true |
| cellBtn | 表格单元格可编辑（当column中有搜索的属性中有cell为true的属性启用，只对type为select和input有作用) | Boolean | true / false  | true |
| selectClearBtn | 清空选中按钮（当selection为true起作用） | Boolean | true / false  | true |



### Avue-crud Type Attributes

:::tip
这是type属性可以配置的组件，当然你也可以自定义，参考第三方组件导入
:::

| 参数      | 类型          |
|---------- |-------------- |
| input | 输入框 |
| select | 选择框 |
| radio | 单选框 |
| phone | 手机号输入框 |
| checkbox | 多选框 |
| textarea | 文本框 |
| cascader | 级联框 |
| date | 日期框 |
| time | 时间框 |
| datetime | 日期时间框 |
| daterange | 日期范围 |
| timerange | 时间范围 |
| datetimerange | 日期时间范围 |
| week | 周 |
| month | 月 |
| year | 年 |
| dates | 多个日期 |
| password | 密码框 |
| switch | 开关框 |
| tree | 树框 |

###  Avue-crud format and valueFormat Attributes

使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。以下为可用的格式化字串，以 UTC 2017年1月2日 03:04:05 为例：

:::warning
请注意大小写
:::

| 格式 | 含义 | 备注 | 举例 |
|------|------|------|------|------|
| `yyyy` | 年 | | 2017 |
| `M`  | 月 | 不补0 | 1 |
| `MM` | 月 | | 01 |
| `W`  | 周 | 仅周选择器的 `format` 可用；不补0 | 1 |
| `WW` | 周 | 仅周选择器的 `format` 可用 | 01 |
| `d`  | 日 | 不补0 | 2 |
| `dd` | 日 | | 02 |
| `H`  | 小时 | 24小时制；不补0 | 3 |
| `HH` | 小时 | 24小时制 | 03 |
| `h`  | 小时 | 12小时制，须和 `A` 或 `a` 使用；不补0 | 3 |
| `hh` | 小时 | 12小时制，须和 `A` 或 `a` 使用 | 03 |
| `m`  | 分钟 | 不补0 | 4 |
| `mm` | 分钟 | | 04 |
| `s`  | 秒 | 不补0 | 5 |
| `ss` | 秒 | | 05 |
| `A`  | AM/PM | 仅 `format` 可用，大写 | AM |
| `a`  | am/pm | 仅 `format` 可用，小写 | am |
| `timestamp` | JS时间戳 | 仅 `value-format` 可用；组件绑定值为`number`类型 | 1483326245000 |

### Avue-crud Column Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 列名称 | String | — | - |
| prop | 列字段 | String | — | - |
| placeholder | 辅助语 | String | — | 请选择/请输入 + label |
| align | 对其方式 | String | left / center / right | left |
| width | 列宽度 | String | — | auto |
| minWidth | 列最小宽度 | String | — | auto |
| sortable | 排序 | Boolean | true / false | false |
| solt | 列自定义 | Boolean | true / false | false |
| overHidden | 超出隐藏 | Boolean | true / false | false |
| fixed | 冻结列 | Boolean | true / false | false |
| hide | 隐藏列 | Boolean | true / false | true |
| span | 表单栅列 | Number | - | 12 |
| readonly | 只读 | Boolean | true / false | false |
| type | 类型 | String | input / select / radio / checkbox  / textarea / cascader / date / time / datetime / daterange / timerange / datetimerange / week / month / year / dates / password / switch / tree / phone | input | - |
| disabled | 全部是否禁止 | Boolean | true / false | false |
| addDisabled | 表单新增时是否禁止 | Boolean | true / false | false |
| editDisabled | 表单编辑时是否禁止 | Boolean | true / false | false |
| visdiplay | 全部是否可见 | Boolean | true / false | true |
| addVisdiplay | 表单新增时是否可见 | Boolean | true / false | true |
| editVisdiplay | 表单编辑是否可见 | Boolean | true / false | true |
| viewVisdiplay | 表单查看是否可见 | Boolean | true / false | true |
| multiple | 多选（当type为select / tree 时） | Boolean | true / false | false |
| formsolt | 表单自定义 | Boolean | true / false | false |
| formWidth | 表单行高度 | Number / String | - | 50% |
| minRows | 最小行（当type为 textarea） | Number | - | 2 |
| maxRows | 最大行（当type为 textarea） | Number | - | 4 |
| prepend | 前面的辅助文字（当type为input） | String / Number | - | - |
| append | 后面的辅助文字（当type为input）） | String / Number | - | - |
| valueDefault | 表单的默认值 | Number / String | - | - |
| searchDefault | 搜索表单的默认值 | Number / String | - | - |
| searchMmultiple | 搜索表单的是否多选 | Boolean | true / false | false |
| searchFilterable | 是否可以输入搜索。 | Boolean | true / false | false |
| searchFilterMethod | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | - | - |
| format | 显示值时间格式（当type为 date / time / datetime / daterange timerange / datetimerange / week / month / year / dates  | - | - | - |
| valueFormat | 真实值的时间格式（当type为 date / time / datetime / daterange timerange / datetimerange / week / month / year / dates） | - | - | - |
| precision | 数字框输入精度（当type为 number 时） | Number | - | 2 |
| startPlaceholder | 日期范围开始占位符 | String | - | - |
| endPlaceholder | 日期范围结束占位符 | String | - | - |
| formHeight | 表单行高度 | Number | - | auto |
| clearable | 表单清空 | Boolean | true / false | false |
| size | 表单大小 | String | small / mini | small |
| showClomnu | 是否加入动态现隐列 | Boolean | true / false | true |
| rules | 表单规则,参考ele表单规则配置 | Object | - | - |
| formatter |  用来格式化内容  | Function(row, value , label, column) | - | - |
| filterMultiple | 数据过滤的选项是否多选	 | Boolean | true / false | true |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | - | - |
| filterMethod | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | - | - |

### Avue-crud Events

| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| row-click | 当某一行被点击时会触发该事件 | row, event, column |
| row-dblclick | 当某一行被双击时会触发该事件 | row, column |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| current-change | 切换页面时触发该事件 | page |
| refresh-change | 点击刷新按钮触发该事件 | page |
| size-change | 页面每页显示的条数触发该事件 | pageSize |
| current-row-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlightCurrentRow 属性为true | currentRow, oldCurrentRow |
| sort-change | 调用排序后触发该事件 | list |
| search-change | 点击搜索后触发该事件 | params |
| search-reset | 清空搜索回调方法 | - |
| date-change | 表格日期回调方法 | date |
| row-update | 编辑数据后确定触发该事件 | row, index, done, loading |
| row-save | 新增数据后点击确定触发该事件 | row, done, loading  |
| row-del | 行数据删除时触发该事件 | row, index |

### Avue-crud Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| toggleSelection | 用于多选表格，切换所有行的选中状态。 |  |
| clearValidate | 清空表格钟表单验证。 |  |
| selectClear | 用于多选表格，清空用户的选择。 |  |
| searchReset | 清空搜索栏目的值 |  |
| rowAdd | 打开表单新增窗口 |  |
| rowEdit | 打开表单编辑窗口 | row, index |
| rowCell | 打开行编辑 | row, index |
| resetForm | 清空表单数据 |  |

### Avue-crud Scoped Slot

| name | 说明 |
|------|--------|
| 列的名称 | 列自定义列的内容，参数为 { row, label, dic, $index } |
| 列表单的名称+Form(nameForm) | 表单自定义列的内容，参数为 { row, label, dic, $index } |
| expand | 折叠板的自定义内容,参数为 { row, label, dic, $index } |
| menu | 菜单的操作按钮自定义内容,参数为 { row, label, dic, $index } |
| menuForm | 表单操作按钮的自定义内容,参数为 { row, label, dic, $index } |
| menuLeft | 表格头部左侧内容 |
| menuRight | 表格头部右侧内容 | 
| menuBtn | 操作栏目下拉菜单自定义(要用el-dropdown-item组件包裹起来),参数为 { row, label, dic, $index }  |
| search | 搜索栏目自定义内容 |
| empty | 暂无数据的自定义卡槽 |
| searchMenu | 搜索栏目菜单自定义内容 |