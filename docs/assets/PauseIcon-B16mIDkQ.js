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
      <Motion is="rect" :ref="targetList[0]" x="6" y="4" width="4" height="16" rx="1" />
      <Motion is="rect" :ref="targetList[1]" x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PlayIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 500,
    stiffness: 260,
    damping: 20,
  },
};

const variants = {
  normal: {
    y: 0,
  },
  animate: [
    {
      y: [0, 2, 0, 0],
      ...defaultTransition,
    },
    {
      y: [0, 0, 2, 0],
      ...defaultTransition,
    },
  ],
};

const len = 2;
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
    const variant = type === 'animate' ? variants[type][i] : variants[type];
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
