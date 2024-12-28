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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <Motion is="path" ref="target" d="m19 9-5 5-4-4-3 3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChartLineIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    opacity: 1,
    strokeDasharray: 17,
    strokeDashoffset: 0,
    transition: {
      duration: 400,
      ease: 'easeInOut',
      opacity: { duration: 100 },
    },
  },
  animate: {
    opacity: [0, 1],
    strokeDasharray: 17,
    strokeDashoffset: [17, 34],
    transition: {
      duration: 400,
      ease: 'easeInOut',
      opacity: { duration: 100 },
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  // hoverFn('normal');
}
<\/script>
`;export{n as default};
