import type { Lang } from '../../../utils/i18n'

interface ExperienceItem {
    role: string
    year: string
    desc: string
}

export interface Experience {
    company: string
    type: 'work' | 'internship' | 'volunteer' | 'contract' | 'freelance'
    items: ExperienceItem[]
}

export const ExperienceData: Record<Lang, Experience[]> = {
    id: [
        {
            company: 'PT. Barito Berlian Motor',
            type: 'work',
            items: [
                {
                    role: 'IT Programmer',
                    year: 'Jul 2026 - Sekarang',
                    desc: 'Mengembangkan dan memelihara sistem perusahaan diantaranya, Sistem Recruitment Mitsubishi, Sistem Monitoring Kendaraan Berbasis OCR Plat Recognition, Sistem CRM Dealer, Sistem Accounting Receivable, Sistem Accounting Payable, dan Sistem Faktur Pajak.',
                },
                {
                    role: 'IT Support',
                    year: 'Okt 2023 - Sekarang',
                    desc: 'Mengkonfigurasi dan melakukan pemasangan jaringan di 2 kantor cabang mitsubishi, di Palangka Raya dan Katingan. Melakukan konfigurasi Komputer untuk kantor cabang.',
                },
            ],
        },
        {
            company: 'CV. Batuah Teknologi Semesta',
            type: 'work',
            items: [
                {
                    role: 'IT Programmer',
                    year: 'Okt 2023 - Sekarang',
                    desc: 'Merancang dan memelihara website klien serta alat internal perusahaan menggunakan Laravel, FilamentPHP, dan TailwindCSS. Memimpin pengembangan "Hosting Batuah", sebuah platform manajemen hosting yang menyederhanakan operasional perusahaan dan meningkatkan kemampuan layanan mandiri bagi klien.',
                },
                {
                    role: 'Pengajar IT',
                    year: 'Okt 2023 - Sekarang',
                    desc: 'Memberikan pengajaran IT secara komprehensif kepada siswa SMA dan mahasiswa, dengan fokus pada dasar-dasar pemrograman dan pengembangan web modern. Merancang materi kurikulum untuk menjembatani kesenjangan antara teori akademik dan keterampilan praktis industri.',
                },
            ],
        },
        {
            company: 'Galyna Heiwa',
            type: 'internship',
            items: [
                {
                    role: 'Backend Developer',
                    year: 'Mei 2023 - Des 2023',
                    desc: 'Berkolaborasi dengan tim mobile untuk merancang dan mengimplementasikan RESTful API yang andal untuk aplikasi Marketplace Politala. Memastikan penanganan data yang aman dan mengoptimalkan performa kueri untuk pengalaman pengguna yang mulus.',
                },
            ],
        },
        {
            company: 'ICT Politala',
            type: 'contract',
            items: [
                {
                    role: 'Backend Developer',
                    year: 'Mei 2023 - Des 2023',
                    desc: 'Merancang layanan backend yang dapat diskalakan (scalable) dan RESTful API untuk proyek Marketplace Politala. Berfokus pada efisiensi kode dan keandalan API untuk memastikan performa tinggi saat terjadi lonjakan transaksi.',
                },
            ],
        },
        {
            company: 'Teaching Factory Politala',
            type: 'volunteer',
            items: [
                {
                    role: 'Front-end Developer',
                    year: 'Okt 2023 - Des 2023',
                    desc: 'Membangun dashboard KPI yang responsif dan interaktif menggunakan ReactJS, TypeScript, dan Mantine UI. Mengimplementasikan Capacitor untuk mengaktifkan fungsionalitas mobile lintas-platform, memastikan pengalaman pengguna yang konsisten antara web dan perangkat mobile.',
                },
                {
                    role: 'Fullstack Developer',
                    year: 'Okt 2023 - Des 2023',
                    desc: 'Mengembangkan platform e-commerce "Raja Ikan" yang berfungsi penuh menggunakan CodeIgniter 4 dan Bootstrap 4. Menangani tanggung jawab pengembangan menyeluruh (end-to-end), mulai dari desain skema database, logika backend, hingga implementasi UI responsif.',
                },
            ],
        },
    ],

    // EN DATA
    en: [
        {
            company: 'PT. Barito Berlian Motor',
            type: 'work',
            items: [
                {
                    role: 'IT Programmer',
                    year: 'Jul 2026 - Present',
                    desc: 'Developing and maintaining various company systems, including Mitsubishi Recruitment System, Vehicle Monitoring System with OCR-Based License Plate Recognition, Dealer CRM System, Accounts Receivable (AR) System, Accounts Payable (AP) System, and Tax Invoice System.',
                },
                {
                    role: 'IT Support',
                    year: 'Oct 2023 - Present',
                    desc: 'Configured and installed network infrastructure across two Mitsubishi branch offices in Palangka Raya and Katingan. Also responsible for configuring and maintaining computer systems to support daily office operations.',
                },
            ],
        },
        {
            company: 'CV. Batuah Teknologi Semesta',
            type: 'work',
            items: [
                {
                    role: 'Web Developer',
                    year: 'Oct 2023 - Present',
                    desc: 'Architected and maintained client websites and internal tools using Laravel, FilamentPHP, and TailwindCSS. Spearheaded the development of "Hosting Batuah," a hosting management platform that streamlined company operations and enhanced client self-service capabilities.',
                },
                {
                    role: 'IT Tutor',
                    year: 'Oct 2023 - Present',
                    desc: 'Delivered comprehensive IT instruction to high school and university students, focusing on programming fundamentals and modern web development. Designed curriculum materials to bridge the gap between academic theory and practical industry skills.',
                },
            ],
        },
        {
            company: 'Galyna Heiwa',
            type: 'internship',
            items: [
                {
                    role: 'Backend Developer',
                    year: 'May 2023 - Dec 2023',
                    desc: 'Collaborated with the mobile team to design and implement robust RESTful APIs for the Politala Marketplace application. Ensured secure data handling and optimized query performance for seamless user experience.',
                },
            ],
        },
        {
            company: 'ICT Politala',
            type: 'contract',
            items: [
                {
                    role: 'Backend Developer',
                    year: 'May 2023 - Dec 2023',
                    desc: 'Engineered scalable backend services and RESTful APIs for the Politala Marketplace project. Focused on code efficiency and API reliability to ensure high performance during peak transaction times.',
                },
            ],
        },
        {
            company: 'Teaching Factory Politala',
            type: 'volunteer',
            items: [
                {
                    role: 'Front-end Developer',
                    year: 'Oct 2023 - Dec 2023',
                    desc: 'Built a responsive and interactive KPI dashboard using ReactJS, TypeScript, and Mantine UI. Implemented Capacitor to enable cross-platform mobile functionality, ensuring a consistent user experience across web and mobile devices.',
                },
                {
                    role: 'Fullstack Developer',
                    year: 'Oct 2023 - Dec 2023',
                    desc: 'Developed "Raja Ikan," a fully functional e-commerce platform, using CodeIgniter 4 and Bootstrap 4. Handled end-to-end development responsibilities, including database schema design, backend logic, and responsive UI implementation.',
                },
            ],
        },
    ],
}
