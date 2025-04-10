# 1.jsx
函数式组件
~~~jsx
// 基本写法
function App() {
  const a = "class"
  const a1 = "2"
  const b = typeof(a)
  return (
  <>  // 必须有一个最高层级的元素
      <p className="a">hello</p> // 使用className定义CSS类 
      <p>{a}</p>   // 插值表达式
      <p className={a}></p> 
      <p className={a=='a'?"a":'b'}></p>  //可以使用三元表达式 
      <p id='a'></p> //使用Id
      <p style={{width:100px}}></p>  //使用行内表达式 驼峰命名
  </>
  )
}
export default App
~~~
 

# 2. 列表渲染
~~~jsx
function App() {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {
        a.map(
            (i, e) => (
                <span key={e}>{i}</span>
                <span key={e}>{i}</span>
            .....))
      }
    </>
  );
}

export default App;
~~~
# 3.事件
~~~jsx
function App() {
  return (
    <>
      <p onClick={click}>event</p>
    </>
  );
}
const click = (e)=>{
  console.log(e);
}
~~~

# 4. 条件渲染
~~~jsx
//单条件
{a && <p>1</p>}

//多条件  三元运算符
{a==1?<p>1</p>:<p>2</p>}

//复杂条件 函数 + if
function i(){
  if(a ==1){
    return (<>1</>)
  }else if(a == 2){
    return (<>2</>)
  }else{
    return (<>3</>)
  }
}
~~~

# 事件
~~~jsx
// e
function App(){
  const click = (e)=>{
    console.log(e);
  }
  const name = (i)=>{
    console.log(i);
  }
  const gete1 = (n,e)=>{
    console.log(n,e);
  }
    return (
      <>
        <p onClick={click}>gete</p>  // 获取e
        <p onClick={()=>name(1)}>gete</p>  // 获取参数
        <p onClick={(e)=>gete1(1)}>gete</p>  // 获取e和参数
      </>
    )  
}

export default App

~~~
# 组件通讯

## 父->子

~~~jsx
function App() {
  return (
    <>
      父组件
      <br /><br /><br /><br /><br />
      
      <Name name="1"/>  // 在组件内部定义传的值  也可以传递组件
      </>
  );
}
function Name(props){ //在参数内部提取值 也可以提取组件
  return (
    <>
    {props.name}
    </>
  )
}
export default App;
~~~

# hooks
## useState
~~~jsx
import {useState} from 'react'
function App(){
    const [state,setUseate] = useState(0) // useState 返回一个数组 [ 初始值 , 操作函数 ]
    return (
      <>
        <p onClick={()=>setUseate(state + 1)}>{state}</p>
      </>
    )  
}

export default App

~~~