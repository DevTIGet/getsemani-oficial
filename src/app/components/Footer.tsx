"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Logo } from "@/app/components/Navbar/Logo";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Endereço */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Logo theme="dark" size="w-30 h-20" />
            </Link>
            <div className="text-sm space-y-1">
              <p className="font-semibold">Endereço:</p>
              <p>R. Cassiano Campolina, 360</p>
              <p>Dona Clara, Belo Horizonte - MG</p>
            </div>
            <div className="text-sm space-y-1 mt-6">
              <p className="font-semibold">Telefones Úteis:</p>
              <p>Colégio: (31) 2532-9899</p>
              <p>Ass. Social: (31) 3448-9866</p>
              <p>Secretaria: (31) 3448-9899/9844</p>
            </div>
          </div>

          {/* Igreja */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Igreja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/conheca-nos"
                  className="hover:text-gray-300 transition-colors"
                >
                  Conheça-nos
                </Link>
              </li>
              <li>
                <Link
                  href="/celulas"
                  className="hover:text-gray-300 transition-colors"
                >
                  Células
                </Link>
              </li>
              <li>
                <Link
                  href="/contribuicao"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contribuição
                </Link>
              </li>
              <li>
                <Link
                  href="/agenda"
                  className="hover:text-gray-300 transition-colors"
                >
                  Agenda
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pedidos-oracao"
                  className="hover:text-gray-300 transition-colors"
                >
                  Pedidos de Oração
                </Link>
              </li>
              <li>
                <Link
                  href="/conteudos"
                  className="hover:text-gray-300 transition-colors"
                >
                  Conteúdos
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/fale-conosco"
                  className="hover:text-gray-300 transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/trabalhe-conosco"
                  className="hover:text-gray-300 transition-colors"
                >
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/onde-estamos"
                  className="hover:text-gray-300 transition-colors"
                >
                  Onde Estamos
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <FaYoutube className="h-5 w-5" />
                  <span>Youtube</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <FaXTwitter className="h-5 w-5" />
                  <span>X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
