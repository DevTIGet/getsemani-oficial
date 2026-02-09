const SloganSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
        <div className="md:w-9/12 flex flex-col gap-8 md:gap-8">
          {/* Coluna Esquerda */}
          <div className="flex flex-col gap-4 md:w-9/12 items-start">
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-medium">
              Nossa missão
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-[1.1]">
              Expansão pessoal, regional e global
            </h2>
          </div>

          {/* Coluna Direita - Alinhada ao final do texto da esquerda */}
          <div className="flex justify-end">
            <p className="md:w-9/12 text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-[1.2] text-right">
              Do reino de Deus através da sua presença manifesta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SloganSection };
