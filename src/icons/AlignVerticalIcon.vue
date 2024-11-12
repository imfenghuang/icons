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
        is="rect"
        :ref="targetList[0]"
        width="10"
        height="6"
        x="7"
        y="9"
        rx="2"
        :transform-origin="variants.transformOrigin[0]"
      />
      <Motion is="path" :ref="targetList[1]" d="M22 20H2" :transform-origin="variants.transformOrigin[1]" />
      <Motion is="path" :ref="targetList[2]" d="M22 4H2" :transform-origin="variants.transformOrigin[2]" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlignVerticalIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 160,
    damping: 17,
    mass: 1,
  },
};

const variants = {
  normal: {
    rect: { scaleY: 1 },
    pathOne: { translateY: 0, scaleX: 1 },
    pathTwo: { translateY: 0, scaleX: 1 },
  },
  animate: {
    rect: { scaleY: 0.85 },
    pathOne: {
      translateY: -2,
      scaleX: 0.9,
    },
    pathTwo: {
      translateY: 2,
      scaleX: 0.9,
    },
  },
  transformOrigin: ['12 12', '12 20', '12 4'],
};
const keys = ['rect', 'pathOne', 'pathTwo'];
const targetList = ref(new Array(keys.length).fill(0).map(() => ref()));
const targetInstanceList = reactive([]);

keys.forEach((key, i) => {
  targetInstanceList[i] = useMotion(targetList.value[i], {
    initial: variants.normal[key],
    enter: variants.normal[key],
  });
});

onMounted(() => {
  keys.forEach((_, i) => {
    targetInstanceList[i].target = targetList.value[i];
  });
});

const hoverFn = type => {
  keys.forEach((key, i) => {
    const variant = variants[type][key];
    targetInstanceList[i].apply({
      ...variant,
      ...defaultTransition,
    });
  });
};
function mouseEnterHandler() {
  hoverFn('animate');
}
function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
