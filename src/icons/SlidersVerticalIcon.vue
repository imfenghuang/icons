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
        v-for="(item, index) in variants"
        :key="`${item.x1}_${item.y1}_${item.x2}_${item.y2}`"
        :ref="el => (targetList[index] = el)"
        :x1="item.x1"
        :x2="item.x2"
        :y1="item.y1"
        :y2="item.y2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SlidersVerticalIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 12,
    mass: 0.4,
  },
};

const variants = [
  // vertical line
  {
    x1: 4,
    x2: 4,
    y1: 3,
    y2: 21,
    normal: {
      strokeDasharray: '14 4',
      strokeDashoffset: 7,
    },
    animate: {
      strokeDasharray: '14 4',
      strokeDashoffset: 13,
    },
  },
  {
    x1: 12,
    x2: 12,
    y1: 3,
    y2: 21,
    normal: {
      strokeDasharray: '14 4',
      strokeDashoffset: 9,
    },
    animate: {
      strokeDasharray: '14 4',
      strokeDashoffset: 2,
    },
  },
  {
    x1: 20,
    x2: 20,
    y1: 3,
    y2: 21,
    normal: {
      strokeDasharray: '14 4',
      strokeDashoffset: 5,
    },
    animate: {
      strokeDasharray: '14 4',
      strokeDashoffset: 11,
    },
  },
  // horizontal line
  {
    x2: 6,
    x1: 2,
    y1: 14,
    y2: 14,
    normal: {
      translateY: 0,
    },
    animate: {
      translateY: -6,
    },
  },
  {
    x2: 14,
    x1: 10,
    y1: 8,
    y2: 8,
    normal: {
      translateY: 0,
    },
    animate: {
      translateY: 7,
    },
  },
  {
    x2: 22,
    x1: 18,
    y1: 16,
    y2: 16,
    normal: {
      translateY: 0,
    },
    animate: {
      translateY: -6,
    },
  },
];
const len = variants.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants[i].normal,
    enter: variants[i].normal,
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const hoverFn = type => {
  for (let i = 0; i < len; i++) {
    const variant = variants[i][type];
    const instance = targetInstanceList[i];
    instance.apply({ ...variant, ...defaultTransition });
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
