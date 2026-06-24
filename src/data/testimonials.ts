export interface Testimonial {
  name: string
  initials: string
  location: string
  service: string
  text: string
  avatarGradient: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Rian Aditya",
    initials: "RA",
    location: "Sukajadi, Bandung",
    service: "Service AC",
    text: "AC saya tidak dingin sama sekali. Chat WhatsApp jam 9 pagi, jam 10 teknisi udah sampai. Cepat banget, kerjanya rapi, harganya jelas di awal. Recommended!",
    avatarGradient: "linear-gradient(135deg, #2563EB, #1E3A8A)",
  },
  {
    name: "Siti Nurhaliza",
    initials: "SN",
    location: "Cimahi",
    service: "Service Mesin Cuci",
    text: "Mesin cuci Sharp 2 tabung saya tidak berputar. Teknisinya sabar banget jelasin kerusakannya, langsung diperbaiki di tempat. Garansi 3 bulan dikasih. Mantap!",
    avatarGradient: "linear-gradient(135deg, #22C55E, #15803D)",
  },
  {
    name: "Hendra Wijaya",
    initials: "HW",
    location: "Soreang, Bandung Barat",
    service: "Service Water Heater",
    text: "Water heater Rinnai mati total. Dari pada beli baru, coba service aja. Alhamdulillah jadi lagi seperti baru. Teknisi ramah, kerja bersih, harga masuk akal.",
    avatarGradient: "linear-gradient(135deg, #F59E0B, #B45309)",
  },
  {
    name: "Dewi Saraswati",
    initials: "DS",
    location: "Jatinangor, Sumedang",
    service: "Service Submersible",
    text: "Pompa submersible rumah mati, air berhenti mengalir. Sejuk Service datang tepat waktu, bongkar pasang rapi, dan pompa jalan normal lagi. Pasti pakai lagi.",
    avatarGradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
  },
  {
    name: "Fitri Kusuma",
    initials: "FK",
    location: "Coblong, Bandung",
    service: "Cuci AC",
    text: "Cuci 3 AC sekaligus, harga bersaing banget. Teknisi kerjanya cepat dan bersih, AC langsung dingin maksimal. Sudah langganan 2 tahun, selalu puas.",
    avatarGradient: "linear-gradient(135deg, #EC4899, #BE185D)",
  },
  {
    name: "Andi Pratama",
    initials: "AP",
    location: "Cimahi",
    service: "Service Mesin Cuci",
    text: "Mesin cuci front loading Electrolux error E21. Teknisi datang, diagnostik cepat, sensor air diperbaiki. Selesai dalam 1 jam. Profesional dan terpercaya!",
    avatarGradient: "linear-gradient(135deg, #06B6D4, #0E7490)",
  },
]
