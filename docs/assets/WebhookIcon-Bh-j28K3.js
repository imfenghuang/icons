const n=`<template>
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
      <Motion
        is="path"
        :ref="targetList[0]"
        d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
      />
      <Motion is="path" :ref="targetList[1]" d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <Motion is="path" :ref="targetList[2]" d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WebhookIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    opacity: 1,
    strokeDasharray: 22,
    strokeDashoffset: [0, 0],
  },
  animate: {
    opacity: [0, 1],
    strokeDasharray: 22,
    strokeDashoffset: [21, 0],
    transition: {
      duration: 300,
      delay: 100,
      opacity: { delay: 50 },
    },
  },
};

const len = 3;
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
    const variant = variants[type];
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
