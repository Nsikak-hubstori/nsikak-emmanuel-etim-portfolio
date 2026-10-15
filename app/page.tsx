"use client"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home(){
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".hero-title span", { y:120, opacity:0, duration:1, stagger:0.08, ease:"power4.out" })
    gsap.utils.toArray(".skill-section").forEach((sec:any)=>{
      const img = sec.querySelector(".skill-img")
      gsap.to(img, { yPercent:-25, scale:1.2, scrollTrigger:{ trigger:sec, scrub:1.5, start:"top bottom", end:"bottom top" } })
      gsap.from(sec.querySelectorAll(".reveal"), { y:50, opacity:0, duration:0.8, stagger:0.12, scrollTrigger:{ trigger:sec, start:"top 70%" } })
    })
  },[])

  return(
    <main className="bg-[#fbf8f1] text-zinc-900">
      <nav className="fixed top-0 w-full z-50 flex justify-between px-6 md:px-12 py-4 bg-[#fbf8f1]/80 backdrop-blur border-b text-[10px] tracking-widest"><b>NSIKAK E. ETIM • NIGERIA</b><span>FULL STACK DEVELOPER</span></nav>

      <section className="min-h-screen px-6 md:px-20 pt-32">
        <h1 className="hero-title text-[11vw] md:text-[6vw] font-black leading-[0.85]"><span className="block overflow-hidden"><span className="block">NSIKAK EMMANUEL</span></span><span className="block overflow-hidden text-zinc-400"><span className="block">ETIM — NIGERIA</span></span></h1>
        <p className="mt-6 max-w-2xl">I am <b>Nsikak Emmanuel Etim</b> from Nigeria. A full stack developer who has built many websites, apps and more to clients and also a serious person. I deliver real results.</p>
        <div className="mt-8 flex gap-3"><a href="https://wa.me/2348025238990" target="_blank" className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-bold">WhatsApp: 08025238990</a><a href="mailto:purestories0@gmail.com" className="border px-6 py-3 rounded-full text-sm font-bold">purestories0@gmail.com</a></div>

        <div className="mt-12 border-t pt-8 grid md:grid-cols-4 gap-6 text-[11px]">
          <div className="border-l-2 border-black pl-3"><b>baskhealth-clone.vercel.app/admin</b><br/>Next.js + Supabase — Doctor Dashboard</div>
          <div className="border-l-2 border-black pl-3"><b>baskhealth-clone-hyb9.vercel.app</b><br/>Next.js — Sample Work</div>
          <div className="border-l-2 border-zinc-300 pl-3"><b>hubstori.name.ng</b><br/>WordPress — Media Platform</div>
          <div className="border-l-2 border-zinc-300 pl-3"><b>hubstori.blogspot.com</b><br/>Blogger — Movie Blog</div>
        </div>
      </section>

      {/* SITE 1 EXPLAINED */}
      <section className="skill-section min-h-[110vh] flex flex-col md:flex-row bg-white border-t">
        <div className="md:w-[55%] h-[60vh] md:h-[110vh] overflow-hidden relative"><img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200" className="skill-img absolute w-full h-[135%] object-cover top-[-15%]" alt="people building website"/></div>
        <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center bg-[#efe9dc]">
          <div className="reveal text-[10px] tracking-[0.2em]">01 / EXPLAINED - DOCTOR DASHBOARD</div>
          <h2 className="reveal text-4xl font-black mt-3">Bask Health Clone — Admin</h2>
          <p className="reveal mt-4 text-sm text-zinc-700">This is the admin dashboard doctors use to see all clients. I built it to manage intake. It shows total clients, name, email, goal, plan, payment.</p>
          <div className="reveal mt-4 text-[12px]"><b>Skills used:</b> Next.js 14, TypeScript, Supabase Postgres, SQL Editor, Auth, RLS, Tailwind, Vercel, Responsive Admin UI, LocalStorage, State Management</div>
          <div className="reveal mt-3 text-[12px]"><b>Google & Monetization:</b> Google Indexing ready, SEO meta tags, Analytics ready</div>
          <a href="https://baskhealth-clone.vercel.app/admin" target="_blank" className="reveal mt-6 bg-black text-white px-7 py-3 rounded-full w-fit font-bold text-sm">→ Open Doctor Dashboard</a>
        </div>
      </section>

      {/* SITE 2 EXPLAINED */}
      <section className="skill-section min-h-[110vh] flex flex-col md:flex-row-reverse bg-zinc-900 text-white">
        <div className="md:w-[55%] h-[60vh] md:h-[110vh] overflow-hidden relative"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200" className="skill-img absolute w-full h-[135%] object-cover" alt="team building website"/></div>
        <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
          <div className="reveal text-[10px] tracking-[0.2em] text-zinc-400">02 / EXPLAINED - SAMPLE CLIENT WORK</div>
          <h2 className="reveal text-4xl font-black mt-3">Bask Health Clone — Sample</h2>
          <p className="reveal mt-4 text-sm text-zinc-300">This is sample work I did for a client - the full user flow: landing page, intake questionnaire builder (I fixed the typing bug), platform page, checkout. Shows my SaaS skills.</p>
          <div className="reveal mt-4 text-[12px] text-zinc-300"><b>Skills:</b> No-Code Builder Pattern, Intake Funnel, Builder Fixed (can type), Payment Flow, tRPC concept, Drizzle ORM concept</div>
          <a href="https://baskhealth-clone-hyb9.vercel.app" target="_blank" className="reveal mt-6 bg-white text-black px-7 py-3 rounded-full w-fit font-bold text-sm">→ View Sample Work</a>
        </div>
      </section>

      {/* SITE 3 EXPLAINED */}
      <section className="skill-section min-h-[110vh] flex flex-col md:flex-row bg-white">
        <div className="md:w-[55%] h-[60vh] md:h-[110vh] overflow-hidden relative"><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200" className="skill-img absolute w-full h-[135%] object-cover" alt="people creating website"/></div>
        <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
          <div className="reveal text-[10px] tracking-[0.2em]">03 / EXPLAINED - WORDPRESS - HUBSTORI.NAME.NG</div>
          <h2 className="reveal text-4xl font-black mt-3">Hubstori.name.ng</h2>
          <p className="reveal mt-4 text-sm">This site is built with <b>WordPress</b> on custom domain.name.ng. It's an entertainment media platform with 2M+ views. I post music, movies, Taylor Swift, Davido, news.</p>
          <div className="reveal mt-4 text-[12px]"><b>Skills:</b> WordPress Install, Custom Theme, Plugins, Elementor, Custom Domain DNS + SSL, Yoast SEO, Google Search Console, Google Indexing, Sitemap, Google Analytics 4, AdSense Monetization, YouTube Embed, Viral Content Strategy, Social Media Growth (TikTok, Facebook, WhatsApp Channel), Content Writing</div>
          <a href="https://hubstori.name.ng" target="_blank" className="reveal mt-6 border-2 border-black px-7 py-3 rounded-full w-fit font-bold text-sm">→ Visit WordPress Site</a>
        </div>
      </section>

      {/* SITE 4 EXPLAINED */}
      <section className="skill-section min-h-[110vh] flex flex-col md:flex-row-reverse bg-[#f5f2eb]">
        <div className="md:w-[55%] h-[60vh] md:h-[110vh] overflow-hidden relative"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200" className="skill-img absolute w-full h-[135%] object-cover" alt="coding website"/></div>
        <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
          <div className="reveal text-[10px] tracking-[0.2em]">04 / EXPLAINED - BLOGGER - HUBSTORI.BLOGSPOT.COM</div>
          <h2 className="reveal text-4xl font-black mt-3">Hubstori Blogspot</h2>
          <p className="reveal mt-4 text-sm">Built with <b>Blogger (Google)</b> - storytelling, movie summaries, viral curation. Second blog for SEO dominance.</p>
          <div className="reveal mt-4 text-[12px]"><b>Skills:</b> Blogger CMS, Template Customization, Storytelling, Long-form Writing, SEO, Google Indexing, AdSense, Image Optimization</div>
          <a href="https://hubstori.blogspot.com" target="_blank" className="reveal mt-6 bg-black text-white px-7 py-3 rounded-full w-fit font-bold text-sm">→ Visit Blogspot</a>
        </div>
      </section>

      {/* PORTFOLIO SKILLS */}
      <section className="px-6 md:px-20 py-20 bg-black text-white">
        <h2 className="text-3xl font-black">Skills Used To Build THIS Portfolio</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white/10 p-6 rounded-2xl"><b>GSAP Stack:</b><br/>GSAP Core, ScrollTrigger, Parallax (yPercent), Pin, Text Reveal, Stagger, Scrub, Timeline</div>
          <div className="bg-white/10 p-6 rounded-2xl"><b>Next.js Stack:</b><br/>Next.js 14 App Router, TypeScript, Tailwind CSS, useRef, useEffect, Image Optimization, Vercel Deploy</div>
          <div className="bg-white/10 p-6 rounded-2xl"><b>Extra:</b><br/>Lenis Smooth Scroll, Figma to Code, UI/UX, Performance Optimization, Responsive, Professional Long Scroll</div>
        </div>
      </section>

      {/* CONTACT INSIDE PORTFOLIO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-white border-t">
        <h2 className="text-[12vw] md:text-[8vw] font-black leading-[0.85]">CONTACT<br/>ME</h2>
        <p className="mt-6">Full Name: <b>Nsikak Emmanuel Etim</b> from Nigeria<br/>Full Stack Developer - Serious, Reliable, Fast Delivery</p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a href="https://wa.me/2348025238990" target="_blank" className="bg-green-600 text-white px-10 py-4 rounded-full font-bold">WhatsApp: 08025238990</a>
          <a href="mailto:purestories0@gmail.com" className="bg-black text-white px-10 py-4 rounded-full font-bold">Email: purestories0@gmail.com</a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2 text-xs">
          <a href="https://baskhealth-clone.vercel.app/admin" className="border px-4 py-2 rounded-full">Admin Dashboard</a>
          <a href="https://baskhealth-clone-hyb9.vercel.app" className="border px-4 py-2 rounded-full">Sample Work</a>
          <a href="https://hubstori.name.ng" className="border px-4 py-2 rounded-full">hubstori.name.ng (WordPress)</a>
          <a href="https://hubstori.blogspot.com" className="border px-4 py-2 rounded-full">hubstori.blogspot.com (Blogger)</a>
        </div>
        <div className="mt-8 text-[10px] text-zinc-400">© 2026 NSIKAK E. ETIM - BUILT WITH NEXT.JS + GSAP</div>
      </section>
    </main>
  )
                                   }
