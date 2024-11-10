<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <Motion is="path" v-for="(item, index) in paths" :key="item" :ref="el => (targetList[index] = el)" :d="item" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'SunIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  'M12 2v2',
  'm19.07 4.93-1.41 1.41',
  'M20 12h2',
  'm17.66 17.66 1.41 1.41',
  'M12 20v2',
  'm6.34 17.66-1.41 1.41',
  'M2 12h2',
  'm4.93 4.93 1.41 1.41',
];

const variants = {
  normal: { opacity: 1 },
  animate: i => ({
    opacity: [0, 1],
    transition: { delay: i * 100, duration: 300 },
  }),
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      transition: {
        duration: 300,
      },
      ...variant,
    });
  }
};
function mouseEnterHandler() {
  hoverFn('animate');
}
function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
