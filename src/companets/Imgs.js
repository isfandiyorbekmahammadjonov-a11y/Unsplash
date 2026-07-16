import audi2 from "../assets/imgs/audi2.jpg";
import bmw from "../assets/imgs/bmw.jpg";
import bmw3 from "../assets/imgs/bmw3.jpg";

import cat from "../assets/imgs/cat.jpg";
import cat2 from "../assets/imgs/cat2.jpg";
import cat3 from "../assets/imgs/cat3.jpg";

import clubmadrid from "../assets/imgs/clubmadrid.jpg";
import fotbool from "../assets/imgs/fotbool.jpg";

import germany from "../assets/imgs/germany.jpg";
import germany2 from "../assets/imgs/germany2.jpg";

import nature from "../assets/imgs/nature.jpg";
import notebook from "../assets/imgs/notebook.jpg";

import porche from "../assets/imgs/porche.jpg";

import rasm1 from "../assets/imgs/rasm1.jpg";
import rasm3 from "../assets/imgs/rasm3.jpg";
import rasm4 from "../assets/imgs/rasm4.jpg";
import rasm5 from "../assets/imgs/rasm5.jpg";
import rasm6 from "../assets/imgs/rasm6.jpg";
import rasm7 from "../assets/imgs/rasm7.jpg";

const Imgs = [
  {
    id: 1,
    title: "Audi RS7",
    image: audi2,
    category: "Cars",
    author: "John Carter",
    createdAt: "2025-01-12",
    description:
      "Audi RS7 zamonaviy sportback avtomobillar orasida eng mashhur modellardan biri hisoblanadi. Ushbu model kuchli dvigatel, premium salon va ilg'or texnologiyalar bilan jihozlangan. Dinamik dizayni va yuqori tezlikdagi imkoniyatlari uni avtomobil ixlosmandlari orasida alohida o'ringa ega qiladi.",
    liked: false,
    downloaded: false,
    featured: true,
  },

  {
    id: 2,
    title: "BMW M4",
    image: bmw,
    category: "Cars",
    author: "Michael Stone",
    createdAt: "2025-02-05",
    description:
      "BMW M4 sport kupe segmentidagi eng muvaffaqiyatli modellardan biridir. Kuchli dvigatel, agressiv tashqi ko'rinish va yuqori boshqaruv darajasi ushbu avtomobilni haydovchilar uchun ideal tanlovga aylantiradi.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 3,
    title: "BMW Sunset",
    image: bmw3,
    category: "Cars",
    author: "Alex Brown",
    createdAt: "2025-02-19",
    description:
      "Quyosh botishi fonida suratga olingan BMW modeli avtomobil fotografiyasining eng yaxshi namunalaridan biridir. Yorug'lik va ranglarning uyg'unligi suratga estetik ko'rinish beradi.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 4,
    title: "Sleeping Cat",
    image: cat,
    category: "Animals",
    author: "Emily White",
    createdAt: "2025-03-02",
    description:
      "Uy sharoitida dam olayotgan mushukning sokin va yoqimli holati aks etgan surat. Hayvonlarni sevuvchilar uchun juda iliq va samimiy kadr hisoblanadi.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 5,
    title: "Cute Cat",
    image: cat2,
    category: "Animals",
    author: "Sophia Green",
    createdAt: "2025-03-07",
    description:
      "Kamera qarshisida qiziqish bilan qarab turgan mushukning portreti. Tabiiy ranglar va fokus hayvonning xarakterini juda yaxshi ochib beradi.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 6,
    title: "Stylish Cat",
    image: cat3,
    category: "Animals",
    author: "James Wilson",
    createdAt: "2025-03-14",
    description:
      "Ko'zoynak taqqan mushukning qiziqarli va kulgili surati. Ijtimoiy tarmoqlarda mashhur bo'ladigan kreativ hayvon suratlaridan biri.",
    liked: false,
    downloaded: false,
    featured: true,
  },

  {
    id: 7,
    title: "Real Madrid Jersey",
    image: clubmadrid,
    category: "Sports",
    author: "Daniel Clark",
    createdAt: "2025-04-01",
    description:
      "Dunyoning eng mashhur futbol klublaridan biri bo'lgan Real Madrid formasining yaqin plandagi surati. Sport va futbol muxlislari uchun qiziqarli kontent.",
    liked: false,
    downloaded: false,
    featured: false,
  },


  {
    id: 8,
    title: "Football Landscape",
    image: fotbool,
    category: "Sports",
    author: "Robert Taylor",
    createdAt: "2025-04-08",
    description:
      "Tabiat bag'rida joylashgan futbol maydonining ajoyib ko'rinishi. Sport va tabiat uyg'unligini aks ettiruvchi noyob surat.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 9,
    title: "German Village",
    image: germany,
    category: "Travel",
    author: "Emma Davis",
    createdAt: "2025-04-15",
    description:
      "Germaniyaning tarixiy qishloqlaridan birining go'zal manzarasi. Arxitektura va madaniyat ixlosmandlari uchun qimmatli tasvir.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 10,
    title: "Berlin Street",
    image: germany2,
    category: "Travel",
    author: "Oliver Scott",
    createdAt: "2025-04-22",
    description:
      "Berlin shahridagi tarixiy bino va ko'chalarning zamonaviy ko'rinishi. Sayohat va shahar fotografiyasi uchun yaxshi namunadir.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 11,
    title: "Autumn Nature",
    image: nature,
    category: "Nature",
    author: "Lucas Walker",
    createdAt: "2025-05-01",
    description:
      "Kuz faslining yorqin ranglari bilan bezatilgan o'rmon manzarasi. Tabiatning go'zalligini namoyish etuvchi professional surat.",
    liked: false,
    downloaded: false,
    featured: true,
  },

  {
    id: 12,
    title: "Modern Workspace",
    image: notebook,
    category: "Technology",
    author: "David Miller",
    createdAt: "2025-05-07",
    description:
      "Dasturchilar va freelancerlar uchun mo'ljallangan zamonaviy ish joyi. Minimalistik dizayn va samaradorlikni ifodalaydi.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 13,
    title: "Porsche GT",
    image: porche,
    category: "Cars",
    author: "William Young",
    createdAt: "2025-05-12",
    description:
      "Sport avtomobillar orasidagi afsonaviy Porsche modeli. Tezlik, quvvat va nafislik birlashgan premium avtomobil.",
    liked: false,
    downloaded: false,
    featured: true,
  },

  {
    id: 14,
    title: "Love Shape",
    image: rasm1,
    category: "Photography",
    author: "Sarah King",
    createdAt: "2025-05-19",
    description:
      "Quyosh botishi fonida qo'llar yordamida yaratilgan yurak shakli. Romantik va hissiyotlarga boy surat.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 15,
    title: "Blue Ocean",
    image: rasm3,
    category: "Nature",
    author: "Henry Moore",
    createdAt: "2025-05-24",
    description:
      "Musaffo dengiz va moviy osmonning uyg'un ko'rinishi. Dam olish va sayohat mavzulari uchun ideal surat.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 16,
    title: "Forest Road",
    image: rasm4,
    category: "Nature",
    author: "Charlotte Hall",
    createdAt: "2025-06-01",
    description:
      "Qalin daraxtlar orasidan o'tuvchi yo'lning sokin manzarasi. Ekologiya va tabiat ixlosmandlari uchun ajoyib kadr.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 17,
    title: "Mountain Lake",
    image: rasm5,
    category: "Nature",
    author: "Benjamin Adams",
    createdAt: "2025-06-07",
    description:
      "Tog'lar etagidagi ko'lning tiniq suvlari va sokin muhiti aks etgan surat. Sayohat va tabiat mavzulari uchun mos.",
    liked: false,
    downloaded: false,
    featured: false,
  },

  {
    id: 18,
    title: "Green Valley",
    image: rasm6,
    category: "Nature",
    author: "Grace Lewis",
    createdAt: "2025-06-11",
    description:
      "Yashil vodiy va tog'larning uyg'unlashgan manzarasi. Tabiatning betakror go'zalligini aks ettiruvchi professional surat.",
    liked: false,
    downloaded: false,
    featured: true,
  },


  {
    id: 19,
    title: "Mountain Sunrise",
    image: rasm7,
    category: "Nature",
    author: "Ethan Martin",
    createdAt: "2025-06-15",
    description:
      "Tog'lar ortidan chiqayotgan quyoshning ilk nurlari aks etgan surat. Ilhomlantiruvchi va sokin manzara.",
    liked: false,
    downloaded: false,
    featured: true,
  },
];
export default Imgs
localStorage.setItem("gallery", JSON.stringify(Imgs))