import QuizList from "../components/QuizCard/QuizList/QuizList";
import QuizCode from "../components/QuizCard/QuizCode/QuizCode";
import { StepConfig } from "../types";

export const config: StepConfig[] = [
  {
    stepId: 1,
    stepChipText: "Paso 1 de 2",
    headerTitle: "¡Vamos allá!",
    formTitle: "Uso siroko desde..",
    formContent: QuizList,
    formButtonText: "Siguiente",
    quizOptions: ["2016", "2017", "2018", "2019", "2020", "2021"],
    headerSubtitle:
      "Has llegado hasta el test de Siroko. Responde las siguientes preguntas y genera tu código premiado a medida",
    isActive: true,
  },
  {
    stepId: 2,
    stepChipText: "Paso 2 de 2",
    headerTitle: "Vamos, una más",
    formTitle: "Por unas gafas Siroko, yo...",
    formContent: QuizList,
    formButtonText: "Siguiente",
    quizOptions: [
      "Segaría a navaja",
      "Rechazaría un cachopo",
      "Renunciaría a mis tierras",
      "Regalaría una ternera",
    ],
    isActive: false,
  },
  {
    stepId: 3,
    stepChipText: "Tu premio está listo",
    headerTitle: "¡Enhorabuena!",
    formTitle: "Lo prometido es deuda",
    formContent: QuizCode,
    formButtonText: "Ir a siroko.com",
    codeInstructions:
      "Introduce este código en tu próxima compra para conseguir tu premio. ¡Disponible durante 20 minutos!",
    isActive: false,
  },
];
