export type Lang = 'en' | 'id'



export function switchLangPath(pathname: string, target: Lang): string {
    if (pathname === '/') {
        return `/${target}`
    }

    if (/^\/(en|id)(\/|$)/.test(pathname)) {
        return pathname.replace(/^\/(en|id)/, `/${target}`)
    }

    return `/${target}${pathname}`
}

export function staticPaths() {
    return [{ params: { lang: 'en' } }, { params: { lang: 'id' } }]
}
