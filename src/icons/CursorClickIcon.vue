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
      <Motion
        is="path"
        ref="targetCursor"
        d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
      />
      <Motion
        is="path"
        v-for="(path, index) in paths"
        :key="path.d"
        :ref="el => (targetList[index] = el)"
        :d="path.d"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CursorClickIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  { d: 'M14 4.1 12 6', x: 1, y: -1 },
  { d: 'm5.1 8-2.9-.8', x: -1, y: 0 },
  { d: 'm6 12-1.9 2', x: -1, y: 1 },
  { d: 'M7.2 2.2 8 5.1', x: 0, y: -1 },
];

const variants = {
  normal: { opacity: 1, x: 0, y: 0 },
  animate: ({ x, y }) => ({
    opacity: [0, 1, 0, 0, 0, 0, 1],
    x: [0, x, 0, 0],
    y: [0, y, 0, 0],
    transition: {
      delay: 1300,
      duration: 800,
      type: 'spring',
      stiffness: 70,
      damping: 10,
      mass: 0.4,
    },
  }),
};

const cursorVariants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: {
      duration: 1000,
      bounce: 0.3,
    },
  },
};

const len = paths.length;
const targetCursor = ref();
const targetInstanceCursor = useMotion(targetCursor, {
  initial: cursorVariants.normal,
  enter: cursorVariants.normal,
});
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
  const variantCursor = cursorVariants[type];
  targetInstanceCursor.apply(variantCursor);
  for (let i = 0; i < len; i++) {
    const { x, y } = paths[i];
    const variant = type === 'animate' ? variants.animate({ x, y }) : variants.normal;
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
