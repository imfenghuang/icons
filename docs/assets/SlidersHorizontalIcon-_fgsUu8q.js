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
        is="line"
        v-for="(item, index) in variants"
        :key="\`\${item.x1}_\${item.y1}_\${item.x2}_\${item.y2}\`"
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
  name: 'SlidersHorizontalIcon',
};
<\/script>

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
  // horizontal line
  {
    x1: 3,
    x2: 21,
    y1: 4,
    y2: 4,
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
    x1: 3,
    x2: 21,
    y1: 12,
    y2: 12,
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
    x1: 3,
    x2: 21,
    y1: 20,
    y2: 20,
    normal: {
      strokeDasharray: '14 4',
      strokeDashoffset: 5,
    },
    animate: {
      strokeDasharray: '14 4',
      strokeDashoffset: 11,
    },
  },
  // vertical line
  {
    x1: 14,
    x2: 14,
    y1: 2,
    y2: 6,
    normal: {
      translateX: 0,
    },
    animate: {
      translateX: -6,
    },
  },
  {
    x1: 8,
    x2: 8,
    y1: 10,
    y2: 14,
    normal: {
      translateX: 0,
    },
    animate: {
      translateX: 7,
    },
  },
  {
    x1: 16,
    x2: 16,
    y1: 18,
    y2: 22,
    normal: {
      translateX: 0,
    },
    animate: {
      translateX: -6,
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
<\/script>
`;export{n as default};
