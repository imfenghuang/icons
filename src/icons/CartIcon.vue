<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    role="button"
    tabindex="0"
  >
    <Motion
      ref="targetSvg"
      is="svg"
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
        ref="targetPath"
        is="path"
        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
      />
    </Motion>
  </div>
</template>

<script>
export default {
  name: 'CartIcon',
};
</script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const targetSvg = ref();
const targetPath = ref();

const motionSvgInstance = useMotion(targetSvg, {
  initial: {
    scale: 1,
  },
  enter: {
    scale: 1,
    y: [0, 0, 0],
  },
});

const motionPathInstance = useMotion(targetPath, {
  initial: {
    y: 0,
  },
  enter: {
    y: 0,
  },
});

const lidVariants = {
  normal: { y: 0 },
  animate: {
    y: -1.1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
};

const cartVariants = {
  normal: { scale: 1 },
  animate: {
    scale: 1.1,
    transition: {
      duration: 200,
    },
  },
  hover: {
    y: [0, -5, 0],
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
  },
  repeat: {
    y: [0, -5, 0],
    transition: {
      duration: 400,
      delay: 100,
      ease: 'easeInOut',
    },
  },
};

function mouseEnterHandler() {
  motionSvgInstance.apply(cartVariants.animate);
  motionSvgInstance.apply(cartVariants.hover).then(() => {
    motionSvgInstance.apply(cartVariants.repeat);
  });
  motionPathInstance.apply(lidVariants.animate);
}

function mouseLeaveHandler() {
  motionSvgInstance.apply(cartVariants.normal);
  motionPathInstance.apply(lidVariants.normal);
}
</script>
