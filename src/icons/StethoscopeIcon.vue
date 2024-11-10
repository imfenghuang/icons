<template>
  <div
    className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
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
      <Motion is="path" ref="pathOneTarget" d="M11 2v2" />
      <Motion is="path" ref="pathTwoTarget" d="M5 2v2" />
      <Motion
        is="path"
        ref="pathThreeTarget"
        d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"
        pathLength="1"
        stroke-dashoffset="2"
      />
      <Motion is="path" ref="pathFourTarget" d="M8 15a6 6 0 0 0 12 0v-3" />
      <Motion is="circle" ref="pathFiveTarget" cx="20" cy="10" r="2" />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'StethoscopeIcon',
};
</script>
<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';
// import { onMounted, ref } from 'vue';
//  transition="{
//             duration: DURATION,
//             delay: calculateDelay(2),
//             opacity: { delay: calculateDelay(2) },
//           }"
//         variants="{
//             normal: {
//               pathLength: 1,
//               pathOffset: 0,
//               opacity: 1,
//               transition: { delay: 0 },
//             },
//             animate: {
//               pathOffset: [1, 0],
//               pathLength: [0, 1],
//               opacity: [0, 1],
//             },
//           }"

const DURATION = 250;

const calculateDelay = i => {
  return i === 0 ? 100 : i * DURATION + 100;
};

const pathOneVariants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: DURATION,
      opacity: { delay: calculateDelay(2) },
    },
  },
  animate: {
    pathOffset: [1, 0],
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: DURATION,
      delay: calculateDelay(2),
      opacity: {
        delay: calculateDelay(2),
      },
    },
  },
};

const pathTwoVariants = {
  // transition="{
  //         duration: DURATION,
  //         delay: calculateDelay(2),
  //         opacity: { delay: calculateDelay(2) },
  //       }"
  //     variants="{
  normal: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      delay: 0,
      duration: DURATION,
      opacity: { delay: calculateDelay(2) },
    },
  },
  animate: {
    pathOffset: [1, 0],
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: DURATION,
      delay: calculateDelay(2),
      opacity: { delay: calculateDelay(2) },
    },
  },
  //   }"
};

const pathThreeVariants = {
  // transition="{
  //         duration: DURATION,
  //         delay: calculateDelay(2),
  //         opacity: { delay: calculateDelay(2) },
  //       }"
  //     variants="{
  normal: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: { delay: 0, opacity: { delay: calculateDelay(2) } },
  },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    opacity: [0, 1],
    transition: {
      duration: DURATION,
      delay: calculateDelay(2),
      opacity: { delay: calculateDelay(2) },
    },
  },
  //   }"
};
const pathFourVariants = {
  //  transition="{
  //         duration: DURATION,
  //         delay: calculateDelay(1),
  //         opacity: { delay: calculateDelay(1) },
  //       }"
  //     variants="{
  normal: {
    pathLength: 1,
    pathOffset: 0,
    // opacity: 1,
    // transition: { delay: 0, opacity: { delay: calculateDelay(1) } },
  },
  animate: {
    pathOffset: [1, 0],
    pathLength: [0, 1],
    // opacity: [0, 1],
    // transition: {
    //   duration: DURATION,
    //   delay: calculateDelay(1),
    //   opacity: { delay: calculateDelay(1) },
    // },
  },
  //   }"
};
const pathFiveVariants = {
  //   transition="{
  //             duration: DURATION,
  //             delay: calculateDelay(0),
  //             opacity: { delay: calculateDelay(0) },
  //           }"
  //         variants="{
  normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: DURATION,
      delay: calculateDelay(0),
      opacity: { delay: calculateDelay(0) },
    },
  },
  //   }"
};
const pathOneTarget = ref();
const pathOneInstance = useMotion(pathOneTarget, {
  initial: pathOneVariants.normal,
  enter: pathOneVariants.normal,
});

const pathTwoTarget = ref();
const pathTwoInstance = useMotion(pathTwoTarget, {
  initial: pathTwoVariants.normal,
  enter: pathTwoVariants.normal,
});

const pathThreeTarget = ref();
const pathThreeInstance = useMotion(pathThreeTarget, {
  initial: pathThreeVariants.normal,
  enter: pathThreeVariants.normal,
});

const pathFourTarget = ref();
const pathFourInstance = useMotion(pathFourTarget, {
  initial: pathFourVariants.normal,
  enter: pathFourVariants.normal,
});

const pathFiveTarget = ref();
const pathFiveInstance = useMotion(pathFiveTarget, {
  initial: pathFiveVariants.normal,
  enter: pathFiveVariants.normal,
});

async function mouseEnterHandler() {
  pathOneInstance.apply(pathOneVariants.animate);
  pathTwoInstance.apply(pathTwoVariants.animate);
  pathThreeInstance.apply(pathThreeVariants.animate);
  pathFourInstance.apply(pathFourVariants.animate);
  pathFiveInstance.apply(pathFiveVariants.animate);
}
async function mouseLeaveHandler() {
  pathOneInstance.apply(pathOneVariants.normal);
  pathTwoInstance.apply(pathTwoVariants.normal);
  pathThreeInstance.apply(pathThreeVariants.normal);
  pathFourInstance.apply(pathFourVariants.normal);
  pathFiveInstance.apply(pathFiveVariants.normal);
}
</script>
