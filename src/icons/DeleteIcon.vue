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
      <Motion is="g" ref="targetG">
        <path d="M3 6h18" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </Motion>

      <Motion is="path" ref="targetPath" d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" />
      <Motion is="g" ref="targetG2">
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </Motion>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DeleteIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  g: {
    normal: { y: 0 },
    animate: { y: -1.1 },
  },
  path: {
    normal: { y: 0 },
    animate: { y: 1 },
  },
  g2: {
    normal: { y: 0 },
    animate: { y: 0.5 },
  },
};

const defaultTransition = {
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  },
};

// TODO
const targetG = ref();
const targetInstanceG = useMotion(targetG, {
  initial: variants.g.normal,
  enter: variants.g.normal,
});

const targetG2 = ref();
const targetInstanceG2 = useMotion(targetG2, {
  initial: variants.g2.normal,
  enter: variants.g2.normal,
});

const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const targetInstance = {
  g: targetInstanceG,
  g2: targetInstanceG2,
  path: targetInstancePath,
};

const hoverFn = type => {
  Object.keys(targetInstance).forEach(target => {
    const variant = variants[target][type];
    const instance = targetInstance[target];
    instance.apply({
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
