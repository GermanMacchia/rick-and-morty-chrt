export interface RouterLink {
    name: string
    path: string
    title: string
}

export const routerLinks: RouterLink[] = [
    { path: '/', name: 'home', title: 'Inicio' },
    { path: '/about', name: 'about', title: 'Acerca' },
    { path: '/characters', name: 'characters', title: 'Personajes' }
]