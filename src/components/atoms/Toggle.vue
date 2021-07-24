<template>
  <SwitchGroup
    as="div"
    element="TOGGLE__GROUP"
    flex="inline 1 wrap"
    grid="gap-2"
    align="self-end items-center"
    m="b-0.5"
    select="none"
  >
    <SwitchLabel active element="TOGGLE__LABEL" cursor="pointer">
      {{ t("toggle.rounded") }}
    </SwitchLabel>

    <Switch
      v-model="enabled"
      element="TOGGLE"
      :class="enabled ? 'from-green-500 to-green-700' : 'from-gray-300 to-gray-200'"
      pos="relative"
      flex="inline shrink-0"
      h="6"
      w="16"
      bg="gradient-to-r origin-border"
      border="2 transparent rounded-xl"
      shadow="md"
      cursor="pointer"
      outline="focus:none"
      ring="focus-visible:2 offset-2 yellow"
    >
      <span sr="only">Use setting</span>

      <span
        element="TOGGLE__CIRCLE"
        aria-hidden="true"
        :class="enabled ? 'translate-x-10' : 'translate-x-0'"
        display="inline-block"
        h="5"
        w="5"
        border="rounded-xl gray-200"
        bg="white"
        shadow="lg"
        transform="~"
        class="will-transform"
        transition="ease-button-cubic-1 duration-200"
        pointer="none"
        ring="0"
      />
    </Switch>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({ initialValue: { default: true, type: Boolean } })
const emit = defineEmits(['update-round-time'])

const { initialValue } = props
const enabled = ref(initialValue)

watch(enabled, (newValue) => {
  emit('update-round-time', newValue)
})
</script>
