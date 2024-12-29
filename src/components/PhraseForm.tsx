"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import Scan from "@/icons/Scan";

const schema = z.object({
  type: z.literal("phrase"),
  recoveryPhrase: z
    .string()
    .trim()
    .refine(
      (value) => {
        const wordCount = value.split(/\s+/).filter(Boolean).length;
        return wordCount >= 12 && (wordCount - 12) % 6 === 0;
      },
      {
        message: "Typically 12 (sometimes 24) words separated by single spaces",
      }
    ),
  name: z.string().min(3, "Name must be at least 3 characters long."),
});

export type FormData = z.infer<typeof schema>;

export default function PhraseForm({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      recoveryPhrase: "",
      name: "",
      type: "phrase",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="mb-6">
        <div className="relative flex flex-col px-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl focus-within:ring-1 focus-within:ring-zinc-800 dark:focus-within:ring-zinc-600">
          <Controller
            name="recoveryPhrase"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                id="recoveryPhrase"
                placeholder="Recovery Phrase"
                className="peer w-full bg-transparent focus:outline-none py-3 resize-none"
                rows={2}
              />
            )}
          />
          <div className="flex self-end pb-1">
            <Button text="Paste" variant="tertiary" />
            <Button
              Icon={Scan}
              onlyIcon
              variant="tertiary"
              classNames="text-white"
            />
          </div>
        </div>
        <p
          className={`text-sm mt-1 ${
            errors.recoveryPhrase ? "text-red-500" : "text-gray-500"
          }`}
        >
          Typically 12 (sometimes 24) words separated by single spaces
        </p>
      </div>

      <div className="mb-6">
        <div className="relative flex items-center gap-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl focus-within:ring-1 focus-within:ring-zinc-800 dark:focus-within:ring-zinc-600">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value={field.value || ""}
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full bg-transparent focus:outline-none pb-3 pt-7 placeholder-shown:pb-5 placeholder-shown:pt-5"
              />
            )}
          />
          <label
            htmlFor="name"
            className="absolute left-4 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out text-xs peer-placeholder-shown:text-base -translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"
          >
            Name
          </label>
        </div>
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <Button
        text="What is a Recovery Phrase?"
        size="lg"
        variant="tertiary"
        disable={!isValid}
        classNames="w-full"
      />

      <Button
        type="submit"
        text="Import"
        size="lg"
        disable={!isValid}
        classNames="w-full"
      />
    </form>
  );
}
