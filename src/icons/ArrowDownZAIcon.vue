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
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <Motion is="path" :ref="targetList[0]" d="M15 4h5l-5 6h5" />
      <Motion is="g" :ref="targetList[1]">
        <path d="M20 18h-5" />
        <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowDownZAIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 240,
    damping: 24,
  },
};

const variants = {
  normal: {
    translateY: 0,
    ...defaultTransition,
  },
  animate: i => ({
    translateY: i * 10,
    ...defaultTransition,
  }),
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
    const variant = type === 'animate' ? variants.animate(i === 0 ? 1 : -1) : variants.normal;
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
