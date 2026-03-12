/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان المستخرجة من صورك بالظبط
        background: "#021526", // الخلفية الزرقاء الغامقة
        sidebar: "#051c33",    // لون السايد بار
        primary: "#8B0000",    // الأحمر الغامق للوجو والزراير
        accent: "#1e293b",     // لون الكروت الشفاف
        textMain: "#E2E8F0",   // لون الخط الفاتح
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};