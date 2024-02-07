import age from "./assets/slides/age.jpg";
import re3 from "./assets/slides/re3.jpg";
import gr from "./assets/slides/gr.jpg";
import re2 from "./assets/slides/re2.jpg";
import mount from "./assets/slides/mount.jpg";
import mk from "./assets/slides/mk.jpg";
import mkx from "./assets/slides/mkx.jpg";

interface SlideInterface {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

export const slides: SlideInterface[] = [
  {
    id: "1",
    title: "Resident Evil 3 Remake",
    subtitle: "The new version needs a perfectly powerful system",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: re3,
  },
  {
    id: "2",
    title: "Age Of Empire: Gold Edition",
    subtitle: "Have you played the Gold Edition with new factions?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: age,
  },
  {
    id: "3",
    title: "Ghost Recon: Wildlands",
    subtitle:
      "This action game is with no doubts one of the best in this genre",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: gr,
  },
  {
    id: "4",
    title: "Resident Evil 2 Renake",
    subtitle: "Which one would you choose to play with, Claier or Leon?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: re2,
  },
  {
    id: "5",
    title: "Mount & Blade: Bannerlord",
    subtitle: "Make your own character, play both strategic and actions",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: mount,
  },
  {
    id: "6",
    title: "Mortal Kombat X: Full Pack",
    subtitle: "The experience of various fight scenes and characters",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: mkx,
  },
  {
    id: "7",
    title: "Mortal Kombat 7: Ultimate Version",
    subtitle: "You can play online if you buy a premium account",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: mk,
  },
];
