const n=`<template>
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
      <Motion is="circle" :ref="targetList[0]" cx="12" cy="12" r="10" transform-origin="12 12" />
      <Motion is="path" :ref="targetList[1]" d="m4.9 4.9 14.2 14.2" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BanIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = [
  {
    normal: {
      opacity: 1,
      rotate: 225,
      strokeDasharray: 62,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      rotate: 225,
      strokeDasharray: 62,
      strokeDashoffset: [62, 0],
      transition: {
        duration: 400,
        opacity: { duration: 100 },
      },
    },
  },
  {
    normal: {
      opacity: 1,
      strokeDasharray: 21,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 21,
      strokeDashoffset: [21, 0],
      transition: {
        delay: 400,
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
<\/script>
`;export{n as default};
