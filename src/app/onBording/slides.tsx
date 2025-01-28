//Arthur
type SlideItens = {
  id: string;
  title: string;
  description: string;
  image: any;
};
//Arthur
export const slides: SlideItens[] = [
  {
    id: "0",
    title: "Bem-vindo ao DerivApp!",
    description:
      "Aqui você poderá colocar em prática seus conhecimentos sobre derivadas, bater seus recordes pessoais e ter explicações dos erros de cálculo para sanar suas dúvidas.",
    image: require("@/assets/images/onBording/undraw_Welcoming.png"),
  },
  {
    id: "1",
    title: "Crie sua conta para \n começar a praticar",
    description:
      "Ao possuir uma conta, é possível consultar suas conquistas, além de seus melhores tempos e questões resolvidas.",
    image: require("@/assets/images/onBording/undraw_Sign_in.png"),
  },
  {
    id: "2",
    title: "Aprenda jogando e \n se divertindo",
    description:
      "Possuimos derivadas para todos os níveis!",
    image: require("@/assets/images/onBording/undraw_video_games.png"),
  },
  {
    id: "3",
    title: "Complete seus objetivos \n e atinja suas metas",
    description:
      "Participe do modo rankeado e prove ser um serelepe das derivadas!",
    image: require("@/assets/images/onBording/undraw_Choose.png"),
  },
  {
    id: "4",
    title: "Vamos nessa!?",
    description: "",
    image: require("@/assets/images/onBording/undraw_mathematics.png"),
  },
];
