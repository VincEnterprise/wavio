<template>
  <div class="flex gap-1.5">
    <template v-for="(character, index) in split" :key="index">
      <span
        v-if="':' === character"
        animate="fade"
        flex="~"
        place="items-center content-center"
        min-h="[56px]"
        h="full"
        p="y-2 lg:0"
        text="3xl gray-800"
        font="leading-none"
      >
        {{ character }}
      </span>

      <transition
        v-else
        mode="out-in"
        leave-active-class="transform transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-x-100"
        leave-to-class="opacity-0 scale-x-1/4"
        enter-active-class="transform transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-x-1/4"
        enter-to-class="opacity-100 scale-x-100"
      >
        <span
          :key="character"
          pos="relative"
          flex="~"
          place="items-center content-center"
          w="9"
          min-h="[56px]"
          p="y-2 lg:0"
          border="rounded-xl"
          gradient="to-b from-gray-700 via-gray-600 to-gray-700"
          shadow="md"
          text="3xl white"
          font="leading-none"
          class="will-transform"
        >
          {{ character }}
        </span>
      </transition>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  time: { type: String, required: true },
})
const { time } = toRefs(props)

// Split each character of the time string into an array
const split = computed(() => {
  return [...time.value]
})
</script>
