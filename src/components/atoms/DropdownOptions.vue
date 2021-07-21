<template>
  <transition
    leave-active-class="will-transform transition transform ease-in origin-top duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-y-90"
    enter-active-class="will-transform transition transform ease-out origin-top duration-200"
    enter-from-class="opacity-0 scale-y-90"
    enter-to-class="opacity-100 scale-100"
  >
    <ListboxOptions
      element="LISTBOX"
      pos="absolute"
      z="10"
      w="full"
      h="52 md:60"
      m="t-2 s:t-4"
      overflow="hidden"
      bg="white"
      border="2 gray-100 rounded-3xl"
      shadow="3xl"
      select="none"
      outline="focus:none"
    >
      <ScrollShadows>
        <slot></slot>
        <DropdownOption v-for="(option, key) in optionsArray" :key="key" :option="option"></DropdownOption>
      </ScrollShadows>
    </ListboxOptions>
  </transition>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Option } from '~/types'

const props = defineProps({
  optionsArray: {
    type: Array as PropType<Option[]>,
    required: true,
  },
})
</script>
