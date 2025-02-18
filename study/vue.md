### 在 html 标签使用 ref

在 html 标签使用 ref 能取到该标签的 DOM

```js
<template>
	<div ref="fea">父</div>
</template>

<script setup>
import { ref } from 'vue';

const fea = ref(null);
console.log('DOM', fea);
</script>
```

### $attrs

使用 **$attrs** 可以实现爷孙组件间传值

```js
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

```js
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

```js
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
