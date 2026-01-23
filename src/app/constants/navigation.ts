export type MenuItem = {
  label: string
  href?: string
  submenu?: SubMenuItem[]
}

export type SubMenuItem = {
  label: string
  href: string
}

export const menuItems: MenuItem[] = [
  {
    label: 'Igreja',
    submenu: [
      { label: 'Conheça', href: '/igreja/conheca' },
      { label: 'Onde Estamos', href: '/igreja/onde-estamos' },
      { label: 'Ministérios', href: '/igreja/ministerios' },
    ],
  },
  { label: 'Agenda', href: '/#agenda' },
  {
    label: 'Informações',
    submenu: [
      { label: 'Cursos', href: '/informacoes/cursos' },
      { label: 'Notícias', href: '/informacoes/noticias' },
      { label: 'Colégio', href: '/informacoes/colegio' },
      { label: 'Líderes', href: '/informacoes/lideres' },
      { label: 'Libras', href: '/informacoes/libras' },
      { label: 'InfoGet', href: '/informacoes/infoget' },
    ],
  },
  { label: 'Ofertas', href: '/#offers' },
  { label: 'Contato', href: '/#contact' },
]
