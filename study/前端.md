# 一、Vite

- `commonJS` node 环境

- `esModel` ESM 标准

- `rollup` JS 模块打包器 擅长做一些 js 库、工具库的打包

- `babel` 代码降级

- `vite` 工具链

- `esbuild` 打包构建 go 语言开发 比 rollup 快 扩展没有 rollup 高

### 0.预备知识

- `mode`  环境   development | production
- `entry` 项目打包的入口 可能有多个入口
- `output` 输出配置
- `module` 模块 (ts,scss,less.....)
- `loader` 处理不同module的处理器 每种不同的modul都需要对应的loader处理
- `plugins` 自定义插件
- `optimization`  优化
- `bundle` 打包后结果
- `chunk` 打包过程中生成的代码块 一个项目可以有多个chunk 是 bundle 中的每个独立部分，属于更细粒度的构建单位。



### 1. 判断开发的环境

```js
//vite.config.js
import { defineConfig } from 'vite';
export default defineConfig(({ command, mode }) => {
	// 执行yarn dev     时 command = serve  mode = development 开发环境
	// 执行yarn build   时 command = build  mode = production 生产环境
	// 执行yarn preview 时 command = serve  mode = production 生产环境
	return {};
});
```

### 2. 环境变量

```js
//vite.config.js
环境变量前缀必须以 VITE 开头
.env 所有环境都需要用到的环境变量
.env.development 开发环境的环境变量
.env.production  生产环境的环境变量
.env.text 测试环境变量
process.cwd():当前工作目录
第三个参数可选 ''为所有目录 默认所有的env
import {defineConfig, loadEnv} from 'vite';
export default defineConfig(({command,mode})=>{
    const env = loadEnv(mode, process.cwd(),"")
    return{
        //envPrefix 自定义环境变量前缀
        envPrefix:""
    }
})
```

```js
//package.json
{
   "scripts":{
       //自定义执行指令 指定mode为text
       "text":"vite --mode text"
   }
}
```

### 3.别名和静态资源

```js
// vite.config.js

const path = require('path');

// path.resolve() 拼接字符串
// __dirname 当前文件所在目录

import { defineConfig, loadEnv } from 'vite';
import path from 'path';
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, '/src'),
			},
		},
	};
});
```

### 4. build

```js
// vite.config.js
return{
    build:{
        outDir:"dist" || string          //输出文件夹
        assetsDir:"assets" || string     //静态资源存放文件夹
        assetsInlineLimit:4096 || number //小于此阈值的导入或引用资源将内联为 base64 编码
      	}
}
```

### 5. rollup

```js
//vite.config.js
//配置rollup的构建策略
// @see https://cn.rollupjs.org/configuration-options/
rollupOptions: {
    // 打包后结果文件夹名称
    dir:"dist" || string,
    // 打包结果的格式 @see https://cn.rollupjs.org/configuration-options/#output-format
    format:"es",
    //打包结果的入口文件
    entryFileNames：'index.js' || 
    // [hash]  命名标准
     hashCharacters:"base64" | | "base36" | "hex"
}
```

#### 5.1 rollupPluginLlists

- [rollup-plugin-obfuscator](https://www.npmjs.com/package/rollup-plugin-obfuscator) 代码混淆插件

### 6.preview

### 7. esbuild

```js
//vite.config.js
// @see https://esbuild.github.io/api/#target
esbuild: {
	drop: ['console', 'debugger']; //生产环境删除调试信息
}
```



### 8. 解决vite + vue3 + eleui中静态文件在生产环境中失效的原因

解决办法:将静态资源存放在`public`文件夹

错误的导入路径 `/public/data`

正确的导入路径 `/data`
# 二、vue
### 1、在 html 标签使用 ref

在 html 标签使用 ref 能取到该标签的 DOM

```vue
<template>
	<div ref="fea">父</div>
</template>

<script setup>
import { ref } from 'vue';

const fea = ref(null);
console.log('DOM', fea);
</script>
```

### 2、$attrs

使用 **$attrs** 可以实现组孙组件间传值

```vue
//feather.vue
<template>
	<div></div>
	<Index :="{ a, b, c, d }" />
	// 等同于 :a= a :b = b :c = c :d = d
</template>

<script setup>
import { ref } from 'vue';
import Index from './commponents/Index.vue';
const a = ref(1);
const b = ref(2);
const c = ref(3);
const d = ref(4);
</script>
```

```vue
//child.vue
<template>
	<div>子</div>
	<Child :="$attrs" />
</template>

<script setup lang="ts">
import Child from './Child.vue';

const props = defineProps<{
	a: number;
}>();

console.log('子组件', props); //子组件没有接收到的值在$attr中 使用v-bind="$attr"可以将父组件没有用到的值传给孙组件
</script>

<style lang="scss" scoped></style>
```

```vue
//grandson.vue
<template>
	<div>孙</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	a: number;
	b: number;
	c: number;
	d: number;
}>();
console.log('孙组件', props);
</script>

<style lang="scss" scoped></style>
```

### $refs && $parent

#### $refs

父--->子

```vue
// fea.vue
<template>
	<Index ref="son1" />
	<Child ref="son2" />
	<button @click="getSon($refs)"></button>
	// $refs 取所有子组件暴漏的defineExpose对象
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Index from './commponents/Index.vue';
import Child from './commponents/Child.vue';
const son1 = ref(null);
const son2 = ref(null);
const getSon = refs => {
	console.log(refs); //打印所有子组件暴漏的defineExpose对象
	console.log(refs.son1.son1);
};
</script>
```

```vue
//Index.vue
<script setup lang="ts">
import { ref } from 'vue';
const son1 = ref(0);
defineExpose({ son1 }); //暴漏给父组件 便于父组件操作
</script>
```

```vue
// Child.vue
<script setup lang="ts">
import { ref } from 'vue';
const son2 = ref(6);
defineExpose({ son2 }); //暴漏信息
</script>
```

#### $parent

子 --->父

```vue
// fea.vue
<template>
	<Index ref="son1" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Index from './commponents/Index.vue';
const son1 = ref(null);
defineExpose({ son1 }); //暴露信息
</script>
```

```vue
// Index.vue
<template>
	<button @click="getFea($parent)">子</button>
	// 使用$parent获取父组件暴露的信息
</template>

<script setup lang="ts">
import { ref } from 'vue';
const getFea = p => {
	console.log(p);
};
</script>
```

### 3、provide && inject

用于解决组件之间多层嵌套问题

```vue
// fea.vue
<template>
	<div ref="fea">父组件</div>
	<div>count {{ count }}</div>
	<Index />
</template>

<script setup>
import { ref, provide,readonly } from 'vue';
import Index from './commponents/Index.vue';
const count = ref(0);
provide('count', count); //提供数据 使用inject接收数据

//也可以传多个值,以对象的方式

provide('key',{
    count,
    .....
})

//如果要设置某个值为只读,使用readonly
provide('key',{
    count:readonly(count),
    .....
})
</script>
```

```vue
<template>
	<div>孙组件+1</div>
	{{ count }}
</template>

<script setup>
import { ref, inject } from 'vue';
const count = inject('count'); // 接收数据
//接收多个值
const {....} = inject('key')

console.log(count);
</script>
```

# 三、React



# 备忘录

