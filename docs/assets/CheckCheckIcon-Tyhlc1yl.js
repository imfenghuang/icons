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
      <Motion is="path" :ref="targetList[0]" d="M2 12 7 17L18 6" transform-origin="10 11.5" />
      <Motion is="path" :ref="targetList[1]" d="M13 16L14.5 17.5L22 10" transform-origin="17.5 13.75" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CheckCheckIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: i => ({
    opacity: 1,
    strokeDasharray: i === 0 ? 23 : 13,
    strokeDashoffset: [0, 0],
    scale: 1,
    transition: {
      duration: 300,
      opacity: { duration: 100 },
    },
  }),
  animate: i => ({
    opacity: [0, 1],
    strokeDasharray: i === 0 ? 23 : 13,
    strokeDashoffset: [i === 0 ? 23 : 13, 0],
    scale: [0.5, 1],
    transition: {
      duration: 400,
      opacity: { duration: 100 },
      delay: 100 * i,
    },
  }),
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal(i),
    enter: variants.normal(i),
  });
}

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
<\/script>
`;export{n as default};
