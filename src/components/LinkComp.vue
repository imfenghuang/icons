<template>
  <a
    :href="props.href"
    :target="props.target"
    :rel="props.rel || 'noreferrer'"
    class="inline-flex transition-colors duration-200 hover:border-foreground/30 items-center gap-1 rounded border bg-muted px-2 py-[2px] text-xs font-medium text-muted-foreground opacity-100"
    :class="props.class"
    :style="props.style"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
  target: String,
  rel: String,
  class: String || Object || Array,
  style: String || Object || Array,
});
</script>
