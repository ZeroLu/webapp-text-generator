import type { AppInfo } from '@/types/app'
export const APP_ID = 'e3658f66-9545-423d-ab44-81f93315fed4'
export const API_KEY = 'app-Lhf18wFK2UPyLPS1aVWvK1XI'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Text Generator APP',
  description: 'App description',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
