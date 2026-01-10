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
            title: 'Hosting Batuah',
            desc: 'Mengembangkan dan memelihara server hosting untuk Batuah.',
            image: '/projects/hosting-batuah/cover.png',
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
            desc: 'Aplikasi mobile untuk manajemen ternak.',
            image: '/projects/easy-ternak/cover.png',
            stackIcons: [
                'devicon-react-original colored',
                'devicon-laravel-plain colored',
                'devicon-tailwindcss-plain colored',
                'devicon-capacitor-plain colored',
                'devicon-android-plain colored',
            ],
        },
        {
            id: 'eduwisata',
            year: 'Okt 2024 - Jan 2025',
            title: 'Eduwisata Toga',
            desc: 'Aplikasi untuk manajemen wisata edukatif.',
            image: '/projects/eduwisata-toga/cover.png',
            stackIcons: ['devicon-laravel-plain colored'],
            // link: '/projects/eduwisata-toga',
        },
        {
            id: 'marketplace',
            year: 'Okt 2024 - Jan 2025',
            title: 'ICT Marketplace',
            desc: 'Platform marketplace untuk produk ICT.',
            image: '/projects/ict-marketplace/cover.png',
            // link: 'projects/ict-marketplace',
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
        },
        {
            id: 'eduwisata',
            year: 'Okt 2024 - Jan 2025',
            title: 'Eduwisata Toga',
            desc: 'An application for managing educational tourism.',
            image: '/projects/eduwisata-toga/cover.png',
            stackIcons: ['devicon-laravel-plain colored'],
            // link: '/projects/eduwisata-toga',
        },
        {
            id: 'marketplace',
            year: 'Okt 2024 - Jan 2025',
            title: 'ICT Marketplace',
            desc: 'A marketplace platform for ICT products.',
            image: '/projects/ict-marketplace/cover.png',
            // link: 'projects/ict-marketplace',
        },
    ],
}
