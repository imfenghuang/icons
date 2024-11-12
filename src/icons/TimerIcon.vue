<template>
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
      <Motion is="line" ref="targetButton" x1="10" x2="14" y1="2" y2="2" transform-origin="12 2" />
      <Motion is="line" ref="targetTimer" x1="12" x2="15" y1="14" y2="11" transform-origin="12 14" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TimerIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  timer: {
    duration: 600,
    ease: [0.4, 0, 0.2, 1],
  },
  button: {
    duration: 300,
    ease: [0.4, 0, 0.2, 1],
  },
};

const variants = {
  timer: {
    normal: {
      rotate: 0,
    },
    animate: {
      rotate: 315,
      transition: {
        deley: 100,
      },
    },
  },
  button: {
    normal: {
      scale: 1,
      y: 0,
    },
    animate: {
      scale: [0.9, 1],
      y: [0, 1, 0],
    },
  },
};

const targetTimer = ref();
const targetInstanceTimer = useMotion(targetTimer, {
  initial: variants.timer.normal,
  enter: variants.timer.normal,
});
const targetButton = ref();
const targetInstanceButton = useMotion(targetButton, {
  initial: variants.button.normal,
  enter: variants.button.normal,
});

const hoverFn = type => {
  let variant = variants.timer[type];
  targetInstanceTimer.apply({
    ...variant,
    transition: {
      ...variant?.transition,
      ...defaultTransition.timer,
    },
  });

  variant = variants.button[type];
  targetInstanceButton.apply({
    ...variant,
    transition: {
      ...variant?.transition,
      ...defaultTransition.button,
    },
  });
};
function mouseEnterHandler() {
  hoverFn('animate');
}
function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
