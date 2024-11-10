## `imfenghuang/icons` is beautifully crafted animated icons for Vue

Demo: [https://imfenghuang.github.io/icons](https://imfenghuang.github.io/icons/)

## Contributing

We welcome contributions to `imfenghuang/icons`! Please read our [contributing guidelines](CONTRIBUTING.md) on how to submit improvements and new icons.

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold. Let’s keep things fair and respect each other’s work.

## Notes

This project is a work in progress, and i'm continuously working to improve and expand this collection. I’d love to hear your feedback or see your contributions as the project evolves!

## Usage

This project use `unplugin-auto-import` to auto import APIs. So if your project does not use `unplugin-auto-import`, you need `import { ref, reactive } from 'vue';` by yourself.

```html
<script setup>
  // SearchIcon.Vue
  import { MotionComponent as Motion, useMotion } from '@vueuse/motion';
  // If your project does not use `unplugin-auto-import`, please add the following code yourself
  import { ref } from 'vue';

  const target = ref();

  // ...
</script>
```
