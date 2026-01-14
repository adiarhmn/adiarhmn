import type { Project } from '../../../types/project'

interface ListAllProject {
    id: Project[]
    en: Project[]
}

export const data: ListAllProject = {
    // ID DATA
    id: [
        {
            id: 'hosting-batuah',
            year: 'Sep 2025 - Oct 2025',
            image: '/projects/hosting-batuah/cover.png',
            title: 'Hosting Batuah',
            desc: 'Pengembangan dan pengelolaan server hosting untuk platform Batuah.',
            stackIcons: [
                'devicon-filamentphp-original colored',
                'devicon-laravel-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
            link: 'projects/hosting-batuah-web',
        },
        {
            id: 'easy-ternak',
            year: 'Des 2024 - Jul 2025',
            title: 'Easy Ternak',
            desc: 'Aplikasi mobile untuk membantu manajemen dan pencatatan usaha peternakan.',
            image: '/projects/easy-ternak/cover.png',
            stackIcons: [
                'devicon-react-original colored',
                'devicon-laravel-plain colored',
                'devicon-tailwindcss-plain colored',
                'devicon-capacitor-plain colored',
                'devicon-android-plain colored',
            ],
            link: 'projects/easy-ternak',
        },
        {
            id: 'eduwisata',
            year: 'Okt 2024 - Jan 2025',
            title: 'Eduwisata Toga',
            desc: 'Aplikasi untuk pengelolaan data dan informasi wisata edukasi tanaman obat keluarga (TOGA).',
            image: '/projects/eduwisata-toga/cover.png',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-azuresqldatabase-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
            link: 'projects/eduwisata-toga',
        },
        {
            id: 'marketplace',
            year: 'Okt 2024 - Jan 2025',
            title: 'ICT Marketplace',
            desc: 'Platform marketplace untuk penjualan dan pengelolaan produk teknologi informasi dan komunikasi (ICT).',
            image: '/projects/ict-marketplace/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-azuresqldatabase-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
        },
        {
            id: 'tefa-kpi',
            year: 'Okt 2024 - Jan 2025',
            title: 'TEFA KPI',
            desc: 'Aplikasi web dan mobile untuk pengelolaan serta monitoring Key Performance Indicator (KPI) TEFA.',
            image: '/projects/tefa-kpi/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-react-plain colored',
                'devicon-capacitor-plain colored',
                'devicon-tailwindcss-plain colored',
                'devicon-android-plain colored',
            ],
        },
        {
            id: 'raja-ikan-e-commerce',
            year: 'Okt 2024 - Jan 2025',
            title: 'E-Commerce Raja Ikan',
            desc: 'Aplikasi web e-commerce untuk penjualan produk perikanan Raja Ikan secara online.',
            image: '/projects/raja-ikan/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-codeigniter-plain colored',
                'devicon-bootstrap-plain colored',
                'devicon-azuresqldatabase-plain colored',
            ],
        },
        {
            id: 'politala-exam-attendance',
            year: 'Okt 2024 - Jan 2025',
            title: 'Presensi Ujian Politala',
            desc: 'Aplikasi web untuk pencatatan dan pengelolaan kehadiran peserta ujian di Politala.',
            image: '/projects/presensi-ujian-politala/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-bootstrap-plain colored',
                'devicon-azuresqldatabase-plain colored',
            ],
        },
    ],

    // EN DATA
    en: [
        {
            id: 'hosting-batuah',
            year: 'Sep 2025 - Oct 2025',
            image: '/projects/hosting-batuah/cover.png',
            title: 'Hosting Batuah',
            desc: 'Developing and maintaining the hosting server for Batuah.',
            stackIcons: [
                'devicon-filamentphp-original colored',
                'devicon-laravel-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
            link: 'projects/hosting-batuah-web',
        },
        {
            id: 'easy-ternak',
            year: 'Des 2024 - Jul 2025',
            title: 'Easy Ternak',
            desc: 'A mobile application for livestock management.',
            image: '/projects/easy-ternak/cover.png',
            stackIcons: [
                'devicon-react-original colored',
                'devicon-laravel-plain colored',
                'devicon-tailwindcss-plain colored',
                'devicon-capacitor-plain colored',
                'devicon-android-plain colored',
            ],
            link: 'projects/easy-ternak',
        },
        {
            id: 'eduwisata',
            year: 'Okt 2024 - Jan 2025',
            title: 'Eduwisata Toga',
            desc: 'An application for managing educational tourism.',
            image: '/projects/eduwisata-toga/cover.png',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-azuresqldatabase-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
            link: 'projects/eduwisata-toga',
        },
        {
            id: 'marketplace',
            year: 'Okt 2024 - Jan 2025',
            title: 'ICT Marketplace',
            desc: 'A marketplace platform for ICT products.',
            image: '/projects/ict-marketplace/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-azuresqldatabase-plain colored',
                'devicon-tailwindcss-plain colored',
            ],
        },
        {
            id: 'tefa-kpi',
            year: 'Okt 2024 - Jan 2025',
            title: 'TEFA KPI',
            desc: 'A web and mobile application for Tefa KPI.',
            image: '/projects/tefa-kpi/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-react-plain colored',
                'devicon-capacitor-plain colored',
                'devicon-tailwindcss-plain colored',
                'devicon-android-plain colored',
            ],
        },
        {
            id: 'raja-ikan-e-commerce',
            year: 'Okt 2024 - Jan 2025',
            title: 'Web E-Commerce Raja Ikan',
            desc: 'A web application for Raja Ikan E-Commerce.',
            image: '/projects/raja-ikan/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-codeigniter-plain colored',
                'devicon-bootstrap-plain colored',
                'devicon-azuresqldatabase-plain colored',
            ],
        },
        {
            id: 'politala-exam-attendance',
            year: 'Okt 2024 - Jan 2025',
            title: 'Politala Exam Attendance',
            desc: 'A web application for Politala Exam Attendance.',
            image: '/projects/presensi-ujian-politala/cover.png',
            link: 'projects/ict-marketplace',
            stackIcons: [
                'devicon-laravel-plain colored',
                'devicon-bootstrap-plain colored',
                'devicon-azuresqldatabase-plain colored',
            ],
        },
    ],
}
