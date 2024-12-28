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
      <Motion is="line" :ref="targetList[0]" x1="19" x2="10" y1="4" y2="4" />
      <Motion is="line" :ref="targetList[1]" x1="14" x2="5" y1="20" y2="20" />
      <Motion is="line" :ref="targetList[2]" x1="15" x2="9" y1="4" y2="20" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ItalicIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  horizontal: {
    normal: {
      opacity: 1,
      strokeDasharray: 9,
      strokeDashoffset: [0, 0],
      transition: {
        duration: 300,
      },
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 9,
      strokeDashoffset: [9, 18],
      transition: {
        duration: 300,
      },
    },
  },
  vertical: {
    normal: {
      opacity: 1,
      strokeDasharray: 17,
      strokeDashoffset: [0, 0],
      transition: {
        delay: 100,
        duration: 300,
      },
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 17,
      strokeDashoffset: [17, 0],
      transition: {
        delay: 100,
        duration: 300,
      },
    },
  },
};

const len = 3;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  const variantType = i === len - 1 ? 'vertical' : 'horizontal';
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[variantType].normal,
    enter: variants[variantType].normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variantType = i === len - 1 ? 'vertical' : 'horizontal';
    const variant = variants[variantType][type];
    const instance = targetInstanceList[i];
    instance.apply(variant);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  // hoverFn('normal');
}
</script>
