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
      style="overflow: visible"
    >
      <Motion is="path" :ref="targetList[0]" d="M18 20.5L19.5 22" />
      <Motion is="path" :ref="targetList[1]" d="M6 20.5L4.5 22" />
      <Motion
        is="path"
        :ref="targetList[2]"
        d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z"
      />
      <Motion
        is="path"
        :ref="targetList[3]"
        d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898"
      />
      <!--  -->
      <Motion is="path" :ref="targetList[4]" d="M18 2L21.747 5.31064" />
      <Motion is="path" :ref="targetList[5]" d="M6 2L2.25304 5.31064" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlarmClockIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const pathOne = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 200,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -1.5,
    x: [-1, 1, -1, 1, -1, 0],
    transition: {
      y: {
        duration: 200,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 300,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const pathTwo = {
  normal: {
    y: 0,
    x: 0,
    transition: {
      duration: 200,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    y: -1.5,
    x: [-2, 2, -2, 2, -2, 0],
    transition: {
      y: {
        duration: 200,
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      x: {
        duration: 300,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
};

const len = 6;
const variants = Array.from({ length: len }, i => (i < 4 ? pathOne : pathTwo));
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
    const variant = type === 'animate' ? variants[i].animate : variants[i].normal;
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
<\/script>
`;export{n as default};
