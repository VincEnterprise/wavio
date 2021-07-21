<template>
  <ListboxButton
    v-slot="{ open }"
    element="BUTTON"
    class="group"
    pos="relative"
    display="block"
    w="full"
    outline="focus:none"
    cursor="pointer"
  >
    <span
      element="BUTTON__SHADOW"
      pos="absolute inset-0"
      border="rounded-2xl"
      bg="gray-300"
      filter="~ blur-sm"
      transition="
        transform
        duration-600 ease-button-cubic-1
        group-hover:duration-250
        group-focus-visible:duration-250
      "
      class="will-transform"
      transform="
        ~ translate-y-0.5
        group-hover:translate-y-1
        group-focus-visible:translate-y-1
      "
    >
    </span>

    <span
      element="BUTTON__EDGE"
      pos="absolute inset-0"
      border="rounded-2xl"
      class="bg-button-edge"
    >
    </span>

    <span
      element="BUTTON__FRONT"
      display="block"
      p="y-2 l-6 r-12 sm:y-3 l-8 r-14"
      bg="white"
      border="2 gray-100 rounded-2xl"
      transition="
        transform duration-600 ease-button-cubic-1
        group-hover:duration-250 ease-button-cubic-2
        group-focus-visible:duration-250 ease-button-cubic-2
        group-active:duration-34
        "
      class="will-transform"
      transform="
        ~ -translate-y-1.5
        group-hover:-translate-y-2
        group-focus-visible:-translate-y-2
        group-active:-translate-y-0.5
      "
      :class="open && '!ease-button-cubic-2 !duration-34 !-translate-y-0.5 group-hover:!-translate-y-0.5'"
    >
      <slot></slot>
    </span>
  </ListboxButton>
</template>


//     :transform="open && '-translate-y-0.5 group-hover:-translate-y-0.5'"
      :transition="open && 'ease-button-cubic-2 duration-34'"