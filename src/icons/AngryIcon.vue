<template>
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
      <circle cx="12" cy="12" r="10" />
      <Motion is="path" :ref="targetList[1]" d="M7.5 8 10 9" transform-origin="8.75 8.5" />
      <Motion is="path" :ref="targetList[2]" d="M14 9 L16.5 8" transform-origin="15.25 8.5" />
      <Motion is="path" :ref="targetList[3]" d="M9 10h.01" transform-origin="9 10" />
      <Motion is="path" :ref="targetList[4]" d="M15 10h.01" transform-origin="15 10" />
      <Motion is="path" :ref="targetList[5]" d="M16 16s-1.5-2-4-2-4 2-4 2" transform-origin="12 15" />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'AngryIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const eyebrowRotation = 20;
const defaultDuration = 600;

const variants = {
  face: {
    normal: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.2, 1.2, 1.2, 1],
      rotate: [0, -3, 3, -1, 1, 0],
      transition: {
        duration: defaultDuration,
        times: [0, 0.2, 0.4, 0.6, 1],
        ease: 'easeInOut',
      },
    },
  },
  leftEyebrow: {
    normal: { rotate: 0 },
    animate: {
      rotate: [0, eyebrowRotation, 0],
      transition: {
        duration: defaultDuration + 200,
      },
    },
  },
  rightEyebrow: {
    normal: { rotate: 0 },
    animate: {
      rotate: [0, -eyebrowRotation, 0],
      transition: {
        duration: defaultDuration + 200,
      },
    },
  },
  eye: {
    normal: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: defaultDuration,
      },
    },
  },
  mouth: {
    normal: { translateY: 0 },
    animate: {
      translateY: [0, -0.5, 0],
      transition: {
        duration: defaultDuration,
      },
    },
  },
};

const keys = ['face', 'leftEyebrow', 'rightEyebrow', 'eye', 'eye', 'mouth'];
const len = keys.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  const key = keys[i];
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[key].normal,
    enter: variants[key].normal,
  });
}

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    const variant = variants[key][type];
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
