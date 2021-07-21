<template>
  <transition
    appear
    enter-active-class="transform transition duration-1000 ease-cubic-button-2"
    enter-from-class="opacity-75 scale-90 grayscale"
    enter-to-class="opacity-100 scale-100 grayscale-0"
  >
    <div
      element="STEP-PANEL"
      max-w="full"
      p="6 lg:8 xl:10"
      bg="white"
      border="rounded-3xl"
      shadow="md"
      text="gray-600"
      transition="ease-button-cubic-2 duration-300"
    >
      <slot></slot>
    </div>
  </transition>
</template>
