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
      <Motion is="path" ref="target" d="M17 12H7" />
      <path d="M19 18H5" />
      <path d="M21 6H3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlignCenterIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 3, -3, 2, -2, 0],
    transition: {
      ease: 'linear',
      translateX: {
        duration: 1000,
      },
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
  hoverFn('normal');
}
</script>
