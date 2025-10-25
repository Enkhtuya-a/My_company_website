import React, { useState } from 'react';

function Calculator() {
  const [power, setPower] = useState('');
  const [voltage, setVoltage] = useState('380');
  const [cosPhi, setCosPhi] = useState('');
  const [material, setMaterial] = useState('copper');
  const [length, setLength] = useState('');
  const [selectedCrossSection, setSelectedCrossSection] = useState('');

  const [current, setCurrent] = useState(null);
  const [cableSizeStage1, setCableSizeStage1] = useState('');
  const [voltageDropResult, setVoltageDropResult] = useState('');

  const resistivity = {
    copper: 0.0175,
    aluminum: 0.028
  };

  const cableTable = {
    copper: [
      { size: '2.5 мм²', maxCurrent: 25 },
      { size: '4 мм²', maxCurrent: 32 },
      { size: '6 мм²', maxCurrent: 40 },
      { size: '10 мм²', maxCurrent: 63 },
      { size: '16 мм²', maxCurrent: 80 }
    ],
    aluminum: [
      { size: '4 мм²', maxCurrent: 28 },
      { size: '6 мм²', maxCurrent: 36 },
      { size: '10 мм²', maxCurrent: 50 },
      { size: '16 мм²', maxCurrent: 65 }
    ]
  };

  const extendedCableSizes = {
    copper: [2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240],
    aluminum: [4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240]
  };

  const calculateStage1 = () => {
    const P = parseFloat(power);
    const U = parseFloat(voltage);
    const cos = parseFloat(cosPhi);
    if (!P || !U || !cos) return;

    const I = (P * 1000) / (Math.sqrt(3) * U * cos);
    setCurrent(I);

    const selectedCable = cableTable[material].find(c => I <= c.maxCurrent);
    setCableSizeStage1(selectedCable ? selectedCable.size : 'Илүү том кабель сонгох шаардлагатай');
  };

  const calculateStage2 = () => {
    const I = parseFloat(current);
    const L = parseFloat(length);
    const S = parseFloat(selectedCrossSection);
    const U = parseFloat(voltage);

    if (!I || !L || !S || !U) return;

    const rho = resistivity[material];
    const voltageDrop = (2 * I * L * rho) / S;
    const voltageDropPercent = (voltageDrop / U) * 100;

    setVoltageDropResult(`Хүчдлийн алдагдал: ${voltageDropPercent.toFixed(2)}% (${voltageDrop.toFixed(2)} В)`);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Кабелийн сонголт</h2>

      {/* 1-р шат */}
      <div className="mb-8 border p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">
          1-р шат: Гүйдэл тооцоолж эдийн засгийн нягтын аргаар шалгах ба кабель сонгох
        </h3>
        <input
          type="number"
          placeholder="Чадал (кВт)"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          className="border px-4 py-2 mr-2"
        />
        <select
          value={voltage}
          onChange={(e) => setVoltage(e.target.value)}
          className="border px-4 py-2 mr-2"
        >
          <option value="220">220 В</option>
          <option value="380">380 В</option>
        </select>
        <input
          type="number"
          placeholder="cosφ"
          value={cosPhi}
          onChange={(e) => setCosPhi(e.target.value)}
          className="border px-4 py-2 mr-2"
        />
        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="border px-4 py-2 mr-2"
        >
          <option value="copper">Зэс</option>
          <option value="aluminum">Хөнгөн цагаан</option>
        </select>
        <button
          onClick={calculateStage1}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Тооцоолох
        </button>

        {current && (
          <div className="mt-4">
            <p>Гүйдэл: {current.toFixed(2)} A</p>
            <p>Санал болгож буй кабель: {cableSizeStage1}</p>
          </div>
        )}
      </div>

      {/* 2-р шат */}
      <div className="border p-4 rounded">
        <h3 className="text-xl font-semibold mb-4">2-р шат: Хүчдлийн алдагдлыг тооцох</h3>
        <input
          type="number"
          placeholder="Кабелийн урт (м)"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border px-4 py-2 mr-2"
        />
        <select
          value={selectedCrossSection}
          onChange={(e) => setSelectedCrossSection(e.target.value)}
          className="border px-4 py-2 mr-2"
        >
          <option value="">Хөндлөн огтлол сонгох</option>
          {extendedCableSizes[material].map((size) => (
            <option key={size} value={size}>{size} мм²</option>
          ))}
        </select>
        <button
          onClick={calculateStage2}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Тооцоолох
        </button>
        {voltageDropResult && (
          <p className="mt-4">{voltageDropResult}</p>
        )}
      </div>
    </div>
  );
}

export default Calculator;