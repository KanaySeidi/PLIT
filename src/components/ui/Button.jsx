import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  type = "button",
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center";

  const variants = {
    primary:
      "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500 disabled:bg-gray-400",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 disabled:border-gray-200 disabled:text-gray-400",
    yellow:
      "bg-yellow-400 text-gray-900 hover:bg-yellow-500 focus:ring-yellow-300 disabled:bg-yellow-200",
    indigo:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-indigo-400",
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled ? "cursor-not-allowed" : ""
  } ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
