##javascript视频（blue）总结
***
####智能社视频材料 - 初探JavaScript魅力 - 1
* 编写JS的流程
	* ⒈布局：HTML+CSS
	* ⒉属性：确定要修改哪些属性
	* ⒊事件：确定用户做哪些操作（产品设计）
	* ⒋编写JS：在事件中，用JS来修改页面元素的样式
* 定义和调用
	* 函数定义：只是告诉系统有这个函数，不会实际执行
	* 函数调用：真正执行函数里的代码
* 第一个JS兼容性问题
	* document.getElementById(id)在任何浏览器下均可使用

***
####智能社视频材料 - 初探JavaScript魅力 - 2
* while循环
	* while循环结构：
	``` javascript

	while(expression){
		statement
	}
	```
	* while循环实例：声明并且初始化i=5，每次执行语句之后，i自增1；只要i小于5，将循环不断地执行循环体内的语句
	``` javascript
var i = 0;
	while(i<5){
		alert(i);
		i++;
	}
	```
* for循环
	* for循环结构：
	``` javascript

	for(initialization; expression; post-loop-expression){
		statement
	}
	```
	* for循环实例：声明并且初始化i=0，只要i小于5，将循环不断地执行循环体内的语句，执行完循环体内的语句之后，i自增1
	``` javascript
		for(var i=0;i<5;i++){
			alert(i);
		}
	```
* Tap选项卡
	* 通过js设置dom节点的index属性值等于该dom节点的索引值，来保存dom节点的索引值数据

***
####javascript基础
* JavaScript组成：
	* ECMAScript：解释器、翻译（几乎没有兼容性问题）
	* DOM：Document Object Model、操作HTML、最终对象是document（有一些操作不兼容）
	* BOM：Browser Object Model、操作对象是浏览器、最终对象是window（完全不兼容）
* 变量
	* typeof运算符，返回的基本数据类型：number、string、boolean、undefined（未声明或者未初始化）、object、function。
	* 一个变量只能存放一种基本数据类型的数据
* 数据类型转换
	* parseInt( )
		* 主要使得数据转换成整数
	``` javascript
	
	parseInt("123abc");//舍去字母部分，返回整数"123"
	parseInt("abc123");//返回NaN
	parseInt("123.123abc");//返回整数"123"
	```
	* parseFloat( )
		* 主要使得数据转换成整数或浮点数
	``` javascript
	parseFloat("123abc");//舍去字母部分，返回整数"123"
	parseFloat("abc123");//返回NaN
	parseFloat("123.123abc");//返回小数"123.123"
	```
	* NaN
		* NaN表示一个非数字的值
		* 检测方法：通过isNaN(x)的方法来检测，如果x是NaN，则返回true，否则返回false
	* 隐式类型转换
		* ==、===区别："=="会进行等式两边变量的类型转换之后再比较大小；而"==="，则不会。
		* 减法：减法会把减号两边的变量都转换为Number类型的数据之后，再执行减法运算
* 什么是闭包
		* 子函数可以访问父函数局部作用域的变量
* 命名规范——变量名称前缀：（下表中的变量变体主要是在未确定变量数据类型时声明的一个变量）
<table>		<thead>			<tr>				<th>类型</th>				<th>前缀</th>				<th>类型</th>				<th>实例</th>			</tr>		</thead>		<tbody>			<tr>				<td>数组</td>				<td>a</td>				<td>Array</td>				<td>aItems</td>			</tr>			<tr>				<td>布尔值</td>				<td>b</td>				<td>Boolean</td>				<td>bIsComplete</td>			</tr>			<tr>				<td>浮点数</td>				<td>f</td>				<td>Float</td>				<td>fPrice</td>			</tr>			<tr>				<td>整数</td>				<td>i</td>				<td>Integer</td>				<td>iItemCount</td>			</tr>			<tr>				<td>函数</td>				<td>fn</td>				<td>Function</td>				<td>fnHandler</td>			</tr>			<tr>				<td>对象</td>				<td>o</td>				<td>Object</td>				<td>oDiv1</td>			</tr>			<tr>				<td>正则表达式</td>				<td>re</td>				<td>RegExp</td>				<td>reEmailCheck</td>			</tr>			<tr>				<td>字符串</td>				<td>s</td>				<td>String</td>				<td>sUserName</td>			</tr>			<tr>				<td>变量变体</td>				<td>v</td>				<td>Variant</td>				<td>vAnyThing</td>			</tr>		</tbody>	</table>
	
* 运算符
		* 算术：+ 加、- 减、* 乘、/ 除、% 取模
		* 赋值：=、+=、-=、*=、/=、%=
		* 关系：<、>、<=、>=、==、===、!=、!==
		* 关于比较的示例：
	``` javascript
	Boolean(10>9>8==true);
	//返回false
	//该boolean值首先会执行"10>9"，返回true;
	//然后再执行"true>8"，在"true>8"比较中，true会隐式转换为数字"1"，"1>8"返回false
	//最后执行"false==true"，显然会返回false
	//因此"Boolean(10>9>8==true)"，返回false。
	
	```

* 逻辑：&&与、||或、!否
	* ||：
	```
	var myObject = preferredObject||backupObject;
	//此语句中，myObject会优先选择preferredObject，
	//在Boolean(preferredObject)==false的情况下，myObject才会等于backupObject		
	```
	* &&：
		``` javascript
			
		var myObject = preferredObject&&backupObject;
		//此语句中，myObject会优先选择backupObject，
		//在Boolean(preferredObject)==false的情况下，myObject才会等于preferredObject
				
		```
	* 运算符优先级：括号
* 三元运算符：(boolean_expression)?(true_value):(false_value);
* switch判断：
```javascript

	switch(expression){
		case value:statement
			break;
		case value:statement
			break;
		case value:statement
			break;
		default:statement
	}
  ```
* 什么是真，什么的假：
	   * 真：true、非0数字、非空对象、非空字符串
	   * 假：false、数字0、空对象、空字符串、undefined

***
####深入javascript
* 取非行间样式（不能用来设置）
	* obj.currentStyle[attr]——针对IE浏览器
	* getComputedStyle(obj,false)[attr]——针对chrome、FF浏览器
	```javascript
	
	function getStyle(o,attr){
		if(o.currentStyle){
			return o.currentStyle[attr];
		}else{
			return getComputedStyle(o,false)[attr];
		}
	}
	```
* 数组的方法
	* 添加元素：
		* push(variable)，从数组尾部添加变量，并且返回新数组的长度
		* unshift(variable)，从数组头部添加变量，并且返回新数组的长度
	* 删除元素：
		* pop()，从数组尾部删除一个变量，并且返回删除的变量
		* shift()，从数组头部删除一个变量，并且返回删除的变量
	* 排序：array.sort(compareFunction)，默认的排列顺序是按照字母的顺序来排列的
	* 连接：
		* concat，连接两个数组，array1.concat(array2);
		* join，使用分隔符，组合新元素，生成字符串，未传入参数的情况下，默认是逗号：","，array.join("%")
	* splice(startIndex,length,insertNewVariable)：操作原数组，返回被删除的数组子项

***
####定时器的使用
* 开启定时器
	* setInterval	间隔型
	* setTimeout	延时型
* 关闭定时器
	* clearInterval(timer)
	* setTimeout(timer)
* 时间问题
	* 年：
		* 获取年份——new Date().getFullYear()
		* 设置年份——new Date().getFullYear(newYearNumber)
	* 月（在javascript中，获得的月份数字，比生活的月份数字小一，因此需要通过加减一，保证数字的正确性）：
		* 获取月份——new Date().getMonth()+1
		* 设置月份——new Date().getMonth(newMonthNumber-1)
	* 日：
		* 获取日期——new Date().getDate()
		* 设置日期——new Date().getDate(newDateNumber)
	* 时：
		* 获取小时——new Date().getHours()
		* 设置小时——new Date().getHours(newHourNumber)
	* 分：
		* 获取分钟——new Date().getMinutes()
		* 设置分钟——new Date().getMinutes(newMinuteNumber)
	* 秒：
		* 获取秒——new Date().getSeconds()
		* 设置秒——new Date().getDate(newSecondsNumber)
	* 星期（在javascript中，星期日到星期六，分别为0——6）：
		* 获取星期——new Date().getDay()
		* 设置星期——无法设置星期，只能通过设置年、月和日来间接设置星期

***
####DOM基础
* 子元素节点
	* childNodes：需要通过element.nodeType==1来判断是否是元素节点（比较麻烦）
	* children：基本上大部分浏览器都兼容，获得子元素节点的数组集合（推荐使用）
* 父节点：parentNode
* 相对节点：offsetParent，指向具有定位功能的父元素，最顶层为`body`元素
* 首尾子元素：firstChild or firstElementChild、lastChild or lastElementChild
	```javascript

	var firstChild;
	if(parentElement.firstElementChild){
		firstChild = parentElement.firstElementChild;
	}else{
		firstChild = parentElement.firstChild;
	}
	//在IE8以及IE8以下的浏览器中，不支持firstElementChild，返回undefined
	```
* 兄弟元素：nextSibling or nextElementSibling、previousSibling or previousElementSibling
	```javascript

	var previousSibling;
	if(element.previousElementSibling){
		previousSibling = element.previousElementSibling;
	}else{
		previousSibling = element.previousSibling;
	}
	//在IE8以及IE8以下的浏览器中，不支持previousElementSibling，返回undefined
	```
* 通过DOM方式操作元素属性
	* 获取：getAttribute(attr)
	* 设置：setAttribute(attr,value)
	* 删除：removeAttribute(attr)

***
####DOM操作应用
* 创建DOM：createElement，var newElement = document.createElement(eleName);
* 插入元素：
	* appendChild：将新元素插入到父元素内部最后一个元素位置，parentNode.appendChild(newElement);
	* insertBefore：将新元素插入到父元素内部指定一个元素的前面位置，parentNode.insertBefore(newElement,insideElement);
* 删除元素：removeChild，parentNode.removeChild(childElement);
***
####DOM操作应用高级
* 获取表格元素（表格元素特殊的用法）
	* tBodies[index]：获取tbody元素；
	* tHead：获取thead，因为thead是唯一的，因此不用设置index；
	* tFoot：获取tfoot，因为tfoot是唯一的，因此不用设置index；
	* rows[index]：获取哪一行rows；
	* cells[index]：获取哪一个单元格；
* 大、小写转换：
	* toLowerCase：转换为小写，string.toLowerCase()，不操作原字符串，返回操作后的字符串
	* toUpperCase：转换为大写，string.toUpperCase()，不操作原字符串，返回操作后的字符串

***
####JS运动基础
* 获取表格元素（表格元素特殊的用法）
<<<<<<< HEAD
	* 缓冲运动：
		* 速度=（目标值-当前值）/缩放系数
		* 注意事项：但（目标值-当前值）大于一，而（目标值-当前）/缩放系数小于一时，采用向上（或者向下）四舍五入取整数的方式，使得当前值逐渐趋向于目标值。
		```javascript
		
		var speed = (s>0)?(Math.ceil(s)):(Math.floor(s));
	```
	* 匀速运动：
		* 停止条件：当最后一次运动时，速度>（目标值-当前值），直接设置当前值=目标值
		```javascript
		
		if((targetValue-currentValue)<speed){
			o.style[attr] = targetValue;
		}
		```

***
####JS运动应用
* 多物体运动框架：所有东西都不能公用
* offsetWidth:
=======
	* 缓冲运动
<table>
		<thead>
			<tr>
				<th>类型</th>
				<th>前缀</th>
				<th>类型</th>
				<th>实例</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>数组</td>
				<td>a</td>
				<td>Array</td>
				<td>aItems</td>
			</tr>
			<tr>
				<td>布尔值</td>
				<td>b</td>
				<td>Boolean</td>
				<td>bIsComplete</td>
			</tr>
			<tr>
				<td>浮点数</td>
				<td>f</td>
				<td>Float</td>
				<td>fPrice</td>
			</tr>
			<tr>
				<td>整数</td>
				<td>i</td>
				<td>Integer</td>
				<td>iItemCount</td>
			</tr>
			<tr>
				<td>函数</td>
				<td>fn</td>
				<td>Function</td>
				<td>fnHandler</td>
			</tr>
			<tr>
				<td>对象</td>
				<td>o</td>
				<td>Object</td>
				<td>oDiv1</td>
			</tr>
			<tr>
				<td>正则表达式</td>
				<td>re</td>
				<td>RegExp</td>
				<td>reEmailCheck</td>
			</tr>
			<tr>
				<td>字符串</td>
				<td>s</td>
				<td>String</td>
				<td>sUserName</td>
			</tr>
			<tr>
				<td>变量变体</td>
				<td>v</td>
				<td>Variant</td>
				<td>vAnyThing</td>
			</tr>
		</tbody>
	</table>
>>>>>>> origin/master
