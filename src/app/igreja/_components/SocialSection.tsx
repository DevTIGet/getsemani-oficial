import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSection = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-stretch">
          {/* Coluna das imagens */}
          <div className="flex flex-col gap-4 h-full">
            <div className="w-full h-28 md:h-48 overflow-hidden rounded-3xl">
              <img
                src={"/imagens/slides/teste2.jpg"}
                alt="Imagem 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-28 md:h-48 overflow-hidden rounded-3xl">
              <img
                src={"/imagens/slides/teste.jpg"}
                alt="Imagem 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card redes sociais */}
          <div className="bg-[#D9D9D9] rounded-3xl p-4 md:p-6 flex gap-2 md:gap-2 items-center justify-center shadow-md h-full">
            <div className="flex-1 flex flex-col py-2 md:py-4 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 md:gap-8">
                <h2 className="text-lg md:text-3xl font-semibold text-black text-left ">
                  MANTENHA-SE INFORMADO
                </h2>
                <p className="text-sm md:text-xl text-gray-600 text-left ">
                  siga as redes sociais
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-base">
                <div className="flex items-center gap-2 text-gray-800 ">
                  <FaFacebook className="w-5 h-5" />
                  <span>@getsemani</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 ">
                  <FaInstagram className="w-5 h-5" />
                  <span>@getsemani</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 ">
                  <FaYoutube className="w-5 h-5" />
                  <span>@getsemani</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 ">
                  <FaXTwitter className="w-5 h-5" />
                  <span>@getsemani</span>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 justify-center">
              <img
                src="/imagens/slides/rede-social.png"
                alt="Instagram Card"
                className="rounded-2xl border shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SocialSection };
