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
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke-width="5.632"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Motion is="g" ref="targetG" transform-origin="center center">
        <circle cx="151.273" cy="407.273" r="11.636" />
        <circle cx="244.364" cy="372.364" r="11.636" />
        <circle cx="290.909" cy="418.909" r="11.636" />
        <circle cx="221.091" cy="453.818" r="11.636" />
        <circle cx="372.364" cy="430.545" r="11.636" />
      </Motion>
      <Motion
        is="path"
        ref="targetPath"
        transform-origin="center center"
        d="M456.145,436.364l-79.127-124.509c0-2.327-2.327-4.655-3.491-5.818l-34.909-55.855c-8.146-13.964-12.8-29.091-12.8-44.218 V67.491c13.964-4.655,23.273-17.455,23.273-32.582C349.091,15.127,333.964,0,314.182,0H197.818 c-19.782,0-34.909,15.127-34.909,34.909c0,19.782,15.127,34.909,34.909,34.909h69.818c6.982,0,11.636-4.655,11.636-11.636 s-4.655-11.636-11.636-11.636h-69.818c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636h116.364 c6.982,0,11.636,4.655,11.636,11.636c0,6.982-4.655,11.636-11.636,11.636s-11.636,4.655-11.636,11.636v147.782 c0,19.782,5.818,39.564,16.291,55.855l19.782,31.418c-30.255-5.818-64-2.327-88.436,10.473 c-23.273,11.636-60.509,13.964-87.273,4.655l30.255-46.545c10.473-16.291,16.291-36.073,16.291-55.855V104.727 c0-6.982-4.655-11.636-11.636-11.636s-11.636,4.655-11.636,11.636v101.236c0,15.127-4.655,30.255-12.8,43.055l-34.909,55.855 c-1.164,1.164-2.327,2.327-3.491,3.491c0,1.164,0,1.164-1.164,2.327L55.855,436.364c-5.818,9.309-9.309,19.782-9.309,31.418v9.309 c0,19.782,15.127,34.909,34.909,34.909h349.091c19.782,0,34.909-15.127,34.909-34.909v-9.309 C465.455,456.145,461.964,445.673,456.145,436.364z M443.345,477.091h-1.164c0,6.982-4.655,11.636-11.636,11.636H81.455 c-6.982,0-11.636-4.655-11.636-11.636v-9.309c0-6.982,2.327-12.8,5.818-18.618l75.636-119.855 c15.127,5.818,32.582,8.145,50.036,8.145c22.109,0,43.055-4.655,60.509-12.8c25.6-12.8,68.655-13.964,96.582-1.164l79.127,125.673 c3.491,5.818,5.818,11.636,5.818,18.618V477.091z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'FlaskIcon',
};
<\/script>

<script setup>
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

const variants = {
  g: {
    normal: { rotate: 0, translateY: 0 },
    animate: {
      translateY: -12,
      rotate: [0, 5, -5, 3, -3, 0],
      transition: {
        ease: 'linear',
        rotate: { duration: 800 },
      },
    },
  },
  path: {
    normal: { rotate: 0, scale: 1 },
    animate: {
      scale: 0.9,
      rotate: [0, 6, -6, 3, -3, 0],
      transition: {
        duration: 800,
        scale: {
          duration: 300,
          type: 'spring',
          bounce: 0.4,
          stiffness: 150,
          damping: 10,
        },
      },
    },
  },
};

const targetG = ref();
const targetInstanceG = useMotion(targetG, {
  initial: variants.g.normal,
  enter: variants.g.normal,
});
const targetPath = ref();
const targetInstancePath = useMotion(targetPath, {
  initial: variants.path.normal,
  enter: variants.path.normal,
});

const hoverFn = type => {
  let variant = variants.g[type];
  targetInstanceG.apply(variant);

  variant = variants.path[type];
  targetInstancePath.apply(variant);
};

function mouseEnterHandler() {
  hoverFn('animate');
}

function mouseLeaveHandler() {
  hoverFn('normal');
}
<\/script>
`;export{n as default};
