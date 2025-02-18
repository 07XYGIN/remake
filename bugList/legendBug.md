关于 `Echarts` + `vue3` 中点击 legend 组件中报错 (偶尔发生)

**version**

-   Echarts:5.5.0
-   Vue:3.4.5

```js
    Cannot read properties of undefined (reading 'type')
```

问题复现

---

```vue
<template>
	<div class="" ref="echart"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const echart = ref(null);
const myChart = ref();
let option = { ...echartsOptions };
onMounted(() => {
	myChart.value = echarts.init(echarts_container.value);
	option && myChart.setOption(option);
});

// 点击legend组件时 会偶尔发生上述报错
</script>
```

---

解决办法

```js
<template>
	<div class="" ref="echart"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const echart = ref(null);
// const myChart = ref(); 不使用ref代理
let myChart = null
let option = { ...echartsOptions };
onMounted(() => {
	myChart = echarts.init(echarts_container.value);
	option && myChart.setOption(option);
});
```
