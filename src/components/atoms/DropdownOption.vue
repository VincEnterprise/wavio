<template>
  <ListboxOption
    v-slot="{ active, selected }"
    :key="option.value"
    :value="option"
    as="template"
  >
    <li
      element="OPTION"
      pos="relative"
      p="y-1.5 r-3 l-10 sm:y-2 r-4"
      font="sm:tracking-wider"
      select="none"
      cursor="pointer"
      outline="focus:none"
    >
      <div
        v-if="selected"
        element="OPTION--CURRENT"
        :class="active && 'opacity-0'"
        pos="absolute inset-0"
        z="-1"
        p="3px"
        class="mask-exclude"
        gradient="to-b from-yellow-500 to-yellow-400"
        border="rounded-2xl"
        transition="opacity duration-1000"
      >
      </div>

      <div
        element="OPTION--HOVER"
        :class="active ? 'translate-y-0 scale-100 opacity-100 duration-300' : 'scale-50 opacity-0 duration-34'"
        pos="absolute inset-0"
        z="-1"
        gradient="to-b from-yellow-400 to-yellow-500"
        border="rounded-2xl"
        shadow="md"
        text="yellow-900"
        transform="~ origin-left"
        transition="transform opacity ease-button-cubic-1"
        class="will-transform"
      >
      </div>

      <span
        element="OPTION__LABEL"
        :class="active && 'text-yellow-900'"
        display="block"
        text="truncate"
        transition="colors duration-200"
      >
        {{ option.label }}
      </span>

      <span
        v-if="selected"
        element="OPTION__CHECK-CONTAINER"
        pos="absolute inset-y-0 left-0"
        flex="~"
        align="items-center"
        p="l-3"
      >
        <uil-check
          element="OPTION__CHECK"
          :class="active && 'text-yellow-900'"
          transition="colors duration-200"
          w="6"
          h="6"
        />
      </span>
    </li>
  </ListboxOption>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Option } from '~/types'

defineProps({
  option: {
    type: Object as PropType<Option>,
    required: true,
  },
})
</script>
