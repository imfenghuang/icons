<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
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
      <path v-for="item of paths" :key="`${item.d}_bg`" :d="item.d" stroke-opacity="0.4" />
      <Motion
        is="path"
        v-for="(item, index) of paths"
        :ref="el => (targetList[index] = el)"
        :key="item.d"
        :d="item.d"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FingerprintIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  { d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4', dasharray: 8 },
  { d: 'M14 13.12c0 2.38 0 6.38-1 8.88', dasharray: 9 },
  { d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02', dasharray: 3 },
  { d: 'M2 12a10 10 0 0 1 18-6', dasharray: 25 },
  { d: 'M2 16h.01', dasharray: 1 },
  { d: 'M21.8 16c.2-2 .131-5.354 0-6', dasharray: 6 },
  { d: 'M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2', dasharray: 10 },
  { d: 'M8.65 22c.21-.66.45-1.32.57-2', dasharray: 3 },
  { d: 'M9 6.8a6 6 0 0 1 9 5.2v2', dasharray: 15 },
].map(path => {
  const { dasharray } = path;
  return {
    ...path,
    animateStrokeDashoffset: [1, 0.9, 0.7, 0.3, 0.1, 0].map(v => v * dasharray),
  };
});

const variants = {
  normal: i => {
    return {
      opacity: 1,
      strokeDasharray: paths[i].dasharray,
      strokeDashoffset: 0,
      transition: {
        duration: 500,
      },
    };
  },
  animate: i => {
    return {
      opacity: [0, 0, 1, 1, 1],
      strokeDasharray: paths[i].dasharray,
      strokeDashoffset: paths[i].animateStrokeDashoffset,
      transition: {
        opacity: { duration: 500 },
        strokeDashoffset: {
          duration: 2000,
        },
      },
    };
  },
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal(i),
    enter: variants.normal(i),
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate(i) : variants.normal(i);
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
