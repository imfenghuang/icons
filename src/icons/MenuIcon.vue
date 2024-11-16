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
      <Motion
        is="line"
        v-for="(line, index) in lines"
        :key="`${line.x1}_${line.x2}_${line.y1}_${line.y2}`"
        :ref="el => (targetList[index] = el)"
        stroke="currentColor"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        :transform-origin="variants.transformOrigin[index]"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MenuIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const lines = [
  { x1: 4, y1: 6, x2: 20, y2: 6 },
  { x1: 4, y1: 12, x2: 20, y2: 12 },
  { x1: 4, y1: 18, x2: 20, y2: 18 },
];

const defaultTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

const variants = {
  normal: {
    rotate: 0,
    y: 0,
    opacity: 1,
  },
  animate: i => ({
    rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
    y: i === 0 ? 6 : i === 2 ? -6 : 0,
    opacity: i === 1 ? 0 : 1,
    transition: defaultTransition,
  }),
  // TODO transform-origin calculate
  transformOrigin: ['12 6', '0 0', '12 18'],
};

const len = lines.length;
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
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
    const instance = targetInstanceList[i];
    instance.apply({
      transition: defaultTransition,
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
