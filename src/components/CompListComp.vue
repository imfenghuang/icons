<template>
  <div class="flex flex-col sm:my-20 my-10 gap-6">
    <div class="relative">
      <input
        ref="inputRef"
        class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
        :placeholder="`Search ${Comps.length} icons`"
        :value="filterName"
        @input="filterComps"
      />
      <kbd
        class="pointer-events-none absolute right-2 top-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100 -translate-y-1/2"
        >{{ isApple ? '⌘' : 'Ctrl' }} + K</kbd
      >
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-3"
    >
      <div
        v-for="Comp in CompsFilter"
        :key="Comp.name"
        class="p-3 border border-input rounded-md flex items-center justify-center flex-col"
      >
        <Suspense>
          <component :is="Comp.icon" />
          <template #fallback>
            <LoadingComp />
          </template>
        </Suspense>

        <p class="text-xs mt-2">{{ Comp.name }}</p>
        <OperationComp :name="Comp.name" />
      </div>
    </div>
    <div class="text-center" v-if="CompsFilter.length === 0">
      <p class="text-xl">No icons found</p>
      <p class="text-muted-foreground">Try other keywords.</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const Comps = ICON_LIST;

const inputRef = ref();
const filterName = ref('');
const CompsFilter = shallowRef(Comps);
const isApple = ref(/iPhone|iPad|iPod|Mac\sOS/.test(navigator.userAgent) ? true : false);

const updateComps = (value: string) => {
  filterName.value = value.trim();
  CompsFilter.value =
    filterName.value === ''
      ? Comps
      : Comps.filter(v => {
          if (v.name.toLowerCase().includes(filterName.value.toLowerCase())) return true;
          if (v.keywords.includes(filterName.value.toLowerCase())) return true;
          return false;
        });
  updateQuery(filterName.value);
};

function filterComps(event: Event) {
  if (!document.startViewTransition) {
    updateComps((event.target as HTMLInputElement).value);
    return;
  }
  document.startViewTransition(() => updateComps((event.target as HTMLInputElement).value));
}

const searchHandler = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
    event.preventDefault();
    nextTick(() => inputRef.value.focus());
  }
};

const initQuery = () => {
  const q = new URLSearchParams(window.location.search).get('q') || '';
  if (q) {
    updateComps(q);
  }
};

const updateQuery = (value: string) => {
  const url = new URL(window.location.href);
  if (value === '') {
    url.searchParams.delete('q');
  } else {
    url.searchParams.set('q', value);
  }
  window.history.replaceState({}, '', url);
};

onMounted(() => {
  document.addEventListener('keydown', searchHandler);
  initQuery();
});

onUnmounted(() => {
  document.removeEventListener('keydown', searchHandler);
});
</script>
