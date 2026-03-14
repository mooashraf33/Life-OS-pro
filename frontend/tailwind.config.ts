// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // الألوان المستخرجة من صورك بالظبط
//         background: "#021526", // الخلفية الزرقاء الغامقة
//         sidebar: "#051c33",    // لون السايد بار
//         primary: "#8B0000",    // الأحمر الغامق للوجو والزراير
//         accent: "#1e293b",     // لون الكروت الشفاف
//         textMain: "#E2E8F0",   // لون الخط الفاتح
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };


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
        background: "#021526",
        sidebar: "#051c33",
        primary: "#8B0000",
        primaryHover: "#660000",
        accent: "#3b82f6",
        textMain: "#E2E8F0",
        surfaceBorder: "rgba(255,255,255,0.05)",
      },

      borderRadius: {
        main: "12px",
      },

      boxShadow: {
        primary: "0 8px 20px rgba(139,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
