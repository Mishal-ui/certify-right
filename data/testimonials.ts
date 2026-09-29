export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  source: "google" | "direct";
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "theresa-t",
    name: "Theresa T.",
    initials: "TT",
    rating: 5,
    text: "Fadi Habbouche was very professional and helpful and guided me in the right direction. Much appreciated.",
    source: "google",
  },
  {
    id: "kelly-d",
    name: "Kelly D.",
    initials: "KD",
    rating: 5,
    text: "Fadi followed up my initial inquiry and generously provided some great advice in regards to my project. Will definitely get them involved if I proceed with certification.",
    source: "google",
  },
];
