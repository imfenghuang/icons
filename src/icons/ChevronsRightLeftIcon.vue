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
      <Motion is="path" :ref="targetList[0]" d="m20 17-5-5 5-5" />
      <Motion is="path" :ref="targetList[1]" d="m4 17 5-5-5-5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChevronsRightLeftIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: {
    translateX: 0,
  },
  animate: [
    {
      translateX: -2,
    },
    {
      translateX: 2,
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
    instance.apply({
      ...variant,
      ...defaultTransition,
    });
  }
};
function mouseEnterHandler() {
  hoverFn('animate');
}
function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
