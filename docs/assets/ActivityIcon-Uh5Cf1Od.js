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
        ref="target"
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ActivityIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  normal: {
    opacity: 1,
    strokeDasharray: 50,
    strokeDashoffset: 0,
    transition: {
      duration: 600,
      ease: 'linear',
      opacity: { duration: 100 },
    },
  },
  animate: {
    opacity: [0, 1],
    strokeDasharray: 50,
    strokeDashoffset: [50, 100],
    transition: {
      duration: 600,
      ease: 'linear',
      opacity: { duration: 100 },
    },
  },
};

const target = ref();
const targetInstance = useMotion(target, {
  initial: variants.normal,
  enter: variants.normal,
});

const hoverFn = async type => {
  const variant = variants[type];
  targetInstance.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  // if mouseenter and then quickly mouseleave, the rest \`stroke-dashoffset\` will
  // still duration 600ms, but the rest offset is less then 50, so the speed is
  // different, obviously slower. So remove the mouseleave animation.
  // hoverFn('normal');
}
<\/script>
`;export{n as default};
