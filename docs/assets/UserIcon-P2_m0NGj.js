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
      <Motion is="circle" :ref="targetList[0]" cx="12" cy="8" r="5" transform-origin="12 8" />
      <Motion is="path" :ref="targetList[1]" d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'UserIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = [
  // head
  {
    normal: {
      opacity: 1,
      scale: 1,
      strokeDasharray: 31,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      scale: [0.5, 1],
      strokeDasharray: 31,
      strokeDashoffset: [-31, 0],
      transition: {
        duration: 300,
      },
    },
  },
  // body
  {
    normal: { opacity: 1, strokeDasharray: 25, strokeDashoffset: [0, 0] },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 25,
      strokeDashoffset: [-25, 0],
      transition: {
        delay: 50,
        duration: 300,
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
  hoverFn('normal');
}
<\/script>
`;export{n as default};
