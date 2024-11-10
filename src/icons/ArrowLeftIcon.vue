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
      <Motion is="path" :ref="targetList[0]" d="m12 19-7-7 7-7" />
      <Motion is="path" :ref="targetList[1]" d="M19 12H5" :transform-origin="variants.transformOrigin" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowLeftIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: [
    {
      translateX: 0,
    },
    {
      scaleX: 1,
    },
  ],
  animate: [
    {
      translateX: [0, 3, 0],
      transition: {
        duration: 400,
      },
    },
    // TODO different d
    {
      scaleX: [1, 0.8, 1],
      transition: {
        duration: 400,
      },
    },
  ],
  transformOrigin: '19 12',
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
    const variant = type === 'animate' ? variants.animate[i] : variants.normal[i];
    const instance = targetInstanceList[i];
    instance.apply({
      ...variant,
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
