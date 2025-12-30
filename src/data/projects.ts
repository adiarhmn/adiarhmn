import type { Project } from '../types/project'

export const topProjects: Project[] = [
    {
        title: 'Hosting Batuah',
        year: 'Sep 2025 - Oct 2025',
        desc: 'Developing and maintaining hosting server for Batuah.',
        image: '/projects/hosting-batuah/cover.png',
        stackIcons: ['devicon-filamentphp-original colored', 'devicon-laravel-plain colored', 'devicon-tailwindcss-plain colored'],
        link: 'projects/hosting-batuah-web',
    },
    {
        title: 'Easy Ternak',
        year: 'Des 2024 – Jul 2025',
        desc: 'Mobile app full-stack (React TS & Laravel), integrasi payment gateway, dan sudah dirilis di Google Play Store.',
        image: '/projects/easy-ternak/cover.png',
        stackIcons: ['devicon-react-original colored', 'devicon-laravel-plain colored', 'devicon-tailwindcss-plain colored', 'devicon-capacitor-plain colored', 'devicon-android-plain colored'],
    },
    {
        title: 'Web Eduwisata',
        year: 'Okt 2024 – Jan 2025',
        desc: 'Website penelitian berbasis Laravel, serta kontribusi penulisan buku penelitian.',
        image: '/projects/eduwisata-toga/cover.png',
        stackIcons: ['devicon-laravel-plain colored'],
        // link: '/projects/eduwisata-toga',
    },
    {
        title: 'Marketplace Politala',
        year: 'Okt 2024 – Jan 2025',
        desc: 'Website marketplace untuk penjualan hasil produk berkualitas di Politala.',
        image: '/projects/ict-marketplace/cover.png',
        // link: 'projects/ict-marketplace',
    },
]

export const projects: Project[] = [
    ...topProjects,
    {
        title: 'KPI Employee Presence',
        year: 'Okt 2024 – Jan 2025',
        desc: 'Website KPI Employee Presence. Untuk Mengatasi masalah KPI Employee Presence yang masih manual.',
        image: '/projects/tefa-kpi/cover.png',
        // link: '/projects/ict-marketplace',
    },
    {
        title: 'E-Commerce Raja Ikan',
        year: 'Okt 2024 – Jan 2025',
        desc: 'Website jual beli ikan untuk raja ikan kendari.',
        image: '/projects/raja-ikan/cover.png',
        // link: '/projects/ict-marketplace',
    },
    {
        title: 'Politala Exam Attendance',
        year: 'Okt 2024 – Jan 2025',
        desc: 'Website presensi ujian Politala. Untuk Mengatasi masalah presensi ujian Politala yang masih manual',
        image: '/projects/presensi-ujian-politala/cover.png',
        // link: 'projects/ict-marketplace',
    },
]

export const personalProject: Project[] = [
    {
        title: 'Green Portofolio',
        year: 'Sep 2025 – Oct 2025',
        desc: 'Website marketplace untuk penjualan hasil produk berkualitas di Politala.',
        image: '/projects/coming-soon.png',
        // link: '/projects/ict-marketplace',
    },
    {
        title: 'Whatsapp Gateway API',
        year: 'Sep 2025 – Des 2025',
        desc: 'Website ',
        image: '/projects/coming-soon.png',
        // link: 'projects/ict-marketplace',
    },
]
