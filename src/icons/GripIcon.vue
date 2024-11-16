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
        v-for="(circle, index) in circles"
        :key="`${circle.cx}_${circle.cy}`"
        :ref="el => (targetList[index] = el)"
        :cx="circle.cx"
        :cy="circle.cy"
        r="1"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'GripIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const circles = [
  { cx: 19, cy: 5 }, // Top right
  { cx: 12, cy: 5 }, // Top middle
  { cx: 19, cy: 12 }, // Middle right
  { cx: 5, cy: 5 }, // Top left
  { cx: 12, cy: 12 }, // Center
  { cx: 19, cy: 19 }, // Bottom right
  { cx: 5, cy: 12 }, // Middle left
  { cx: 12, cy: 19 }, // Bottom middle
  { cx: 5, cy: 19 }, // Bottom left
];
const len = circles.length;
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
      delay: i * 100,
      duration: 200,
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
        opacity: 0.3,
        ...calculateTransition(i),
      });
    } else {
      await instance.apply({
        opacity: 0.3,
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
