export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "theresa-t",
    name: "Theresa T.",
    text: "Fadi Habbouche was very professional and helpful and guided me in the right direction. Much appreciated.",
    rating: 5,
  },
  {
    id: "kelly-d",
    name: "Kelly D.",
    text: "Fadi followed up my initial inquiry and generously provided some great advice in regards to my project. Will definitely get them involved if I proceed with certification.",
    rating: 5,
  },
];
