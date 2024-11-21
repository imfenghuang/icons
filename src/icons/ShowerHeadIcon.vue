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
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <g>
        <Motion
          is="path"
          v-for="(item, index) of paths"
          :key="item"
          :ref="el => (targetList[index + 1] = el)"
          :d="item"
          :variants="variants"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ShowerHeadIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = ['M14 17v.01', 'M10 16v.01', 'M13 13v.01', 'M16 10v.01', 'M11 20v.01', 'M17 14v.01', 'M20 11v.01'];

const variants = {
  normal: {
    opacity: 1,
  },
  animate: i => {
    return {
      opacity: [1, 0.2, 1],
      transition: {
        duration: 1000,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 150,
      },
    };
  },
};

const len = paths.length + 1;
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
