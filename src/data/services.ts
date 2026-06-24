export interface Service {
  title: string
  description: string
  icon: string
  highlighted?: boolean
}

export const services: Service[] = [
  {
    title: "Service AC",
    description:
      "Perbaikan AC tidak dingin, bocor, error, suara berisik, dan masalah teknis lainnya untuk semua merek dan tipe.",
    icon: "ac",
  },
  {
    title: "Cuci & Isi Freon AC",
    description:
      "Cuci AC standard & steam plus pengisian freon R22, R32, R410A untuk AC dingin kembali dan udara bersih.",
    icon: "cuci-freon",
  },
  {
    title: "Bongkar Pasang AC",
    description:
      "Jasa bongkar dan pasang AC untuk pindah rumah, renovasi, atau reinstall unit AC lama ke lokasi baru.",
    icon: "bongkar",
  },
  {
    title: "Service Mesin Cuci",
    description:
      "Perbaikan mesin cuci 1 tabung, 2 tabung, dan front loading. Tidak berputar, bocor, hingga panel error.",
    icon: "mesin-cuci",
  },
  {
    title: "Service Kulkas / Lemari Es",
    description:
      "Perbaikan kulkas tidak dingin, bocor, bunyi berisik, dan komponen rusak. Semua merek, free ongkir area Bandung.",
    icon: "kulkas",
  },
  {
    title: "Service Chiller",
    description:
      "Perbaikan dan perawatan chiller untuk kebutuhan komersial. Cold storage, showcase, dan display cooler.",
    icon: "chiller",
  },
  {
    title: "Service Water Heater",
    description:
      "Perbaikan dan instalasi water heater gas, listrik, dan solar. Solusi air panas tidak keluar atau bocor.",
    icon: "water-heater",
  },
  {
    title: "Service Pompa Submersible",
    description:
      "Perbaikan pompa sumur dalam, jet pump, dan submersible. Air tidak naik, tekanan lemah, atau motor mati.",
    icon: "submersible",
  },
]
