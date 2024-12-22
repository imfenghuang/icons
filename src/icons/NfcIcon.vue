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
        is="path"
        v-for="(item, index) in paths"
        :key="item.d"
        :ref="el => (targetList[index] = el)"
        :d="item.d"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'NfcIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  { d: 'M6 8.32a7.43 7.43 0 0 1 0 7.36', delay: 0 },
  { d: 'M9.46 6.21a11.76 11.76 0 0 1 0 11.58', delay: 150 },
  { d: 'M12.91 4.1a15.91 15.91 0 0 1 .01 15.8', delay: 300 },
  { d: 'M16.37 2a20.16 20.16 0 0 1 0 20', delay: 450 },
];

const variants = {
  normal: {
    opacity: 1,
  },
  fadeIn: i => {
    return {
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: paths[i].delay,
      },
    };
  },
  fadeOut: i => {
    return {
      opacity: i === 0 ? 1 : 0,
      transition: { duration: 200 },
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

const animateFn = async (type, animateType) => {
  const p = [];
  for (let i = 0; i < len; i++) {
    const variant = type === 'animate' ? variants[animateType](i, type) : variants.normal;
    const instance = targetInstanceList[i];
    p.push(instance.apply(variant));
  }
  return await Promise.all(p);
};

const hoverFn = async (type, repeatTime = Infinity) => {
  await animateFn(type, 'fadeOut');
  if (type !== 'animate') return;
  await animateFn(type, 'fadeIn');
  // if you want to infinite loop, set repeatTime to Infinity
  if (repeatTime === Infinity) {
    hoverFn(type, repeatTime);
    return;
  }
  // if you want to repeat the animation for a certain number of times, set repeatTime to a number
  repeatTime--;
  if (repeatTime) {
    hoverFn(type, repeatTime);
  }
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
</script>
