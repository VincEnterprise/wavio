import { ViteSSGContext } from 'vite-ssg'
import { TranslateResult } from 'vue-i18n'

export type Option = {
  value: number
  label: string
}

export type Dropdown = {
  id: number
  value: number
  data: Option[]
  icon: string
  label: TranslateResult
}

export type UserModule = (ctx: ViteSSGContext) => void
