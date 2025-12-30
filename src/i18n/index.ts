// src/i18n/index.ts
import en from './en.json'
import id from './id.json'

type Lang = 'en' | 'id'
type MessageKey = keyof typeof en

export const messages: Record<Lang, typeof en> = { en, id }

export function t(lang: Lang, key: MessageKey) {
    return messages[lang][key] ?? key
}

export function switchLangPath(pathname: string, target: Lang): string {
    if (pathname === '/') {
        return `/${target}`
    }

    if (/^\/(en|id)(\/|$)/.test(pathname)) {
        return pathname.replace(/^\/(en|id)/, `/${target}`)
    }

    return `/${target}${pathname}`
}
