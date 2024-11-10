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
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <Motion is="circle" :ref="targetList[0]" cx="16" cy="9" r="2.9" />
      <Motion is="circle" :ref="targetList[1]" cx="6" cy="5" r="3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HandCoinsIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  duration: 300,
  opacity: { duration: 200 },
  type: 'spring',
  stiffness: 150,
  damping: 15,
  bounce: 0.8,
};

// TODO hover bounce
const variants = {
  normal: [
    {
      translateY: 0,
      opacity: 1,
    },
    {
      translateY: 0,
      opacity: 1,
      transition: {
        delay: 150,
      },
    },
  ],
  animate: [
    {
      opacity: [0, 1],
      translateY: [-20, 0],
    },
    {
      opacity: [0, 1],
      translateY: [-20, 0],
      transition: {
        delay: 150,
      },
    },
  ],
};

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[i],
    enter: variants.normal[i],
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = variants[type][i];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
      transition: {
        ...defaultTransition,
        ...variant.transition,
      },
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
