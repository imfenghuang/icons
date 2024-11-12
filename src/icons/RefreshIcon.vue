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
      ref="target"
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
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5"
    /></Motion>
  </div>
</template>

<script>
export default {
  name: 'RefreshIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: { type: 'spring', stiffness: 250, damping: 25 },
};

const variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: -50,
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = type => {
  const variant = variants[type];
  targetInstance.apply({ ...variant, ...defaultTransition });
};
function mouseEnterHandler() {
  hoverFn('animate');
}
function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
