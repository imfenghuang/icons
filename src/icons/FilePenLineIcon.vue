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
      <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
      <Motion
        is="path"
        :ref="targetList[0]"
        d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      />
      <Motion is="path" :ref="targetList[1]" d="M8 18h5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FilePenLineIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = [
  {
    normal: {
      rotate: 0,
      x: 0,
      y: 0,
      transition: {
        duration: 300,
        ease: 'easeInOut',
      },
    },
    animate: {
      rotate: [-0.3, 0.2, -0.4],
      x: [0, -0.5, 1, 0],
      y: [0, 1, -0.5, 0],
      transition: {
        duration: 500,
        repeat: 1,
        ease: 'easeInOut',
      },
    },
  },
  {
    normal: {
      strokeDasharray: 5,
      strokeDashoffset: 4,
      transition: {
        duration: 300,
      },
    },
    animate: {
      strokeDasharray: 5,
      strokeDashoffset: [4, 0],
      transition: {
        duration: 500,
      },
    },
  },
];

const len = 2;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[i].normal,
    enter: variants[i].normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = variants[i][type];
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
