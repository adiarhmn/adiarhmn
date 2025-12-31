import type { Lang } from '../../../utils/i18n'

interface ServiceItem {
    id: string
    title: string
    description: string
}

export const ServicesData: Record<Lang, ServiceItem[]> = {
    id: [
        {
            id: 'website-development',
            title: 'Website Development',
            description:
                'Pengembangan website modern, responsif, dan scalable untuk kebutuhan personal maupun bisnis. Dibangun dengan teknologi terkini untuk performa dan pengalaman pengguna yang optimal.',
        },
        {
            id: 'web-application',
            title: 'Web Application Development',
            description:
                'Pembuatan aplikasi berbasis web yang terstruktur dan aman, mulai dari sistem internal hingga aplikasi publik dengan fitur autentikasi, dashboard, dan integrasi API.',
        },
        {
            id: 'ui-ux',
            title: 'UI/UX Implementation',
            description:
                'Implementasi desain menjadi antarmuka yang bersih, konsisten, dan mudah digunakan, dengan fokus pada pengalaman pengguna dan responsivitas di berbagai perangkat.',
        },
        {
            id: 'backend-api',
            title: 'Backend & API Development',
            description:
                'Pengembangan backend dan REST API yang aman, efisien, dan mudah dikembangkan untuk mendukung logika bisnis dan integrasi sistem.',
        },
        {
            id: 'performance',
            title: 'Performance Optimization',
            description:
                'Optimasi performa website agar lebih cepat, stabil, dan SEO-friendly melalui penerapan best practice dan code optimization.',
        },
        {
            id: 'maintenance',
            title: 'Maintenance & Support',
            description:
                'Pemeliharaan dan dukungan berkelanjutan untuk memastikan website atau aplikasi tetap aman, optimal, dan relevan seiring waktu.',
        },
    ],

    en: [
        {
            id: 'website-development',
            title: 'Website Development',
            description:
                'Modern, responsive, and scalable website development for personal or business needs, built with up-to-date technologies to ensure optimal performance and user experience.',
        },
        {
            id: 'web-application',
            title: 'Web Application Development',
            description:
                'Development of structured and secure web applications, from internal systems to public-facing apps with authentication, dashboards, and API integrations.',
        },
        {
            id: 'ui-ux',
            title: 'UI/UX Implementation',
            description:
                'Translating designs into clean, consistent, and user-friendly interfaces with a strong focus on usability and responsive design.',
        },
        {
            id: 'backend-api',
            title: 'Backend & API Development',
            description:
                'Building secure, efficient, and scalable backend systems and REST APIs to support business logic and system integrations.',
        },
        {
            id: 'performance',
            title: 'Performance Optimization',
            description:
                'Improving website speed, stability, and SEO readiness through performance tuning and industry best practices.',
        },
        {
            id: 'maintenance',
            title: 'Maintenance & Support',
            description:
                'Ongoing maintenance and support to keep websites and applications secure, stable, and continuously improving.',
        },
    ],
}
