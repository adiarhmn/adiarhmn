import type { Project } from "../types/project";

export const topProjects : Project[] = [
  {
    title: "Aplikasi Investasi Ternak",
    year: "Des 2024 – Jul 2025",
    desc: "Mobile app full-stack (React TS & Laravel), integrasi payment gateway, dan sudah dirilis di Google Play Store.",
    image: "/projects/easy-ternak/cover.png"
  },
  {
    title: "Website Penelitian Eduwisata TOGA",
    year: "Okt 2024 – Jan 2025",
    desc: "Website penelitian berbasis Laravel, serta kontribusi penulisan buku penelitian.",
    image: "/projects/eduwisata-toga/cover.png"
  },
  {
    title: "Marketplace Politala",
    year: "Okt 2024 – Jan 2025",
    desc: "Website marketplace untuk penjualan hasil produk berkualitas di Politala.",
    image: "/projects/ict-marketplace/cover.png",
    link: "/projects/ict-marketplace"
  }
];


export const projects: Project[] = [
  ...topProjects,
  {
    title: "Website Penelitian Eduwisata TOGA",
    year: "Okt 2024 – Jan 2025",
    desc: "Website penelitian berbasis Laravel, serta kontribusi penulisan buku penelitian.",
    image: "/projects/eduwisata-toga/cover.png"
  },
  {
    title: "Marketplace Politala",
    year: "Okt 2024 – Jan 2025",
    desc: "Website marketplace untuk penjualan hasil produk berkualitas di Politala.",
    image: "/projects/ict-marketplace/cover.png",
    link: "/projects/ict-marketplace"
  }
];