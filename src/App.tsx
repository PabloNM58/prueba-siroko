import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/HeaderLayout.tsx/Header";
import QuizLayout from "./components/QuizCard/QuizLayout/QuizLayout";
import { OptionsSelectedProvider } from "./context/OptionsSelectedContext";
import { StepProvider } from "./context/StepContext";

function App() {
  return (
    <StepProvider>
      <Header />
      <OptionsSelectedProvider>
        <QuizLayout />
      </OptionsSelectedProvider>
      <Footer />
    </StepProvider>
  );
}

export default App;
