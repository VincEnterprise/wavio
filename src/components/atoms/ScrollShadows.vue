<template>
  <div
    pos="relative"
    flex="~ auto"
    w="full"
    h="full"
    min-h="0"
  >
    <span
      element="SCROLL-SHADOW--TOP"
      pos="absolute inset-x-0 top-0"
      h="6"
      z="20"
      pointer="none"
      gradient="to-b from-white to-white/0"
    >
    </span>

    <div
      w="full"
      p="2 sm:3 md:4"
      overflow="y-auto"
      class="no-scrollbar"
    >
      <slot></slot>
    </div>

    <span
      element="SCROLL-SHADOW--BOTTOM"
      pos="absolute inset-x-0 bottom-0"
      h="6"
      z="20"
      pointer="none"
      gradient="to-t from-white to-white/0"
    >
    </span>
  </div>
</template>
