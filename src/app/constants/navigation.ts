import type { MenuItem } from "@/app/types/navigation";

export const menuItems: MenuItem[] = [
  {
    label: "Igreja",
    submenu: [
      { label: "Sobre Nós", href: "/igreja/sobre-nos" },
      { label: "Onde Estamos", href: "/igreja/onde-estamos" },
      { label: "Ministérios", href: "/igreja/ministerios" },
      { label: "Missões", href: "/igreja/missoes" },
    ],
  },
  { label: "Agenda", href: "/#agenda" },
  {
    label: "Informações",
    submenu: [
      { label: "Cursos", href: "/informacoes/cursos" },
      { label: "Notícias", href: "/informacoes/noticias" },
      { label: "Colégio", href: "/informacoes/colegio" },
      { label: "Líderes", href: "/informacoes/lideres" },
      { label: "Libras", href: "/informacoes/libras" },
      { label: "InfoGet", href: "/informacoes/infoget" },
    ],
  },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Contato", href: "/contato" },
];
