import React, { useState } from "react";
import "./App.css";
import MainTable from "./components/TrainTable";
import { TrainData } from "../types";
import SpecificationTable from "./components/SpecificationTable";

function App() {
  const [selectedTrain, setSelectedTrain] = useState<TrainData | null>(null);

  const handleTrainClick = (train: TrainData) => {
    setSelectedTrain(train);
  };

  const handleModalClose = () => {
    setSelectedTrain(null);
  };

  return (
    <div className="body-type">
      <MainTable onClick={handleTrainClick} />

      {selectedTrain && (
        <SpecificationTable train={selectedTrain} onSubmit={handleModalClose} />
      )}
    </div>
  );
}

export default App;
