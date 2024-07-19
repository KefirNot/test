import React, { useState } from 'react';
import { DataType } from '../../types';
import { trains_data } from '../../mocks';
import CharacterTable from './characteristics-table';


const MainTable = (): JSX.Element => {
const trains : DataType[] = trains_data;
const [showModal, setShowModal] = useState(false);
const [selectedTrain, setSelectedTrain] = useState<DataType | null>(null);

    const handleTrainClick = (train: DataType) => {
    setSelectedTrain(train);
setShowModal(true);
};

const handleModalClose = () => {
setShowModal(false);
};

return (
<div className="body-type">
<table>
<caption>Поезда</caption>
<thead>
<tr>
<th id="train-name">Название</th>
<th id="train-description">Описание</th>
</tr>
</thead>
<tbody>
{trains.map((train) => (
<tr key={train.name} onClick={() => handleTrainClick(train)}>
<td>{train.name}</td>
<td>{train.description}</td>
</tr>
))}
</tbody>
</table>
{showModal && selectedTrain && (
<CharacterTable train={selectedTrain} onClose={handleModalClose} />
)}
</div>
);
};

export default MainTable;