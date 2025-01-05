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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <Motion is="path" :ref="targetList[1]" d="m9 10 2 2 4-4"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'MapPinCheckInsideIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = [
  {
    normal: {
      y: 0,
      transition: {
        duration: 200,
      },
    },
    animate: {
      y: [0, -5, -3],
      transition: {
        duration: 500,
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      },
    },
  },
  {
    normal: {
      opacity: 1,
      strokeDasharray: 9,
      strokeDashoffset: 0,
      transition: {
        duration: 300,
      },
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 9,
      strokeDashoffset: [9, 0],
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
    const variant = type === 'animate' ? variants[i].animate : variants[i].normal;
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
