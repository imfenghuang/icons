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
      <Motion is="g" ref="target" :transform-origin="transformOrigion">
        <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
        <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
        <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      </Motion>
      <circle cx="12" cy="12" r="10" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoaderPinwheelIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    rotate: 0,
    transitin: {
      type: 'spring',
      stiffness: 50,
      damping: 10,
    },
  },
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 1000,
      ease: 'linear',
    },
  },
};

const transformOrigion = '12 12';

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
