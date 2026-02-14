"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type MinistryHeroProps = {
  title: string;
  slogan: string;
  heroImage: string;
};

export default function MinistryHero({
  title,
  slogan,
  heroImage,
}: MinistryHeroProps) {
  return (
    <section className="w-full py-6 md:py-8 px-4 md:px-8">
      <div className="relative w-full max-w-7xl mx-auto h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-2xl md:rounded-3xl">
        {/* Imagem de fundo */}
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={90}
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />

        {/* Conteúdo com animação */}
        <div className="relative h-full flex items-center px-6 md:px-12 lg:px-16">
          <motion.div
            className="text-white max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Título com animação */}
            <motion.h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {title}
            </motion.h1>

            {/* Slogan com animação */}
            <motion.p
              className="text-base md:text-xl lg:text-2xl font-light text-white/95 italic leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {slogan}
            </motion.p>

            {/* Linha decorativa com animação */}
            <motion.div
              className="h-1 bg-primary w-16 md:w-24 mt-4 md:mt-6 rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
