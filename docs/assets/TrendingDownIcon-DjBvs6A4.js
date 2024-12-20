const n=`<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      is="svg"
      :ref="targetList[0]"
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
      <Motion is="polyline" :ref="targetList[1]" points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <Motion is="polyline" :ref="targetList[2]" points="22 17 16 17" />
      <Motion is="polyline" :ref="targetList[3]" points="22 17 22 11" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'TrendingDownIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const arrowTransition = {
  transition: {
    delay: 300,
    duration: 300,
    opacity: { duration: 100, delay: 300 },
  },
};

const arrowVariant = {
  normal: {
    opacity: 1,
    strokeDasharray: 6,
    strokeDashoffset: [0, 0],
  },
  animate: {
    opacity: [0, 1],
    strokeDasharray: 6,
    strokeDashoffset: [6, 0],
    ...arrowTransition,
  },
};

const variants = [
  // svg
  {
    normal: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 0,
      y: 0,
      translateX: [0, 2, 0],
      translateY: [0, 2, 0],
      transition: {
        duration: 500,
      },
    },
  },
  // path
  {
    normal: {
      opacity: 1,
      strokeDasharray: 29,
      strokeDashoffset: [0, 0],
    },
    animate: {
      opacity: [0, 1],
      strokeDasharray: 29,
      strokeDashoffset: [29, 58],
      transition: {
        duration: 400,
        opacity: { duration: 100 },
      },
    },
  },
  // arrow
  {
    ...arrowVariant,
  },
  {
    ...arrowVariant,
  },
];

const len = 4;
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
  // hoverFn('normal');
}
<\/script>
`;export{n as default};
