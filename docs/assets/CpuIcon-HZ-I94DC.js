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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" rx="1" y="9" />
      <Motion
        is="path"
        v-for="(path, index) in paths"
        :key="path.d"
        :ref="el => (targetList[index] = el)"
        :d="path.d"
        :transform-origin="path.transformOrigin"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CpuIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  {
    d: 'M2 15h2',
    transformOrigin: '3 15',
    direction: 'X',
  },
  {
    d: 'M2 9h2',
    transformOrigin: '3 9',
    direction: 'X',
  },
  {
    d: 'M20 15h2',
    transformOrigin: '21 15',
    direction: 'X',
  },
  {
    d: 'M20 9h2',
    transformOrigin: '21 9',
    direction: 'X',
  },
  {
    d: 'M15 2v2',
    transformOrigin: '15 3',
    direction: 'Y',
  },
  {
    d: 'M15 20v2',
    transformOrigin: '15 21',
    direction: 'Y',
  },
  {
    d: 'M9 2v2',
    transformOrigin: '9 3',
    direction: 'Y',
  },
  {
    d: 'M9 20v2',
    transformOrigin: '9 21',
    direction: 'Y',
  },
];

const defaultTransition = {
  transition: {
    duration: 500,
    ease: 'easeInOut',
    repeat: 1,
  },
};

const variants = {
  normal: {
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: i => {
    return {
      opacity: [1, 0.8, 1],
      [\`scale\${paths[i].direction}\`]: [1, 1.5, 1],
    };
  },
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
    const variant = type === 'animate' ? variants.animate(i) : variants.normal;
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
<\/script>
`;export{n as default};
