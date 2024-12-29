export function Logo({
  withName,
  size = "lg",
}: {
  withName?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div
      className={`flex items-center ${
        size === "sm"
          ? "py-3 px-4 gap-2"
          : size === "md"
          ? "py-4 px-5 gap-3"
          : "py-5 px-6 gap-3"
      } `}
    >
      <svg
        width={size === "sm" ? "32" : size === "md" ? "40" : "48"}
        height={size === "sm" ? "32" : size === "md" ? "40" : "48"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5562 7.28012C10.4793 7.10961 10.3096 7 10.1226 7C9.93557 7 9.76588 7.10961 9.68899 7.28012L6.04217 15.3665C5.93417 15.606 6.04076 15.8877 6.28024 15.9957C6.51972 16.1037 6.8014 15.9971 6.90941 15.7576L10.1226 8.63272L11.6745 12.0738H9.32963C9.06692 12.0738 8.85396 12.2868 8.85396 12.5495C8.85396 12.8122 9.06692 13.0252 9.32963 13.0252H12.0251C12.0509 13.0252 12.0762 13.0231 12.1008 13.0192L13.3358 15.7576C13.4438 15.9971 13.7255 16.1037 13.965 15.9957C14.2045 15.8877 14.311 15.606 14.203 15.3665L10.5562 7.28012Z"
          fill="url(#paint0_linear_6792_70059)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2451 7C14.4321 7 14.6018 7.10961 14.6787 7.28012L18.3255 15.3665C18.4335 15.606 18.327 15.8877 18.0875 15.9957C17.848 16.1037 17.5663 15.9971 17.4583 15.7576L14.2451 8.63272L13.4631 10.3667C13.3551 10.6062 13.0734 10.7128 12.8339 10.6048C12.5945 10.4968 12.4879 10.2151 12.5959 9.97559L13.8115 7.28012C13.8884 7.10961 14.0581 7 14.2451 7Z"
          fill="#0A0A0A"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6792_70059"
            x1="3.78601"
            y1="12.5357"
            x2="16.4607"
            y2="12.5171"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#455EFF" />
            <stop offset="0.442708" stopColor="#B33BF6" />
            <stop offset="0.879648" stopColor="#FF5F14" />
          </linearGradient>
        </defs>
      </svg>
      {withName && (
        <span
          className={` font-bold ${
            size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"
          }`}
        >
          Amando
        </span>
      )}
    </div>
  );
}
