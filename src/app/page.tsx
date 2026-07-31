"use client";

import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Palette,
  Wrench,
  Gamepad2,
  ExternalLink,
  Mail,
  CheckCircle2,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  // Data Project
  const projects = [
    {
      title: "Sistem Manajemen Notaris & PPAT",
      desc: "Sistem pengelolaan dokumen dan manajemen operasional kantor Notaris & PPAT.",
      github: "https://github.com/Faey-byte/Notaris_App",
      image: "/projects/notaris.png",
    },
    {
      title: "Sistem Informasi Sekolah",
      desc: "Platform manajemen data siswa, guru, dan akademik sekolah.",
      github: "https://github.com/andreanawan/laravel-project",
      image: "/projects/sekolah.png",
    },
    {
      title: "Todo List App",
      desc: "Aplikasi manajemen tugas harian yang intuitif dan responsif.",
      github: "https://github.com/Alnieto7/PAS_genap_7_31",
      image: "/projects/todo.png",
    },
    {
      title: "Game 2D — Unity",
      desc: "Eksplorasi pembuatan game 2D menggunakan Unity Engine & C#.",
      github: "https://github.com/USERNAME/REPO_GAME",
      image: "/projects/game.png",
    },
    {
      title: "Portofolio Website",
      desc: "Website portofolio pribadi interaktif menggunakan Next.js & Tailwind CSS.",
      github: "https://github.com/USERNAME/REPO_PORTFOLIO",
      image: "/projects/portfolio.png",
    },
  ];

  // Data Skills & Tools
  const skillCategories = [
    {
      category: "Web Development",
      icon: <Code className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: ["HTML & CSS", "JavaScript", "React.js", "Next.js", "Vue.js (dasar)", "Laravel (PHP)"],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="text-sky-600 dark:text-sky-400" size={24} />,
      skills: ["Dart", "Flutter", "Java"],
    },
    {
      category: "Database & Backend",
      icon: <Database className="text-emerald-600 dark:text-emerald-400" size={24} />,
      skills: ["MySQL", "GraphQL"],
    },
    {
      category: "Design & Creative",
      icon: <Palette className="text-pink-600 dark:text-pink-400" size={24} />,
      skills: ["Figma (UI/UX Design)"],
    },
    {
      category: "Tools & Workflow",
      icon: <Wrench className="text-amber-600 dark:text-amber-400" size={24} />,
      skills: ["Git & GitHub", "VS Code", "AI Tools"],
    },
    {
      category: "Lainnya",
      icon: <Gamepad2 className="text-indigo-600 dark:text-indigo-400" size={24} />,
      skills: ["Unity (Game Dev)"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-700 dark:text-slate-100 selection:bg-purple-500 selection:text-white transition-colors duration-300">
      <Navbar />

      {/* ================= 1. HERO SECTION ================= */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6"
        >
          <span className="text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase bg-purple-100/60 dark:bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-200/50 dark:border-purple-500/20">
            Frontend & Mobile Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Halo, saya <br />
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 dark:from-purple-400 dark:to-sky-400 bg-clip-text text-transparent">
              Andrean Awan
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
            Berfokus pada pengembangan Web & Mobile App dengan tampilan intuitif, cepat, dan responsif.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center gap-2 transition shadow-md shadow-purple-500/20">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 font-medium bg-white dark:bg-slate-900/50 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-slate-600 dark:text-slate-300 shadow-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* BINGKAI FOTO PROFIL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-500/30 shadow-xl shadow-purple-500/5 bg-white dark:bg-slate-900 flex items-center justify-center p-2"
        >
          <img 
            src="/profile.jpg" 
            alt="Andrean Awan" 
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
      </section>

      {/* ================= 2. TENTANG SAYA ================= */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
        <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">Tentang Saya</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Saya adalah siswa <strong>SMK Raden Umar Said Kudus</strong> jurusan <strong>Rekayasa Perangkat Lunak (RPL)</strong> yang memiliki minat besar di bidang pengembangan aplikasi mobile dan web.
            </p>
            <p>
              Saya terbiasa mengembangkan aplikasi menggunakan <strong>Flutter</strong> serta melakukan integrasi API untuk membangun sistem yang responsif dan fungsional. Selain itu, saya juga terus mengeksplorasi teknologi modern seperti <strong>React.js, Next.js, dan Laravel</strong>.
            </p>
            <p>
              Memiliki ketertarikan pada <strong>UI/UX Design, AI Content, hingga Game Development</strong>, saya siap untuk terus belajar, beradaptasi, bekerja sama dalam tim, dan berkontribusi secara maksimal melalui program Praktik Kerja Lapangan (PKL).
            </p>
          </div>

          {/* CARD SOFT: Background Putih, Shadow Halus Lavender */}
          <div className="p-6 rounded-2xl border border-purple-100/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Fokus Utama</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-purple-600 dark:text-purple-400" />
                <span className="text-slate-700 dark:text-slate-300">Web Development (React, Next.js, Laravel)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-sky-600 dark:text-sky-400" />
                <span className="text-slate-700 dark:text-slate-300">Mobile App Development (Flutter, Dart)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-pink-600 dark:text-pink-400" />
                <span className="text-slate-700 dark:text-slate-300">UI/UX Design & AI Content Creation</span>
              </li>
              <li className="flex items-center gap-3">
      <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400" />
      <span className="text-slate-700 dark:text-slate-300">Backend Development & API Integration (REST API, MySQL)</span>
    </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 3. SKILLS & TOOLS ================= */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
        <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">Skills & Tools</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-500/40 transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">{item.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((s, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 text-xs font-medium rounded-full border border-purple-100 dark:border-slate-800 bg-purple-50/40 dark:bg-slate-950 text-slate-600 dark:text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. EXPERIENCE & EDUCATION ================= */}
      <section id="experience" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
        <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">Pendidikan & Experience</h2>
        
        <div className="space-y-6">
          {/* Pendidikan: SMK RUS */}
          <div className="p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 relative pl-8 border-l-4 border-l-purple-600 dark:border-l-purple-500 bg-white dark:bg-slate-900/40 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">SMK Raden Umar Said Kudus</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 font-semibold border border-purple-200/50 dark:border-purple-500/20 w-fit mt-1 md:mt-0">
                2024 – 2027
              </span>
            </div>
            <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-3">Pengembangan Perangkat Lunak Dan Gim (RPL)</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Fokus mempelajari pengembangan aplikasi mobile (<strong>Flutter</strong>), web & backend (<strong>HTML, CSS, JavaScript, PHP/Laravel</strong>), integrasi API, database <strong>MySQL</strong>, serta alur kerja modern menggunakan <strong>Git</strong> dan design UI/UX di <strong>Figma</strong>.
            </p>
          </div>

          {/* Pendidikan: SMP Batik */}
          <div className="p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 relative pl-8 border-l-4 border-l-sky-500 dark:border-l-sky-500 bg-white dark:bg-slate-900/40 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">SMP Batik Surakarta</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 font-semibold border border-sky-200/50 dark:border-sky-500/20 w-fit mt-1 md:mt-0">
                2021 – 2024
              </span>
            </div>
            <p className="text-sky-600 dark:text-sky-400 text-sm font-semibold mb-3">Kelas Unggulan Digital</p>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1">
              <li>Mempelajari Dasar HTML & CSS</li>
              <li>Mempelajari Dasar Internet of Things (IoT)</li>
            </ul>
          </div>

          {/* Modern Frontend & Mobile Development */}
          <div className="p-6 rounded-2xl border border-slate-200/70 dark:border-slate-800 relative pl-8 border-l-4 border-l-emerald-500 dark:border-l-emerald-500 bg-white dark:bg-slate-900/40 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Eksplorasi Modern Frontend & Mobile Development</h3>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-200/50 dark:border-emerald-500/20 w-fit mt-1 md:mt-0">
                Pengembangan Mandiri
              </span>
            </div>
            <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-3">React.js, Next.js, Tailwind CSS & Flutter</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Pendalaman antarmuka pengguna (Frontend) dengan mendalami <strong>React.js, Next.js, dan Tailwind CSS</strong> untuk web modern, serta <strong>Flutter</strong> untuk aplikasi mobile. Berfokus pada penulisan kode yang rapi, pembuatan tampilan yang responsif, interaktif, serta terintegrasi dengan REST API.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. PROJECTS ================= */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
  <h2 className="text-3xl font-bold mb-8 text-purple-700 dark:text-purple-400">Project Terbaru</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((proj, idx) => (
      <div key={idx} className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white dark:bg-slate-900/40 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-500/40 transition duration-300 group">
        <div>
          {/* Container Gambar: Dibuat Flex & Padding halus */}
          <div className="h-48 w-full bg-slate-100/80 dark:bg-slate-950/80 relative overflow-hidden p-2 flex items-center justify-center">
            <img 
              src={proj.image} 
              alt={proj.title} 
              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-xl mb-2 text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{proj.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{proj.desc}</p>
          </div>
        </div>
        <div className="p-6 pt-0">
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition font-semibold"
          >
            <FaGithub size={16} /> Link GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ================= 6. CONTACT ================= */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400">Hubungi Saya</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Saya terbuka untuk peluang kerja sama, project, maupun pembelajaran bersama. Silakan hubungi saya melalui media sosial atau email di bawah ini.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:andreanawan634@gmail.com"
              className="px-5 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex items-center gap-2 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-slate-600 dark:text-slate-300 shadow-sm"
            >
              <Mail size={18} /> andreanawan634@gmail.com
            </a>
            <a
              href="https://github.com/andreanawan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-slate-600 dark:text-slate-300 shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrean-awan-726a6a329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-slate-600 dark:text-slate-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/andreanawan_?igsh=MTZjemZ6cnZwZDI0Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-purple-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-slate-600 dark:text-slate-300 shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}