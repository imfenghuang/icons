<template>
  <div class="flex justify-center items-center gap-2 mt-2" role="button" tabindex="0">
    <div :class="className" v-tooltip.bottom="'copy'" @click="copyHandler">
      <Copy :stroke-width="2" :size="14" v-if="!copied" />
      <Check :stroke-width="1" :size="14" v-else />
    </div>
    <div :class="className" v-tooltip.bottom="'download .vue file'" @click="downloadHandler" role="button" tabindex="0">
      <Download :stroke-width="2" :size="14" />
    </div>
    <a :href="sourceLink" target="_blank" :class="className" v-tooltip.bottom="'view on Github'">
      <ExternalLink :stroke-width="2" :size="14" />
    </a>
  </div>
</template>

<script setup>
import { Copy, Check, Download, ExternalLink } from 'lucide-vue-next';
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  name: {
    default: '',
    type: String,
  },
});
const sourceLink = computed(() => {
  return getShareLink(props.name);
});

const className = ref('cursor-pointer hover:bg-accent rounded-md p-2 transition-colors duration-200');

const source = ref(getCompRaw(props.name));
const { copy, copied } = useClipboard({ source });

const copyHandler = () => {
  copy(source.value);
};

const downloadHandler = () => {
  downloadFile(`${props.name}.vue`, source.value);
};
</script>
