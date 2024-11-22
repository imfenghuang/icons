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
  name: 'WifiIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const paths = [
  { d: 'M12 20h.01', delay: 0 },
  { d: 'M8.5 16.429a5 5 0 0 1 7 0', delay: 100 },
  { d: 'M5 12.859a10 10 0 0 1 14 0', delay: 200 },
  { d: 'M2 8.82a15 15 0 0 1 20 0', delay: 300 },
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
<\/script>
`;export{n as default};
