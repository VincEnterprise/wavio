<template>
  <transition-group
    tag="div"
    grid="~ cols-1 gap-4 sm:gap-6 md:(gap-8 cols-2)"
    :show="true"
    appear
  >
    <StepPanel
      v-for="{ id, value, data, icon, label, } in dropdowns"
      :key="id"
    >
      <Dropdown
        :id="id"
        :initial-value="value"
        :options-array="data"
        :icon="icon"
        :label="label"
        @update-option="handleOptionUpdate"
      />
    </StepPanel>

    <StepPanel :key="3">
      <h2 class="label">
        <uil-clock-eight class="label__icon" />
        {{ t('label.microwave-time') }}
      </h2>
      <div class="flex flex-grow flex-wrap gap-5">
        <MicrowaveTime :time="microwaveTime" />
        <Toggle @update-round-time="handleRoundTime" />
      </div>
    </StepPanel>
  </transition-group>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Dropdown } from '~/types'

const { t } = useI18n()

//
// ─── DROPDOWN DATA ──────────────────────────────────────────────────────────────
//
function* range(start: number, end: number, step: number) {
  while (start <= end) {
    yield start
    start += step
  }
}

function formatSeconds(seconds: number): string {
  const ISOString = new Date(seconds * 1000).toISOString()

  // If the time is over an hour (3600 seconds) we need to also show the "HH:" part of the ISO string.
  return (seconds >= 3600) ? ISOString.substr(11, 8) : ISOString.substr(14, 5)
}

const wattages = Array.from(range(300, 1600, 25)).map((wattage) => {
  return {
    value: wattage,
    label: `${wattage} ${t('option-label.watt')}`,
  }
})

const times = Array.from(range(30, 900, 30)).map((seconds) => {
  return {
    value: seconds,
    label: `${formatSeconds(seconds)} (${seconds} ${t('option-label.seconds')})`,
  }
})

//
// ─── SET DATA FOR 3 DROPDOWNS ───────────────────────────────────────────────────
//
const dropdowns = ref<Dropdown[]>([
  {
    id: 0,
    value: 700,
    data: wattages,
    icon: 'uil-bolt',
    label: t('label.package-wattage'),
  },
  {
    id: 1,
    value: 360,
    data: times,
    icon: 'uil-clock',
    label: t('label.package-time'),
  },
  {
    id: 2,
    value: 900,
    data: wattages,
    icon: 'uil-bolt',
    label: t('label.microwave-wattage'),
  },
])

//
// ─── HANDLE WHEN A NEW DROPDOWN OPTION IS PICKED ────────────────────────────────
//
function handleOptionUpdate({ dropdownId, optionValue }: { dropdownId: number; optionValue: number }): void {
  dropdowns.value[dropdownId].value = optionValue
}

//
// ─── ROUND OFF MICROWAVETIME ────────────────────────────────────────────────────
//
const rounded = ref(true)

function handleRoundTime(newValue: boolean): void {
  rounded.value = newValue
}

//
// ─── CALCULATE MICROWAVE TIME ───────────────────────────────────────────────────
//
const microwaveTime = computed((): string => {
  const [packageWattage, packageTime, microwaveWattage] = dropdowns.value

  // Divide package time by ( microwave wattage / package wattage )
  // i.e. 360 seconds  / ( 900 watt / 700 watt ) = 280 seconds
  let microwaveTime = packageTime.value / (microwaveWattage.value / packageWattage.value)

  // Round the value up to the nearest full second
  microwaveTime = Math.round(microwaveTime)

  // Round the value up to the nearest 5 second step.
  if (rounded.value === true) microwaveTime = Math.ceil(microwaveTime / 5) * 5

  // Use formatSeconds to format seconds to a JS date string.
  return formatSeconds(microwaveTime)
})
</script>
