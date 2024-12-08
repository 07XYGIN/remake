- `commonJS` node环境
- `esModel` ESM 标准
- `rollup` JS模块打包器 擅长做一些js库、工具库的打包
- `babel` 代码降级
- `vite` 工具链
- `esbuild` 打包构建 go语言开发 比rollup快 扩展没有rollup高





~~~js
// vite.config.js
import { defineConfig } from 'vite';
export default defineConfig{
	 
}

~~~

### 1. 判断开发的环境

~~~js
//vite.config.js
import { defineConfig } from 'vite';
export default defineConfig(({command,mode})=>{
    
    // 执行yarn dev     时 command = serve  mode = development 开发环境
    // 执行yarn build   时 command = build  mode = production 生产环境
    // 执行yarn preview 时 command = serve  mode = production 生产环境
	return{
        
    }
})
~~~



### 2. 环境变量

~~~js
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
~~~

~~~js
//package.json
{
   "scripts":{
       //自定义执行指令 指定mode为text
       "text":"vite --mode text"
   }
}
~~~

### 3.别名和静态资源

~~~js
// vite.config.js

const path = require("path")

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

~~~

### 4. build

~~~js
// vite.config.js
return{
    build:{
        outDir:"dist" || string          //输出文件夹
        assetsDir:"assets" || string     //静态资源存放文件夹
        assetsInlineLimit:4096 || number //小于此阈值的导入或引用资源将内联为 base64 编码
      	}
}
~~~

### 5. rollup

~~~js
//vite.config.js
//配置rollup的构建策略
// @see https://cn.rollupjs.org/configuration-options/
rollupOptions:{}
~~~

### 6.preview

### 7. esbuild

```js
//vite.config.js
// @see https://esbuild.github.io/api/#target
esbuild:{
    drop:['console','debugger'] //生产环境删除调试信息
}

```

### 8. 代码混淆

[rollup-plugin-obfuscator](https://www.npmjs.com/package/rollup-plugin-obfuscator)

