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
      <Motion is="circle" :ref="targetList[0]" cx="12" cy="12" r="4" />
      <Motion is="path" :ref="targetList[1]" d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AtSignIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = [
  // circle
  {
    normal: {
      opacity: 1,
      strokeDasharray: 24,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 24,
      strokeDashoffset: [24, 48],
      transition: {
        duration: 300,
        opacity: { duration: 100 },
      },
    },
  },
  // path
  {
    normal: {
      opacity: 1,
      strokeDasharray: 69,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 69,
      strokeDashoffset: [69, 0],
      transition: {
        delay: 300,
        duration: 300,
        opacity: { duration: 100, delay: 300 },
      },
    },
  },
];

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[i].normal,
    enter: variants[i].normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = variants[i][type];
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  // hoverFn('normal');
}
</script>
