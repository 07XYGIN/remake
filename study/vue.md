### 一、在 html 标签使用 ref

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

### 二、$attrs

使用 **$attrs** 可以实现组孙组件间传值

```vue
//feather.vue
<template>
	<div ></div>
	<Index :="{ a, b, c, d }" /> // 等同于 :a= a :b = b :c = c :d = d
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

console.log('子组件', props);  //子组件没有接收到的值在$attr中 使用v-bind="$attr"可以将父组件没有用到的值传给孙组件
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
	<button @click="getSon($refs)"></button>  // $refs 取所有子组件暴漏的defineExpose对象
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Index from './commponents/Index.vue';
import Child from './commponents/Child.vue';
const son1 = ref(null);
const son2 = ref(null);
const getSon = refs => {
console.log(refs) //打印所有子组件暴漏的defineExpose对象
console.log(refs.son1.son1);
};
</script>
```

```vue
//Index.vue
<script setup lang="ts">
import { ref } from 'vue';
const son1 = ref(0)
defineExpose({ son1 }); //暴漏给父组件 便于父组件操作
</script>
```

```vue	
// Child.vue
<script setup lang="ts">
import { ref } from 'vue';
const son2 = ref(6);
defineExpose({ son2 });//暴漏信息
</script>
```

#### $parent

子 --->父

~~~vue
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
~~~

~~~vue
// Index.vue
<template>
	<button @click="getFea($parent)">子</button>  // 使用$parent获取父组件暴露的信息 
</template>

<script setup lang="ts">
import { ref } from 'vue';
const getFea = p => {
	console.log(p)
};
</script>

~~~

### 三、provide && inject

用于解决组件之间多层嵌套问题

~~~vue
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

~~~

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
