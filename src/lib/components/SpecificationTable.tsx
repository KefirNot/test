import React, { useState } from "react";
import type { TrainData } from "../../types";

type Props = {
  train: TrainData;
  onSubmit: () => void;
};

const SpecificationTable = ({ train, onSubmit: onClose }: Props) => {
  const { name, characteristics } = train;
  const [editedChar, setEditedChar] = useState([...characteristics]);

  const handleInputChange = (id: number, key: string, value: string) => {
    const newData = editedChar.map((item, i) =>
      i === id ? { ...item, [key]: +value } : item
    );
    setEditedChar(newData);
  };

  return (
    <form onSubmit={onClose}>
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
          {editedChar.map((char, i) => (
            <tr key={i}>
              <td>
                <input
                  type="number"
                  value={char.engineAmperage}
                  name="engineAmperage"
                  onChange={(evt) =>
                    handleInputChange(i, "engineAmperage", evt.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={char.force}
                  name="force"
                  onChange={(evt) =>
                    handleInputChange(i, "force", evt.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  step={1}
                  name="speed"
                  value={char.speed}
                  onChange={(evt) =>
                    handleInputChange(i, "speed", evt.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Отправить данные</button>
    </form>
  );
};

export default SpecificationTable;
