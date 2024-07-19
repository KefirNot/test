import React, { useState } from 'react';
import type { CharacteristicType, DataType } from '../../types';
import axios from 'axios';

type TrainModalProps = {
train: DataType;
onClose: () => void;
}

type EditedCharType = {
    speed: number;
    force: number;
    engineAmperage: number;
    id: number;
}


const CharacterTable = ({train, onClose} : TrainModalProps): JSX.Element => {
    
    const { name, characteristics } = train;
    const newArr = characteristics.map((char, i) => ({ id: i, ...char }));
    const [editedChar, setEditedChar] = useState<EditedCharType[]>(newArr);

//    const handleSave = async () => {
//        try {
//            const response = await axios.post('https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1d
//bfce008fa12c6d4838/mock.json', { ...train, characteristics: editedChar, });
            
//        } catch (error) {
//            console.error(error); 
//        }
    //}
    const handleInputChange = (id: number, field : string, value: string) => {
        const newData = editedChar.map(item =>
            item.id === id ? { ...item, [field]: Number(value) } : item
        );
        setEditedChar(newData);
        handleSave();
    };

    return (
    <form>
<table id="characteristics-table">
<caption>Характеристики</caption>
<caption>{name}</caption>
<thead>
<tr>
<th id="train-engine-amperage">Ток двигателя</th>
<th id="train-force">Сила тяги</th>
<th id="train-speed">Скорость</th>
</tr>
</thead>
<tbody>
{characteristics.map((char, i) => (
    <tr key={i}>
        <td>
            <input type="text"
                value={char.engineAmperage}
                name="engineAmperage"
                onChange={(evt) => handleInputChange(i, "engineAmperage", evt.target.value)} />
        </td>
        <td>
            <input type="text"
                value={char.force}
                name="force"
                onChange={(evt) => handleInputChange(i, "force", evt.target.value)} />
        </td>
        <td>
            <input type="text"
                name="speed"
                value={char.speed}
                onChange={(evt) => handleInputChange(i, "speed", evt.target.value)} />
        </td>
    </tr>
))}
</tbody>
</table>
<button onClick={onClose}>Отправить данные</button>
 </form>
);
};

export default CharacterTable;