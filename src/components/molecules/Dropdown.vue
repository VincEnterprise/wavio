<template>
  <Listbox v-slot="{ open }" v-model="selectedOption">
    <ListboxLabel class="label">
      <component :is="labelIcon" class="label__icon" />
      {{ label }}
    </ListboxLabel>
    <div class="relative">
      <DropdownButton select="none" class="group">
        <span
          element="BUTTON__LABEL"
          display="block"
          text="left truncate"
          font="sm:tracking-wider"
        >
          {{ selectedOption.label }}
        </span>

        <span
          element="BUTTON__INNER"
          pos="absolute inset-y-0 right-0"
          flex="~"
          align="items-center"
          p="r-2 sm:r-3"
          pointer="none"
        >
          <div
            element="BUTTON-INNER__EXPAND-BUTTON"
            pos="relative"
            w="7 sm:8"
            h="7 sm:8"
            overflow="hidden"
            border="rounded-xl"
            gradient="to-b from-gray-100 to-gray-200"
            shadow="sm"
          >
            <div
              element="BUTTON-INNER__EXPAND-BUTTON--HOVER"
              pos="absolute inset-0"
              opacity="0 group-focus-visible:100 group-hover:100"
              gradient="to-b from-yellow-400 to-yellow-500"
              border="rounded-xl"
              transition="opacity duration-400 ease-button-cubic-1"
            >
            </div>

            <uil-angle-down
              element="BUTTON-INNER__CHEVRON"
              :class="open ? 'rotate-180 duration-400' : 'duration-200'"
              pos="absolute inset-0"
              bg="red"
              w="full"
              h="full"
              text="gray-600 group-hover:yellow-900"
              transform="~"
              class="will-transform"
              transition="ease-button-cubic-1 duration-400"
            />
          </div>
        </span>
      </DropdownButton>

      <DropdownOptions :options-array="optionsArray" />
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import IconBolt from 'virtual:vite-icons/uil/bolt'
import IconClock from 'virtual:vite-icons/uil/clock'
import type { Option } from '~/types'

const emit = defineEmits(['update-option'])

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  initialValue: {
    type: Number,
    required: true,
  },
  optionsArray: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
})
const { id, initialValue, optionsArray, icon } = props

const labelIcon = computed(() => {
  if (icon === 'uil-bolt') return IconBolt
  if (icon === 'uil-clock') return IconClock
  return false
})

// Find the index in optionsArray where initialValue is located
const initialPos = optionsArray.map((option: Option) => option.value).indexOf(initialValue)
const selectedOption = ref(optionsArray[initialPos])

// Send selectedOption to ConverterGroup.vue
watch(selectedOption, (selectedOption: Option) => {
  emit('update-option', {
    optionValue: selectedOption.value,
    dropdownId: id,
  })
})
</script>
