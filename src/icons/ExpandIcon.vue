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
      <Motion is="path" v-for="(path, index) in paths" :key="path" :ref="el => (targetList[index] = el)" :d="path" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ExpandIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  'm21 21-6-6m6 6v-4.8m0 4.8h-4.8',
  'M3 16.2V21m0 0h4.8M3 21l6-6',
  'M21 7.8V3m0 0h-4.8M21 3l-6 6',
  'M3 7.8V3m0 0h4.8M3 3l6 6',
];

const defaultTransition = {
  transition: {
    duration: 100,
    type: 'spring',
    stiffness: 250,
    damping: 25,
  },
};

const variants = {
  normal: { translateX: '0px', translateY: '0px' },
  animate: [
    { translateX: 2 + 'px', translateY: 2 + 'px' },
    { translateX: -2 + 'px', translateY: 2 + 'px' },
    { translateX: 2 + 'px', translateY: -2 + 'px' },
    { translateX: -2 + 'px', translateY: -2 + 'px' },
  ],
};

const len = paths.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal,
    enter: variants.normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants.animate[i] : variants.normal;
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
