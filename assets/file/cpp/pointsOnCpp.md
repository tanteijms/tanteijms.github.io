# cout

```cpp
cout << age, pi, grade, isPassed << endl;这里endl提示“无法确定需要哪个函数模板什么意思”，我写了using namespace std;
```

这个问题是因为你在使用 `cout` 时，使用了逗号 `,` 分隔了多个输出项，这在 C++ 中是有问题的。逗号运算符的行为并不是你期望的输出多个变量，而是按照顺序执行并返回最后一个值。

### **问题所在**：

```cpp
cout << age, pi, grade, isPassed << endl;
```

这里使用了逗号运算符 `,`，它的作用是依次执行每个表达式，但是它返回的只是最后一个表达式的值（在这个例子中是 `isPassed`），所以 `cout` 并不会依次输出每个变量。实际上，这段代码并没有按照你的预期执行。

### **正确的写法**：

你应该将每个输出项分开，使用多个 `<<` 操作符，而不是逗号。正确的写法如下：

```cpp
cout << age << " " << pi << " " << grade << " " << isPassed << endl;
```

### **解释**：

*   `<<` 是 C++ 中流输出操作符，用于将数据输出到标准输出流（`cout`）。
*   每次输出一个值时，使用 `<<` 将其连接起来，逐个输出。
*   `" "` 用来在每个输出项之间加一个空格（如果需要的话）。

### **完整示例**：

```c
#include <iostream>
using namespace std;

int main() {
    int age = 20;
    double pi = 3.14159;
    char grade = 'A';
    bool isPassed = true;

    // 正确的输出方式
    cout << age << " " << pi << " " << grade << " " << isPassed << endl;

    return 0;
}
```

**输出结果**：

```cpp
20 3.14159 A 1
```

在C++中，要注意区分操作符的使用，特别是 `<<` 和 `,`，它们的含义是完全不同的！😊

# cin

我们来详细讨论一下 `cin >> a >> b;` 语句的含义。

### **`cin >> a >> b;`** 的作用：

`cin` 是 C++ 中标准库 `iostream` 提供的输入流对象，表示从标准输入流（通常是键盘）获取数据。`>>` 是流提取运算符，它从 `cin` 中提取数据并将其存储到对应的变量中。

### **解释：**

*   `cin >> a`：从标准输入读取一个值，并将其存储到变量 `a` 中。
*   `cin >> b`：接着从标准输入读取下一个值，并将其存储到变量 `b` 中。

这样，`cin >> a >> b;` 的含义是：

1.  首先读取一个整数并存储到 `a`。
2.  接着读取下一个整数并存储到 `b`。

### **为什么要使用 `cin >> a >> b;` 而不是 `cin >> a, b;`：**

在你最初写的代码 `cin >> a, b;` 中，使用了逗号运算符 `,`，其效果并不像你预期的那样是一次性输入两个变量。逗号运算符的作用是执行左边的表达式并返回右边的结果，因此：

*   `cin >> a` 会正确地从输入中读取一个值并将其存储到 `a` 中。
*   然后，逗号运算符会执行 `b`，但 `b` 没有被赋值，所以 `b` 根本不会被读取。

**总结：**

*   **`cin >> a >> b;`** 通过连续使用 `>>` 运算符来依次从标准输入读取多个变量。
*   **`cin >> a, b;`** 是错误的写法，因为逗号运算符的使用不符合从输入流中提取数据的意图。

# 输出的精度控制

让我详细讲解一下 `iomanip`、`fixed` 和 `setprecision`，以及它们是如何控制输出格式的。

### **`iomanip` 头文件**

`<iomanip>` 是 C++ 中一个用于控制输入输出格式的标准库头文件。它提供了一些流操控符，用来设置 `cin` 和 `cout` 的输入输出格式。例如，`setprecision`、`fixed`、`setw` 等都属于 `iomanip` 中的功能。

### **`fixed` 和 `setprecision` 的作用：**

1.  **`fixed`：**

    *   `fixed` 是一个格式控制符，用于控制浮点数（`float` 或 `double`）的输出格式。
    *   使用 `fixed` 后，输出的浮点数会以 **固定小数点格式** 显示，而不是使用 **科学计数法**（如果数值较大或较小时，默认情况下会使用科学计数法）。

    **示例：**

    ```
    float num = 3.1415926535;
    cout << num << endl;   // 默认会以科学计数法输出
    cout << fixed << num << endl;  // 使用 fixed 显示为固定小数点格式
    
    ```

    **输出结果：**

    ```
    cpp复制编辑3.14159   // 默认输出（科学计数法）
    3.141593  // 使用 fixed 输出（固定小数点格式）
    
    ```

    所以 `fixed` 改变了浮点数的输出形式，让它按照常见的小数形式输出，而不是科学计数法。
2.  **`setprecision(n)`：**

    *   `setprecision(n)` 用来指定输出的 **浮点数精度**，即小数点后显示的位数。
    *   如果你在使用 `fixed` 后调用 `setprecision(n)`，它会指定 **小数点后显示的位数**。

    **示例：**

    ```cpp
    cpp复制编辑float num = 3.1415926535;
    cout << fixed << setprecision(3) << num << endl;  // 输出小数点后3位
    
    ```

    **输出结果：**

    ```cpp
    3.142
    
    ```

    这里使用了 `setprecision(3)` 来控制小数点后面保留 3 位数字。

### **组合使用：**

*   `fixed` 和 `setprecision` 可以组合使用，以控制浮点数输出的格式。`fixed` 用来强制使用固定小数点格式，而 `setprecision` 用来设置小数位的数量。

**示例：**

```
cpp复制编辑#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    float pi = 3.1415926535;

    // 使用 fixed 和 setprecision 来控制输出
    cout << fixed << setprecision(2) << pi << endl;   // 保留2位小数
    cout << fixed << setprecision(4) << pi << endl;   // 保留4位小数

    return 0;
}

```

**输出结果：**

```
3.14   // 保留2位小数
3.1416 // 保留4位小数

```

### **总结：**

*   **`fixed`**：用于将浮点数输出格式化为固定小数点格式，避免使用科学计数法。
*   **`setprecision(n)`**：用于设置浮点数输出时的精度（即保留的小数位数）。当与 `fixed` 一起使用时，它控制的是小数点后保留的位数。

### **常见用法：**

```cpp
#include <iostream>
#include <iomanip>  // 包含 iomanip 头文件
using namespace std;

int main() {
    double value = 123.456789;

    // 设置精度并以固定格式显示浮点数
    cout << fixed << setprecision(3) << value << endl;  // 输出 123.457
    cout << fixed << setprecision(6) << value << endl;  // 输出 123.456789

    return 0;
}
```

通过这些格式控制符，你可以灵活地控制浮点数的输出格式，使得程序的输出更加精确和可读。

# **全局变量**：整个程序可用，但容易污染命名空间

全局变量（global variables）在程序的整个生命周期内都有效，并且可以在 **任何函数、任何文件** 中访问和修改，这带来了 **命名冲突、可读性下降和调试困难** 等问题。

## **影响代码的可维护性**

**全局变量的值可以在任何地方被修改**，这会导致代码的可读性下降，使得 **函数之间的依赖性增强**，难以排查错误。这与封装的初衷是相悖的

## **多线程环境下，全局变量可能导致数据竞争**

如果多个线程 **同时访问和修改** 一个全局变量，而没有加锁，就会发生 **数据竞争（Race Condition）**，导致 **未定义行为**。若非原子操作，就会数据竞争，导致线程之间未能完全实现想要实现的操作

## **如何避免全局变量的污染？**

### **1. 使用 `const` 限制全局变量的修改**

### **2. 使用 `static` 让全局变量仅在当前文件可见**

```cpp
static int fileScopeVar = 100;  // 仅限当前文件
```

### **3. 使用 namespace 避免命名冲突**

```cpp
namespace Math {
    int value = 10;
}

namespace Physics {
    int value = 20;
}

int main() {
    cout << Math::value << endl;   // 10
    cout << Physics::value << endl; // 20
}
```

📌 **不同 `namespace` 内的 `value` 互不干扰。**

### **4. 使用 `类` 或 `结构体` 包装全局变量**

```cpp
class Config {
public:
    static int maxUsers;
};
int Config::maxUsers = 100;

```

📌 **这样可以更清晰地组织变量，防止随意修改。**

# **C++ 的引用传递（Pass by Reference）**

### **1. 什么是引用传递？**

在 C++ 中，**引用传递（Pass by Reference）** 是指在函数参数中使用 **引用（`&`）**，让函数 **直接操作原变量**，而不是创建副本。这样可以：

*   **避免值传递时的拷贝开销**（尤其是对于大对象）
*   **允许函数修改原变量**

### **2. 引用传递 vs. 值传递**

| 传递方式                        | 关键字      | 作用           | 变量是否会被修改  |
| :-------------------------- | :------- | :----------- | :-------- |
| **值传递（Pass by Value）**      | `int x`  | 传递变量的 **拷贝** | ❌ 不会修改原变量 |
| **引用传递（Pass by Reference）** | `int &x` | 传递变量的 **别名** | ✅ 会修改原变量  |

***

## **3. 引用传递的语法**

```cpp
#include <iostream>
using namespace std;

// 使用引用传递
void modify(int &num) {  // num 是原变量的别名
    num += 10;  // 直接修改原变量
}

int main() {
    int a = 5;
    modify(a);  // 传递 a 的引用
    cout << "修改后的 a：" << a << endl;  // 输出 15
    return 0;
}
```

🔹 **说明：**

*   `int &num` 表示 `num` 是 `a` 的别名。
*   在 `modify()` 函数内部，修改 `num` **就是修改 `a` 本身**。

***

## **4. 为什么要用引用传递？**

### **✅ 1. 避免值传递的拷贝开销**

如果传递一个大对象，值传递会创建**完整的副本**，非常消耗内存。引用传递可以**避免拷贝，提高效率**。

```cpp
#include <iostream>
#include <vector>

using namespace std;

// 传递 vector 的引用，避免拷贝
void printVector(const vector<int> &v) {  
    for (int num : v) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5};
    printVector(numbers);  // 传递引用
    return 0;
}

```

🔹 **`const vector<int> &v`**

*   `const` 让 `v` **不能被修改**，保证安全性。
*   **避免拷贝，提高性能。**

***

### **✅ 2. 允许修改原变量**

```cpp
void doubleValue(int &x) {
    x *= 2;  // 直接修改 x
}

int main() {
    int num = 10;
    doubleValue(num);
    cout << num << endl;  // 输出 20
}

```

*   `int &x` 让 `x` 直接指向 `num`，所以 `x *= 2` 直接修改 `num`。

***

### **✅ 3. 适用于多个返回值**

C++ 的函数默认只能返回**一个值**，但可以用**引用传递多个值**：

```cpp
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 3, y = 5;
    swap(x, y);
    cout << x << " " << y << endl;  // 输出 5 3
}

```

*   `a` 和 `b` 互换，调用 `swap(x, y)` 后，`x` 和 `y` **真正交换了值**。

***

## **5. 常量引用 `const &`（防止修改）**

如果不希望函数修改变量，又想用引用传递避免拷贝，就用 **常量引用 `const &`**。

```cpp
void print(const int &num) {  // 不能修改 num
    cout << num << endl;
}

int main() {
    int a = 10;
    print(a);
}

```

🔹 **`const int &num`**

*   传递 `a` 的引用 **不会拷贝**，提高效率。
*   `const` **保证 `num` 不能被修改**。

***

## **6. 什么时候用引用传递？**

| **情况**                     | **推荐方式**                        |
| :------------------------- | :------------------------------ |
| 变量较小（如 `int`, `char`）      | **值传递 `int x`**                 |
| 变量较大（如 `vector`, `string`） | **引用传递 `const vector<int>& v`** |
| 需要修改变量                     | **引用传递 `int& x`**               |
| 仅读取变量                      | **常量引用 `const int& x`**         |

***

## **7. 总结**

✅ **引用传递的优势：**

*   **避免拷贝，提高效率**
*   **允许修改原变量**
*   **适用于多个返回值**
*   **可以使用 `const &` 防止修改**

📌 **记住：**

*   如果**不修改变量**，用 **`const &`**（提高效率）。
*   如果**需要修改变量**，用 **`&`**。
*   变量较小（`int`、`char`）时，用值传递 `int x` 影响不大。

# **默认参数**

在 C++ 中，函数可以定义**默认参数**，调用时如果不提供对应参数，就使用默认值。

```cpp
#include <iostream>
using namespace std;

// `b` 有默认值 10
int add(int a, int b = 10) {
    return a + b;
}

int main() {
    cout << add(5) << endl;   // 5 + 10 = 15
    cout << add(5, 20) << endl; // 5 + 20 = 25
}

```

📌 **关键点**：

*   **默认参数必须从右向左定义**，否则编译会报错。默认参数始终放在最后面
*   默认参数可以减少函数重载的需求。

# **字符串**，使用 `string` 类型📝

```cpp
#include <iostream>
#include <string>
using namespace std;

void greet(string msg = "Hello, World!");  // 声明

int main() {
    greet();           // 输出 "Hello, World!"
    greet("Hi, C++!"); // 输出 "Hi, C++!"
    return 0;
}

void greet(string msg) {  // 实现
    cout << msg << endl;
}

```

### **📌 解析**

1.  **为什么用 `string` 类型？**

    *   `string` 是 C++ STL 提供的标准字符串类型，比 C 风格的 `char*` 更安全、易用。
    *   `greet` 的参数 `msg` 需要存储字符串，所以 `string` 是最佳选择。
2.  **默认参数 `= "Hello, World!"`**

    *   在 `greet(string msg = "Hello, World!")` 中，如果调用 `greet();`，就会使用默认值 `"Hello, World!"`。
    *   如果调用 `greet("Hi, C++!");`，`msg` 取 `"Hi, C++!"`，默认值被覆盖。

# 全局变量

```cpp
#include <iostream>
using namespace std;

int x = 5; // 全局变量

void test() {
    int x = 10;
    cout << x << " ";
}

int main() {
    cout << x << " ";
    test();
    cout << x << endl;
    return 0;
}
```

输出： 5 10 5

最后cout << x << endl时访问全局变量

# 递归调用，要累加

```cpp
int sum(int n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum(n - 1); // ✅ 正确的递归累加
    }
}
```

# 优化Fibonacci计算

## **✅ 解决方案：优化 Fibonacci 计算**

### **方法 1：记忆化递归（O(n)）**

使用 **数组缓存已计算的值**，避免重复计算：

```cpp
#include <iostream>
using namespace std;

const int N = 100;  // 足够大的缓存数组
int memo[N] = {0};  // 初始化所有值为 0

int fib(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (memo[n] != 0) return memo[n];  // 如果已计算，直接返回
    return memo[n] = fib(n - 1) + fib(n - 2);
}

int main() {
    cout << fib(10) << endl; // 输出 55
}

```

🔹 **时间复杂度 O(n)**，只计算每个 `fib(i)` **一次**！

# 指针

📌 **指针注意点**

*   `int *p = nullptr;` 使用 `nullptr` 进行初始化，避免野指针。
*   访问空指针（`nullptr`）会导致 **段错误（Segmentation Fault）**。

# 引用Reference

引用是 **变量的别名**，必须在声明时初始化，并且不能更改绑定的变量。

📌 **引用的基本用法**

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int &ref = x;  // ref 是 x 的引用

    ref = 20;  // 修改 ref 其实就是修改 x
    cout << "x 的值: " << x << endl;  // 输出 20

    return 0;
}
```

# new & delete

## **🌟 `new` / `delete`（动态内存管理）**

C++ 允许在运行时动态分配和释放内存，避免数组大小的固定限制。

📌 **动态分配单个变量**

```cpp
int *p = new int(10);  // 分配一个 int，值为 10
delete p;  // 释放内存
p = nullptr;  // 避免野指针

```

📌 **动态分配数组**

```cpp
int *arr = new int[5];  // 分配 5 个 int
delete[] arr;  // 释放数组

```

🔹 **`new` 分配的内存必须 `delete` 释放，否则会内存泄漏！**

# 动态数组

🚀 在 C++ 中，`new` 可以用来动态分配数组，而 **数组大小可以是变量**，这就是**动态数组**。

## **🌟 示例**

```cpp
#include <iostream>
using namespace std;

int main() {
    int x;
    cout << "请输入数组大小: ";
    cin >> x;

    int *arr = new int[x];  // 使用变量 x 分配动态数组
```

📌 **注意事项**

1.  **动态数组的大小可以是变量**，不像 C++98 之前的**静态数组**，必须用常量定义大小。
2.  **一定要 `delete[] arr;`**，否则会 **内存泄漏（Memory Leak）**！
3.  **C++ 推荐使用 `std::vector`** 代替原生指针数组，因为 `vector` 会自动管理内存。

## **🌟 `vector<int>` 替代动态数组（推荐）**

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int x;
    cout << "请输入数组大小: ";
    cin >> x;

    vector<int> arr(x);  // 使用 vector 自动管理内存

```

✅ `std::vector<int>` **更安全、更推荐**，不用担心 `new/delete` 造成的内存管理问题！🚀

# 类的定义以分号结尾

在 `class solution` 定义的结尾处。

在 C++ 中，类的定义需要以分号 `;` 结尾。因此，你的代码应该改为：

```cpp
class solution
{
public:
    int climbStairs(int n)
    {
        if (n <= 2)
            return n;
        int prev1 = 1, prev2 = 2, curr; // 1阶，一个方法；2阶，两个方法。
        // 状态转移方程是f(n)=f(n-1)+f(n-2)
        for (int i = 3; i <= n; i++)
        {
            curr = prev1 + prev2;
            prev1 = prev2; // prev1是n-2，更小的那个
            prev2 = curr;
        }
        return curr;
    }
}; // 这里需要分号

```

**总结：**\
✅ 类定义必须以分号 `;` 结束。

# 🌟C++11范围for **（Range-based for loop）**

C++11 引入了一种更简洁的 `for` 循环，称为 **范围 `for`（Range-based for loop）**，专门用于遍历**数组**和**容器（如 `vector`、`set`、`map` 等）**。

## **🌟 基本语法**

```cpp
for (元素类型 变量名 : 容器) {
    // 对变量名进行操作
}

```

✅ **特点**

*   **无需使用索引**，避免手动写 `i = 0; i < n; i++`
*   **自动取出容器内的元素**，简化代码
*   **只能用于** **遍历所有元素**，无法修改数组大小

## **🌟 示例 ：修改 `vector`（必须加 `&`）**

默认情况下，范围 `for` **传递的是拷贝**，如果你想修改 `vector` 里的值，必须使用 **引用 `&`**：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};

    // 用引用 & 遍历并修改元素
    for (int &x : arr) {
        x *= 2;  // 所有元素变成 2 倍，取地址后，x直接修改即可，类似引用（别名），而不是
    }
```

# std::String&#x20;

## 🌟 C++ 中 std::string 的用法详解 ++

++std::string 是 C++ 标准库中的字符串类型，相比 C 风格字符串（char\[]），它 更安全、更灵活、更易用，支持动态长度、字符串拼接、查找、子串操作等。

✅ 特点：
可以直接赋值，不像 char\[] 需要 strcpy
支持 `+` 拼接，不像 char\[] 需要 strcat
自动管理内存，不会像 char\[] 那样容易越界

## `cin`读取单个单词

```cpp
string name;
cout << "请输入你的名字：";
cin >> name;  // 只读取一个单词，遇到空格停止
```

✅ 注意：
cin 读取单个单词，遇到空格会停止输入。

## getline(cin, string) 读取一整行内容

```cpp
string sentence;
cout << "请输入一句话：";
getline(cin, sentence);  // 读取整行，包括空格
```

📌 cin 读取 int 之后再 getline() 读取字符串，为什么会跳过输入？
💡 问题的根源
在 C++ 里，cin 读取 整数（如 int）时 不会读取换行符 \n，但 getline(cin, str) 会读取整行（包括换行符）。
因此，如果先用 cin >> 读取 int，再用 getline() 读取字符串，就可能发生“跳过输入” 的问题。

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    string name;

    cout << "请输入你的年龄：";
    cin >> age;  // 读取 int，但换行符仍留在输入缓冲区

    cout << "请输入你的名字：";
    getline(cin, name);  // 直接读取输入缓冲区的换行符，导致 name 变为空字符串

    cout << "年龄：" << age << ", 姓名：" << name << endl;
    return 0;
}
```

✅ 解决方案：使用 cin.ignore()
cin.ignore() 用于丢弃输入缓冲区中的字符，避免 getline() 读取残留的换行符。

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    string name;

    cout << "请输入你的年龄：";
    cin >> age;
    cin.ignore();  // 清除输入缓冲区中的换行符

    cout << "请输入你的名字：";
    getline(cin, name);  // 这次 getline() 就能正确读取整行了

    cout << "年龄：" << age << ", 姓名：" << name << endl;
    return 0;
}
```

📌 cin.ignore() 详解
cin.ignore(n, char) 丢弃输入缓冲区中的字符，常用两种方式：

cin.ignore()（默认 n=1）：丢弃一个字符（通常是 \n）。
cin.ignore(100, '\n')：最多丢弃 100 个字符，直到遇到 \n（保证清空缓冲区）。
一般来说，cin.ignore() 就足够清除 \n 了，但如果有未知的额外输入，可以用 cin.ignore(100, '\n')。

cout << s.length() << endl;\
cout << s.size() << endl;
size和length等价

字符串比较：按字典序。从第一个字符开始比较

### **（5）查找子串**

```cpp
string s = "Hello World";
int pos = s.find("World");  // 查找 "World" 的位置
if (pos != string::npos) {
    cout << "找到 'World'，位置：" << pos << endl;
}

```

✅ **`find()` 返回子串起始位置**，找不到时返回 `string::npos`。

### **（6）截取子串**

```cpp
string s = "Hello World";
string sub = s.substr(6, 5);  // 从索引 6 开始，取 5 个字符
cout << sub << endl;  // World

```

✅ **`substr(start, length)`**

*   `start`：起始索引
*   `length`：子串长度

### **（7）删除、插入、替换**

```cpp
string s = "Hello World";
s.erase(5, 1);  // 删除索引 5 位置的 1 个字符（去掉空格）
cout << s << endl;  // HelloWorld

s.insert(5, " ");  // 在索引 5 插入空格
cout << s << endl;  // Hello World

s.replace(6, 5, "C++");  // 从索引 6 开始的 5 个字符替换成 "C++"
cout << s << endl;  // Hello C++

```

✅ **常用操作**

*   `erase(pos, len)`：从 `pos` 位置删除 `len` 个字符
*   `insert(pos, str)`：在 `pos` 位置插入 `str`

# **输入一行字符串，查找 `"abc"` 是否存在**

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string str;
    getline(cin, str);
    int pos = str.find("abc");
    if (pos != string::npos)
        cout << "找到，位置是：" << pos << endl;

    return 0;
}
```

**忽略大小写搜索（可选）**：如果希望不区分大小写查找 `"abc"`，可以先把 `str` 转小写：

```cpp
transform(str.begin(), str.end(), str.begin(), ::tolower);
```

# 反转字符串

**使用 `rbegin()/rend()` 迭代器**

```cpp
for (auto it = str.rbegin(); it != str.rend(); ++it)//通常推荐使用++it，前置递增
    cout << *it;
cout << endl;
```

这种写法利用 **反向迭代器**，更符合 C++ STL 风格。

## **1️⃣ `++it` vs. `it++` 的区别**

| 方式     | 作用                  | 效率                 | 返回值     |
| :----- | :------------------ | :----------------- | :------ |
| `++it` | **前置递增**：先增加，再返回新值  | **更快**（更高效）        | 递增后的迭代器 |
| `it++` | **后置递增**：先返回当前值，再增加 | **较慢**（返回旧值需要额外开销） | 递增前的迭代器 |

## **2️⃣ `++it` 更高效的原因**

**对于内置类型（如 `int`，`char`）**，`++it` 和 `it++` 差别不大，因为它们的递增操作代价几乎相同。

**但对于迭代器（如 `std::vector<int>::iterator`）或自定义对象**：

*   **`it++`（后置递增）** 需要创建一个**临时副本**，返回原始值，增加额外开销。
*   **`++it`（前置递增）** 直接递增，不创建副本，更高效。

### **🔹 模拟后置递增 (`it++`) 的实现**

```cpp
Iterator operator++(int)  // 后置递增
{
    Iterator temp = *this;  // 复制当前迭代器
    ++(*this);              // 递增当前迭代器
    return temp;            // 返回旧值
}
```

**⚠️ 额外开销**：

*   创建 `temp` 复制当前迭代器
*   递增 `*this`
*   返回 `temp`，导致额外的复制操作

### **🔹 模拟前置递增 (`++it`) 的实现**

```cpp
Iterator& operator++()  // 前置递增
{
    // 直接递增当前迭代器，不创建临时副本
    ++(*this);
    return *this;
}

```

**✅ 高效之处**：

*   **没有复制开销**
*   **直接修改自身，返回自身引用**
*   **性能更优**

## **🎯 总结**

| 用法     | 何时使用？          | 是否推荐？   |
| :----- | :------------- | :------ |
| `++it` | **一般情况下（更高效）** | ✅ 推荐    |
| `it++` | **需要用到递增前的值**  | ⚠️ 谨慎使用 |

### **✅ 记住**

💡 **使用 `++it`（前置递增）是最佳实践，除非明确需要 `it++`。🚀**

# **📌 反向迭代器（Reverse Iterator）**

C++ 的标准库提供了一种**反向迭代器（Reverse Iterator）**，可以用来从**容器的尾部向前遍历**。这在需要**倒序输出**或**逆序查找**时非常有用。

## **1️⃣ 反向迭代器的基本用法**

在 C++ 中，标准容器（如 `std::vector`、`std::string`、`std::list` 等）都提供了**反向迭代器**，其表示方法是：

*   `rbegin()` —— 指向**容器的最后一个元素**
*   `rend()` —— 指向**容器第一个元素的前一个位置**

### **🔹 示例：使用 `rbegin()` / `rend()` 逆序遍历字符串**

```cpp
#include <iostream>
#include <string>

using namespace std;

int main()
{
    string str = "hello";

    // 使用反向迭代器遍历字符串
    for (auto it = str.rbegin(); it != str.rend(); ++it)
    {
        cout << *it;
    }
    cout << endl;

    return 0;
}

```

**🔹 输出**

    olleh

**✅ 解析**

*   `str.rbegin()` 返回指向 `o` 的迭代器（最后一个字符）
*   `str.rend()` 指向 `h` 之前的位置，循环**不会**访问它
*   `++it` 让迭代器向前（即反向）移动。`++it` 是容器反向迭代器的特殊用法，单独记忆。而`++it` 直接递增，不会像后置一样创建一个临时副本，这样能够节省开支，更高效
*   rbegin和rend都是对begin和end的reverse，则前缀+r，方便记忆。begin和end是正向迭代器的参数
*   rend是第零号字符的前一个位置，end是第length-1号字符的后一个位置。对应

## **2️⃣ 反向迭代器 vs 正向迭代器**

### **🔹 例子：正向 vs 反向遍历**

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> v = {1, 2, 3, 4, 5};

    cout << "正向遍历: ";//对比熟悉一下这两个语法
    for (auto it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
    cout << endl;

    cout << "反向遍历: ";
    for (auto it = v.rbegin(); it != v.rend(); ++it)
        cout << *it << " ";
    cout << endl;

    return 0;
}
```

3️⃣ `reverse()` vs 反向迭代器

C++ 还提供了 `std::reverse()` 直接翻转数组或字符串：

在algorithm库里

```cpp
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main()
{
    string str = "hello";

    reverse(str.begin(), str.end());  // 直接翻转字符串
    cout << str << endl;  // 输出 "olleh"

    return 0;
}
```

如果只是想**一次性翻转整个序列**，`std::reverse()` 更加简单高效。\
如果需要**按需倒序遍历或操作**，使用 `rbegin()` / `rend()`。

# reverse()

### **🚀 `reverse()` 方法详解**

`reverse()` 是 C++ STL（标准模板库）中的一个函数，用于**原地**反转一个范围（如数组、`vector`、`string`等）。

## **📌 1. `reverse()` 的基本用法**

### **🔹 语法**

```cpp
void reverse(BidirectionalIterator first, BidirectionalIterator last);
```

左闭右开

*   **`first`**：要反转的范围的起始迭代器（包含）
*   **`last`**：要反转的范围的结束迭代器（不包含）
*   **返回值**：`reverse()` **没有返回值**，它是**原地修改**的，即直接修改原容器，不创建新对象。

## **📌 2. `reverse()` 反转数组**

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    reverse(arr, arr + n);  // 反转整个数组

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    return 0;
}
```

传入需要反转的数组范围的首、末地址

`reverse()` 函数不仅可以反转整个数组，还可以**反转数组的部分**。你只需要指定要反转的范围，即**传入两个迭代器（或指针）**，它们分别指向反转部分的开始和结束位置。

只要框定范围就可以。注意是左闭右开的

```cpp
reverse(arr + 2, arr + 5);  // 反转 arr[2] 到 arr[4]

```

\+2  +5是指针的，移位加法s

## **📌 3. `reverse()` 反转 `vector`**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> vec = {10, 20, 30, 40, 50};

    reverse(vec.begin(), vec.end());  // 反转整个 vector。左闭右开，则end()恰好指向的是最后一个元素的后一个位置

    for (int num : vec)
        cout << num << " ";

    return 0;
}
```

## **📌 4. `reverse()` 反转 `string`**

## **📌 5. `reverse()` 反转部分元素**

你也可以**只反转一部分范围。注意范围的确定是前包含后不包含的即可，左闭右开。**

## **📌 6. 使用 `reverse()` 结合 `rbegin()` 和 `rend()`**

如果想反转整个容器，你也可以用**反向迭代器** `rbegin()` 和 `rend()`：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> vec = {10, 20, 30, 40, 50};

    reverse(vec.rbegin(), vec.rend());  // 反转整个 vector

    for (int num : vec)
        cout << num << " ";

    return 0;
}

```

**🔹 输出**

    50 40 30 20 10

✅ **用 `rbegin()` 和 `rend()` 效果和 `reverse(vec.begin(), vec.end())` 一样，但更直观。**

呃但我感觉意义不明

## **📌 7. `reverse()` 与 `reverse_copy()` 的区别**

### **🔹 `reverse()`（原地反转）**

*   **直接修改原容器**，不会返回新对象。

### **🔹 `reverse_copy()`（拷贝反转）**

*   **不会修改原容器**，而是将结果复制到一个新的容器中。

✅ `reverse_copy()` 适用于不想修改原数组的情况！

# std::unordered\_map

```cpp
unordered_map<int, int> freq;

int x = nums[ri];
freq[x]++;

while (freq[x] > k)
{
	freq[nums[le]]--;
	le++;
}
```

unordered\_map很好用

# vector\<int> \&nums的长度

用nums.size()来获取

# 创建动态数组

```cpp
int* a = new int[x];
int a[] = new int[5];//只能用来创建静态数组
```

# 释放动态数组

```cpp
delete[] a;
```

# C++11范围for

**范围 `for` 不能用于普通指针**（`int* a`），它**只能用于 C++ 容器**（如 `std::vector`、`std::array`）。

*   &#x20;`std::vector<int>`，就可以正确使用范围 `for`，例如：

```cpp
vector<int> arr(x);  // 使用 vector 代替动态数组
for (int &val : arr) 
{
    cout << val << " ";
}
```

# 多维数组

## 土法，new\&delete

```cpp
#include <iostream>

using namespace std;

int main()
{
    int rows = 3, cols = 3;

    // 创建一个指针数组（每个指针指向一行）
    int **a = new int *[rows]; 

    // 为每一行分配内存
    for (int i = 0; i < rows; i++)
        a[i] = new int[cols];

    // 释放内存（必须先释放行，再释放指针数组）
    for (int i = 0; i < rows; i++)
        delete[] a[i];
    delete[] a;

    return 0;
}

```

## 优化：std::vector

```cpp
vector<vector<int>> a(rows, vector<int>(cols));
```

*   `vector<vector<int>> a(rows, vector<int>(cols));`

    *   直接创建一个 `rows × cols` 大小的二维数组，自动管理内存，不需要 `new/delete`。
*   **自动释放内存**

    *   `vector` 在超出作用域后会自动释放内存，不需要手动 `delete[]`。

# for(char \&x : arr\[i])

```cpp
for (char &x : arr[i])//传引用
        {
            if ((unsigned char)x >= 65 && (unsigned char)x <= 90)
                x += 32;
        }
```

传引用是很好的选择

# 初始化数组为0

#### **方法 1：使用 `new` 时加 `()` 进行值初始化**

```cpp
int *tag = new int[len]();  // 这样会把所有元素初始化为 0
```

✔ 适用于 **动态分配的数组**，保证所有元素都变成 `0`。

#### **方法 2：使用 `std::fill` 填充 0**

```cpp
#include <algorithm>
int *tag = new int[len];  // 这里不会初始化为 0
std::fill(tag, tag + len, 0);  // 手动填充 0
```

✔ 适用于任意情况，可以填充任意值，不局限于 `0`。

#### **方法 3：使用 `memset` 填充 0**

```cpp
#include <cstring>
int *tag = new int[len];  // 这里不会初始化为 0
memset(tag, 0, sizeof(int) * len);
```

⚠ `memset` 只适用于填充 `0`，**不能用于填充非 0 值**，否则可能会导致错误。

#### **方法 4：改用 `std::vector`**

如果不一定要使用裸指针，建议使用 `std::vector`：

```cpp
#include <vector>
std::vector<int> tag(len, 0);  // 直接初始化为 0
```

✔ **自动管理内存**，不会有内存泄漏问题，推荐使用！🎯

# 内置快排+插入排序优化

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> vec = {5, 2, 9, 1, 5, 6};
    std::sort(vec.begin(), vec.end()); // 升序排序
    for (int num : vec) std::cout << num << " "; // 输出：1 2 5 5 6 9
}

```

O(n log n)

# range::sort()

**`ranges::sort(nums)`**：

*   是 C++20 引入的 **Ranges** 库中的函数，它简化了排序操作。
*   它直接接受一个范围（即容器或其他支持迭代器的对象），而不需要显式传递迭代器。
*   `ranges::sort` 是基于范围（range）的操作，因此代码更加简洁和直观。
*   语法示例：

    ```cpp
    #include <ranges>
    std::vector<int> nums = {5, 2, 9, 1, 5, 6};
    std::ranges::sort(nums);
    ```



# 初始化vector

### ✅ 空 vector（无元素）

```cpp
std::vector<int> pairs;
```

------

### ✅ 指定大小并用默认值（0）填充

```cpp
std::vector<int> pairs(5);  // 创建一个含有5个0的 vector
```

------

### ✅ 指定大小和初始值

```cpp
std::vector<int> pairs(5, 42);  // 创建一个含有5个42的 vector
```

------

### ✅ 使用列表初始化

```cpp
std::vector<int> pairs = {1, 2, 3, 4, 5};
```

------

### ✅ 使用 `std::fill`（或其他算法）

```cpp
std::vector<int> pairs(5);
std::fill(pairs.begin(), pairs.end(), 7);  // 把所有元素设为7
```

------

### ✅ 复制另一个 vector

```cpp
std::vector<int> other = {1, 2, 3};
std::vector<int> pairs(other);  // 拷贝构造
```



# 对空vector添加元素

### ✅ 使用 `push_back()` 添加单个元素

```cpp
std::vector<int> pairs;
pairs.push_back(10);
pairs.push_back(20);
pairs.push_back(30);
```

> 这会将 `10, 20, 30` 按顺序加到 vector 末尾。

------

### ✅ 使用 `emplace_back()`（性能更优一点）

```cpp
pairs.emplace_back(40);
```

------

### ✅ 插入多个元素：`insert()`

```cpp
std::vector<int> more = {50, 60, 70};
pairs.insert(pairs.end(), more.begin(), more.end());
```

------

### ✅ 添加整个数组或列表

```cpp
pairs.insert(pairs.end(), {80, 90, 100});
```



# lower_bound()不同情况下的返回值

`int index = distance(temp.begin(), lower_bound(temp.begin(), temp.end(), success));`

### ✅ 情况1：能找到刚好等于或大于 success 的值

```cpp
std::vector<int> temp = {1, 3, 5, 7, 9};
int success = 5;
```

- `lower_bound` 找的是第一个 `>= 5` 的值。
- `5` 在索引 2 处，所以：

```cpp
index = 2;
```

------

### ✅ 情况2：所有元素都小于 success

```cpp
std::vector<int> temp = {1, 2, 3};
int success = 10;
```

- 没有元素 `>= 10`，`lower_bound` 返回的是 `temp.end()`。
- 所以：

```cpp
index = 3; // 即 temp.size()
```

------

### ✅ 情况3：所有元素都 >= success

```cpp
std::vector<int> temp = {10, 20, 30};
int success = 5;
```

- 第一个 `>= 5` 的是 `10`，在索引 0：

```cpp
index = 0;
```

------

### ✅ 情况4：有多个相同的元素（等于 success）

```cpp
std::vector<int> temp = {1, 3, 5, 5, 5, 7};
int success = 5;
```

- `lower_bound` 会返回第一个 `5` 的位置 → 索引 2：

```cpp
index = 2;
```

------

### ✅ 情况5：success 小于最小值

```cpp
std::vector<int> temp = {4, 5, 6};
int success = 1;
```

- `lower_bound` 返回第一个大于等于 `1` 的 → 索引 0：

```cpp
index = 0;
```

------

### 🔁 总结表格：

| `temp`       | `success` | 结果 index | 说明                    |
| ------------ | --------- | ---------- | ----------------------- |
| {1, 3, 5, 7} | 5         | 2          | 找到等于 5 的           |
| {1, 3, 5, 7} | 6         | 3          | 第一个 ≥6 的是 7        |
| {1, 3, 5, 7} | 8         | 4          | 没有 ≥8 的 → 返回 end() |
| {10, 20, 30} | 5         | 0          | 所有都比它大            |
| {1, 2, 3, 4} | 0         | 0          | 所有都比它大            |



# 由索引转换为迭代器

要用`nums.begin() + index`来获得

如果你已经知道当前的下标索引，并且想从 **某个特定位置** 开始调用 `std::lower_bound()`，你可以通过传递 **起始迭代器** 来指定起始位置。

假设你知道当前的索引 `index`，那么你可以通过 `nums.begin() + index` 来获得从该索引开始的迭代器。

------

### 语法：

```cpp
auto it = std::lower_bound(nums.begin() + index, nums.end(), value);
```

nums.begin()是第0号，+index就刚好是当前的这个数



# 从当前索引开始的迭代器

`lower_bound(nums.begin() + i + 1, nums.end(), target2)` 返回的 **迭代器** 是从 `nums.begin() + i + 1` 开始的。

### 解释：

- `nums.begin() + i + 1` 是 **从当前索引 `i` 的下一个元素开始**，也就是从 `nums[i+1]` 开始。
- `lower_bound()` 会在这个范围内查找 **第一个大于或等于 `target2` 的元素**。

### 代码解析：

```cpp
int index1 = distance(nums.begin(), lower_bound(nums.begin() + i + 1, nums.end(), target2));
```

- `lower_bound(nums.begin() + i + 1, nums.end(), target2)` 计算 **从 `i + 1` 开始**，直到 `nums.end()` 范围内第一个 **大于或等于 `target2`** 的位置。
- 然后，`distance(nums.begin(), ...)` 计算 **从 `nums.begin()` 到返回的迭代器的位置的距离**，也就是找出目标元素在数组中的索引。



# upper_bound()

`upper_bound()` 是一个 **STL 算法**，用于在 **已排序容器** 中查找 **第一个大于给定值的元素** 的位置。

具体来说，`upper_bound` 会返回 **第一个大于给定值的元素** 的迭代器。如果所有元素都小于等于给定值，它将返回指向容器末尾的迭代器。

------

### `upper_bound()` 语法：

```cpp
std::upper_bound(first, last, value)
```

- `first` 和 `last`：是待查找范围的迭代器（通常是容器的 `begin()` 和 `end()`）。
- `value`：需要查找的目标值。

返回值是一个迭代器，指向 **第一个大于 `value` 的元素**。

### 特点：

- 如果 `value` 小于容器中的所有元素，返回的是容器的 `begin()` 迭代器。
- 如果 `value` 大于容器中的所有元素，返回的是容器的 `end()` 迭代器。
- 如果找到了与 `value` 相等的元素，返回的是 **第一个大于 `value` 的元素**。



所以，想要找到小于等于value的最大的那个数，要给upper_bound()的结果减掉1



## C++链表

