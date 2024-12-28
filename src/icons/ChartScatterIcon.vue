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
        is="circle"
        v-for="(item, index) of dots"
        :ref="el => (targetList[index] = el)"
        :key="`${item.cx}_${item.cy}`"
        :cx="item.cx"
        :cy="item.cy"
        r=".5"
        fill="currentColor"
      />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ChartScatterIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const dots = [
  { cx: '7.5', cy: '7.5' },
  { cx: '18.5', cy: '5.5' },
  { cx: '11.5', cy: '11.5' },
  { cx: '7.5', cy: '16.5' },
  { cx: '17.5', cy: '14.5' },
];

const len = dots.length;
const targetList = ref(new Array(len).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

for (let i = 0; i < len; i++) {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: { opacity: 1 },
    enter: { opacity: 1 },
  });
}

onMounted(() => {
  for (let i = 0; i < len; i++) {
    targetInstanceList[i].target = targetList.value[i];
  }
});

const calculateTransition = i => {
  return {
    transition: {
      delay: i * 150,
      duration: 300,
    },
  };
};

const updateOpacity = opacity => {
  for (let i = 0; i < len; i++) {
    const instance = targetInstanceList[i];
    instance.apply({
      opacity,
      ...calculateTransition(i),
    });
  }
};

const hoverFn = async (isHover = true) => {
  if (!isHover) {
    updateOpacity(1);
    return;
  }
  for (let i = 0; i < len; i++) {
    const instance = targetInstanceList[i];
    if (i < len - 1) {
      instance.apply({
        opacity: 0,
        ...calculateTransition(i),
      });
    } else {
      await instance.apply({
        opacity: 0,
        ...calculateTransition(i),
      });
      updateOpacity(1);
    }
  }
};

function mouseEnterHandler() {
  hoverFn(true);
}

function mouseLeaveHandler() {
  hoverFn(false);
}
</script>
