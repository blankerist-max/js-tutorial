# 01. 變數與型別

::: tip 這篇你會學到
- 什麼是變數，以及 `let`、`const`、`var` 的差別
- JavaScript 有哪些資料型別，怎麼用 `typeof` 查看
- 初學者最常踩到的 4 個坑
:::

::: info 怎麼跟著練習
在瀏覽器按 `F12`（Mac 是 `Cmd + Option + J`），切換到 **Console** 分頁，就可以直接輸入 JavaScript 並看到結果。每個範例都建議**自己打一次**，不要只用複製貼上。
:::

## 什麼是變數？

變數就像一個**貼了名字的盒子**，可以把資料放進去，之後用名字把它拿出來。

```js
let name = '小明'
console.log(name) // 小明
```

- `let`：宣告一個變數（「我要一個新盒子」）
- `name`：變數名稱（盒子上的標籤）
- `=`：把右邊的值**放進**左邊的變數，這裡不是數學的「等於」
- `'小明'`：放進去的值

## `let`、`const`、`var` 有什麼不同？

### `let`：之後可以換內容

```js
let score = 60
score = 85        // 可以重新賦值
console.log(score) // 85
```

### `const`：之後不能換內容

```js
const pi = 3.14159
pi = 3 // ❌ TypeError: Assignment to constant variable.
```

### `var`：舊的寫法，現在不建議使用

`var` 是 2015 年以前唯一的宣告方式。它的行為比較容易出乎意料（例如沒有區塊範圍），現代的程式碼幾乎都改用 `let` 和 `const`。你在網路上的舊教學會看到它，知道它存在就好。

::: tip 該用哪一個？
**預設用 `const`，確定之後需要改變的才用 `let`。** 這樣讀程式的人一看就知道哪些值會變、哪些不會。
:::

## 變數命名規則

```js
let userName = 'Amy'   // ✅ 推薦：小駝峰命名（camelCase）
let user_name = 'Amy'  // ✅ 可以，但 JS 社群較少用
let $price = 100       // ✅ 可以用 $ 和 _ 開頭
let 2nd = 'x'          // ❌ 不能用數字開頭
let let = 'x'          // ❌ 不能用保留字
```

另外，JavaScript **區分大小寫**：`name` 和 `Name` 是兩個不同的變數。

## 資料型別

JavaScript 的值分成兩大類：

### 原始型別（Primitive）

| 型別 | 說明 | 範例 |
|---|---|---|
| `string` | 文字 | `'你好'`、`"hello"`、`` `hi` `` |
| `number` | 數字（整數和小數都是） | `42`、`3.14`、`-7` |
| `boolean` | 真或假 | `true`、`false` |
| `undefined` | 宣告了但還沒給值 | `let x` 之後的 `x` |
| `null` | 刻意表示「沒有值」 | `let user = null` |
| `bigint` | 非常大的整數 | `9007199254740993n` |
| `symbol` | 獨一無二的識別值 | `Symbol('id')` |

初學階段先熟悉前五種就夠了，`bigint` 和 `symbol` 之後用到再學。

### 物件型別（Object）

除了原始型別以外，其他都是物件，例如陣列、物件、函式：

```js
const fruits = ['蘋果', '香蕉']          // 陣列
const user = { name: 'Amy', age: 20 }  // 物件
```

### 用 `typeof` 查看型別

```js
console.log(typeof 'hello')    // string
console.log(typeof 42)         // number
console.log(typeof true)       // boolean
console.log(typeof undefined)  // undefined
console.log(typeof [1, 2])     // object
console.log(typeof { a: 1 })   // object
```

### 字串的三種寫法

```js
const a = '單引號'
const b = "雙引號"
const age = 20
const c = `我今年 ${age} 歲` // 反引號：可以用 ${} 把變數放進字串
console.log(c) // 我今年 20 歲
```

反引號（`` ` ``，鍵盤左上角 `Esc` 下面那一顆）寫出來的字串叫做**樣板字面值（template literal）**，組合文字時非常好用。

## 常見錯誤 ⚠️

### 坑 1：`const` 陣列竟然可以 `push`？

```js
const list = [1, 2]
list.push(3)
console.log(list) // [1, 2, 3]  ← 沒有報錯！

list = [9] // ❌ TypeError: Assignment to constant variable.
```

**原因：** `const` 鎖住的是「變數指向哪一個東西」，不是「那個東西的內容」。`push` 是修改同一個陣列的內容，所以可以；`list = [9]` 是讓變數改指向另一個新陣列，所以不行。

### 坑 2：宣告之前就使用

```js
console.log(count) // ❌ ReferenceError: Cannot access 'count' before initialization
let count = 1
```

用 `let` 和 `const` 宣告的變數，在宣告那一行**之前**都不能使用。養成習慣：**先宣告，再使用**。

### 坑 3：字串加數字

```js
console.log('5' + 1) // 51   ← 字串接起來了
console.log('5' - 1) // 4    ← 卻又變成數字相減
console.log(Number('5') + 1) // 6  ← 先轉成數字才是正確做法
```

`+` 遇到字串時會變成「接起來」，其他運算子則會嘗試把字串轉成數字。從表單或 `prompt()` 拿到的值都是字串，計算前記得用 `Number()` 轉換。

### 坑 4：`typeof null` 是 `'object'`

```js
console.log(typeof null) // object
```

這是 JavaScript 早期設計留下的錯誤，為了不讓舊網站壞掉，一直沒有修正。要判斷是不是 `null`，直接用 `value === null`。

### 加碼：`0.1 + 0.2` 不等於 `0.3`

```js
console.log(0.1 + 0.2)          // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3)  // false
```

這不是 JavaScript 的錯，大部分程式語言用的小數格式都有這個精度問題。處理金額時，常見做法是用「分」為單位的整數來計算。

## 小練習

先自己寫，寫完再展開答案對照。

**練習 1：** 宣告一個不會改變的變數 `birthYear`，值是你的出生年份；再宣告一個會改變的變數 `currentYear`，值是今年。算出你的年齡並用樣板字面值印出「我今年 X 歲」。

::: details 參考答案
```js
const birthYear = 2000
let currentYear = 2026
const age = currentYear - birthYear
console.log(`我今年 ${age} 歲`) // 我今年 26 歲
```
:::

**練習 2：** 不要執行，先猜猜看下面每一行會印出什麼，再到 Console 驗證。

```js
console.log(typeof '42')
console.log('3' + 4 + 5)
console.log(3 + 4 + '5')
console.log(typeof null)
```

::: details 參考答案
```
string   ← 有引號就是字串
345      ← '3' + 4 先變成 '34'，再接上 5
75       ← 3 + 4 先算出 7，再接上 '5'
object   ← 歷史遺留問題
```
重點：`+` 是**由左到右**一次算一個，遇到字串之後就都變成接字串了。
:::

**練習 3：** 下面的程式哪一行會出錯？為什麼？

```js
const colors = ['紅']
colors.push('藍')
colors = ['綠']
```

::: details 參考答案
第 3 行會出現 `TypeError`。`push` 只是修改同一個陣列的內容，但 `colors = ['綠']` 是要讓 `const` 變數改指向新陣列，這是不允許的。
:::

## 延伸閱讀

- [MDN：let](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)
- [MDN：const](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/const)
- [MDN：JavaScript 資料型別與資料結構](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures)
