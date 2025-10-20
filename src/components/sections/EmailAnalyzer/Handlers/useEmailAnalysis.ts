import { useState } from 'react';

export const useEmailAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analyzedData, setAnalyzedData] = useState<any>(null);

  const handleAnalyze = async (emailContent: string) => {
    if (!emailContent.trim()) return;

    setIsAnalyzing(true);
    setShowResults(false);

    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));

    const mockResults = {
      decisions: [
        {
          text: "Avanzar con el nuevo diseño propuesto por María",
          priority: "Alta"
        },
        {
          text: "Fecha límite para el MVP: 15 de diciembre",
          priority: "Crítica"
        }
      ],
      tasks: [
        {
          text: "Preparar documentación para el cliente",
          assignee: "Carlos",
          deadline: "Viernes"
        },
        {
          text: "Coordinar con equipo de desarrollo para estimar tiempos",
          assignee: "Laura",
          deadline: "Próxima semana"
        }
      ],
      summary: "Email de coordinación de proyecto con 2 decisiones clave y 2 tareas asignadas. Prioridad alta debido a fecha límite cercana."
    };

    setAnalyzedData(mockResults);
    setIsAnalyzing(false);
    setShowResults(true);
  };

  return {
    isAnalyzing,
    showResults,
    analyzedData,
    handleAnalyze
  };
};