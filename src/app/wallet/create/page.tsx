"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";
import Button from "@/components/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { setPassword } from "@/store/walletCreateSlice";
import { useDispatch } from "react-redux";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one digit")
  .regex(/[@$!%*?&#]/, "Password must contain at least one symbol");

const schema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

type FormData = z.infer<typeof schema>;

export default function Create() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const password = watch("password") || "";

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const passwordCriteria = [
    { label: "8 or more characters", test: password.length >= 8 },
    { label: "At least one uppercase character", test: /[A-Z]/.test(password) },
    { label: "At least one digit", test: /\d/.test(password) },
    { label: "At least one symbol", test: /[@$!%*?&#]/.test(password) },
  ];

  const onSubmit = (data: FormData) => {
    dispatch(setPassword(data.password));
    router.replace("/wallet/create/backup");
  };

  return (
    <div className="flex flex-col gap-16 w-full max-w-4xl mx-auto pt-14">
      <span className="text-2xl font-bold text-center">
        Create a New Wallet
      </span>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <div className="relative flex items-center gap-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl focus-within:ring-1 focus-within:ring-zinc-800 dark:focus-within:ring-zinc-600">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value || ""}
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder=" "
                  className="peer w-full bg-transparent focus:outline-none pb-3 pt-7 placeholder-shown:pb-5 placeholder-shown:pt-5"
                />
              )}
            />
            <label
              htmlFor="password"
              className="absolute left-4 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out text-xs peer-placeholder-shown:text-base -translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"
            >
              Enter a strong password
            </label>
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="text-gray-400 hover:text-white"
            >
              {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <ul className="mt-2 space-y-1">
            {passwordCriteria.map((criteria, index) => (
              <li
                key={index}
                className={clsx(
                  "text-sm flex items-center gap-2",
                  criteria.test ? "text-green-400" : "text-gray-400"
                )}
              >
                <span
                  className={clsx(
                    "w-1 h-1 rounded-full",
                    criteria.test ? "bg-green-400" : "bg-gray-400"
                  )}
                />
                {criteria.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <div className="relative flex items-center gap-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl focus-within:ring-1 focus-within:ring-zinc-800 dark:focus-within:ring-zinc-600">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  value={field.value || ""}
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="confirmPassword"
                  placeholder=" "
                  className="peer w-full bg-transparent focus:outline-none pb-3 pt-7 placeholder-shown:pb-5 placeholder-shown:pt-5"
                />
              )}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-4 text-gray-400 pointer-events-none transition-all duration-200 ease-in-out text-xs peer-placeholder-shown:text-base -translate-y-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2"
            >
              Confirm password
            </label>
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="text-gray-400 hover:text-white"
            >
              {confirmPasswordVisible ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          text="Continue"
          size="xl"
          variant="secondary"
          classNames="w-full"
          disable={!isValid}
        />
      </form>
    </div>
  );
}
