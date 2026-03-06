"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { ContactFormPanel as ContactFormPanelProps } from "@/app/types/contact";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z
    .string()
    .refine(
      (val) => val === "" || /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(val),
      "Celular inválido",
    ),
  email: z.string().email("E-mail inválido").or(z.literal("")),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  notABot: z.literal(true, { message: "Confirme que não é um robô" }),
  categories: z
    .array(z.string())
    .min(1, "Selecione ao menos um tipo de pedido"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactFormPanel({
  title,
  prayerRequests,
  submitButtonLabel,
}: ContactFormPanelProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      categories: [],
    },
  });

  function toggleCategory(label: string) {
    const next = selectedCategories.includes(label)
      ? selectedCategories.filter((c) => c !== label)
      : [...selectedCategories, label];
    setSelectedCategories(next);
    setValue("categories", next);
    trigger("categories");
  }

  function onSubmit(data: ContactFormData) {
    // TODO: integrate with back-end / e-mail service
    // data contains: name, phone, email, message, notABot, categories
    console.log(data);
  }

  return (
    <div className="flex flex-col h-full bg-[#e8d5b0] rounded-2xl p-8 md:p-10">
      {/* Prayer request category tags */}
      <div className="flex flex-wrap gap-2 mb-1">
        {prayerRequests.map((req) => {
          const isSelected = selectedCategories.includes(req.label);
          return (
            <button
              key={req.label}
              type="button"
              onClick={() => toggleCategory(req.label)}
              className={`border text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md transition-colors ${
                isSelected
                  ? "bg-primary-blue text-white border-primary-blue"
                  : "border-primary-blue/40 text-primary-blue hover:bg-primary-blue hover:text-white"
              }`}
            >
              {req.label}
            </button>
          );
        })}
      </div>
      <p className="text-red-600 text-xs mt-1 mb-3 min-h-4">
        {errors.categories?.message}
      </p>

      {/* Form title */}
      <h2 className="text-primary-blue font-bold text-xl md:text-2xl mb-6 mt-4">
        {title}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1"
      >
        {/* Nome */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-primary-blue text-xs font-semibold uppercase tracking-wider"
          >
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            {...register("name")}
            className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? "border-red-400" : "border-gray-200"}`}
          />
          <p className="text-red-600 text-xs min-h-4">
            {errors.name?.message}
          </p>
        </div>

        {/* Celular + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-primary-blue text-xs font-semibold uppercase tracking-wider"
            >
              Celular
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              {...register("phone")}
              className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.phone ? "border-red-400" : "border-gray-200"}`}
            />
            <p className="text-red-600 text-xs min-h-4">
              {errors.phone?.message}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-primary-blue text-xs font-semibold uppercase tracking-wider"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? "border-red-400" : "border-gray-200"}`}
            />
            <p className="text-red-600 text-xs min-h-4">
              {errors.email?.message}
            </p>
          </div>
        </div>

        {/* Mensagem */}
        <div className="flex flex-col gap-1 flex-1">
          <label
            htmlFor="message"
            className="text-primary-blue text-xs font-semibold uppercase tracking-wider"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Escreva sua mensagem..."
            rows={5}
            {...register("message")}
            className={`w-full bg-white border rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
          />
          <p className="text-red-600 text-xs min-h-4">
            {errors.message?.message}
          </p>
        </div>

        {/* Não sou um robô */}
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("notABot")}
              className="w-5 h-5 rounded border-gray-300 accent-primary-blue"
            />
            <span className="text-sm text-primary-blue">Não sou um robô</span>
          </label>
          <p className="text-red-600 text-xs min-h-4">
            {errors.notABot?.message}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary text-white font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors mt-2"
        >
          {submitButtonLabel}
        </button>
      </form>
    </div>
  );
}
