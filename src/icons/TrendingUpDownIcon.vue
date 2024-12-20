<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      :ref="targetList[0]"
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
      <Motion is="polyline" :ref="targetList[1]" points="21 3 12 12 8 8 2 14" />
      <Motion is="polyline" :ref="targetList[2]" points="21 3 16 3" />
      <Motion is="polyline" :ref="targetList[3]" points="21 3 21 8" />
      <Motion is="polyline" :ref="targetList[4]" points="21 21 15 15" />
      <Motion is="polyline" :ref="targetList[5]" points="21 21 16 21" />
      <Motion is="polyline" :ref="targetList[6]" points="21 21 21 16" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'TrendingUpDownIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const arrowTransition = {
  transition: {
    delay: 300,
    duration: 300,
    opacity: { duration: 100, delay: 300 },
  },
};
const pathTransition = {
  transition: {
    duration: 400,
    opacity: { duration: 100 },
  },
};
const arrowVariant = {
  normal: {
    opacity: 1,
    strokeDasharray: 6,
    strokeDashoffset: [0, 0],
  },
  animate: {
    opacity: [0, 1],
    strokeDasharray: 6,
    strokeDashoffset: [6, 0],
    ...arrowTransition,
  },
};
const variants = [
  // svg
  {
    normal: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 0,
      y: 0,
      translateX: [0, 2, 0],
      transition: {
        duration: 500,
      },
    },
  },
  // path
  {
    normal: {
      opacity: 1,
      strokeDasharray: 29,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 29,
      strokeDashoffset: [29, 58],
      ...pathTransition,
    },
  },
  // arrow
  {
    ...arrowVariant,
  },
  {
    ...arrowVariant,
  },
  // path2
  {
    normal: {
      opacity: 1,
      strokeDasharray: 9,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 9,
      strokeDashoffset: [9, 18],
      transition: {
        opacity: { duration: 100 },
        strokeDashoffset: {
          duration: 200,
          delay: 200,
        },
      },
    },
  },
  // arrow
  {
    ...arrowVariant,
  },
  {
    ...arrowVariant,
  },
];

const len = 7;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
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
