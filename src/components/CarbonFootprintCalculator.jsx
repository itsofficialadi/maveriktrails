// src/components/CarbonFootprintCalculator.jsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Tooltip } from 'react-tooltip';

const CarbonFootprintCalculator = () => {
  const [data, setData] = useState({
    electricity: '',
    gas: '',
    waste: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setError('');
    } else {
      setError('Please enter valid numbers only.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.electricity || !data.gas || !data.waste) {
      setError('All fields are required.');
      return;
    }
    const total = data.electricity * 0.5 + data.gas * 2.3 + data.waste * 0.3;
    setResult({
      total,
      details: [
        { category: 'Electricity', value: data.electricity * 0.5 },
        { category: 'Gas', value: data.gas * 2.3 },
        { category: 'Waste', value: data.waste * 0.3 },
      ],
    });
  };

  const handleReset = () => {
    setData({
      electricity: '',
      gas: '',
      waste: '',
    });
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-background text-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Carbon Footprint Calculator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Electricity Usage (kWh)
            <span data-tooltip-id="electricity-tooltip" className="ml-2 cursor-pointer">i</span>
            <Tooltip id="electricity-tooltip" effect="solid" place="top">
              <span>Enter the amount of electricity used in kilowatt hours (kWh).</span>
            </Tooltip>
          </label>
          <input
            type="text"
            name="electricity"
            value={data.electricity}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-2">Gas Usage (Therms)
            <span data-tooltip-id="gas-tooltip" className="ml-2 cursor-pointer">i</span>
            <Tooltip id="gas-tooltip" effect="solid" place="top">
              <span>Enter the amount of gas used in therms.</span>
            </Tooltip>
          </label>
          <input
            type="text"
            name="gas"
            value={data.gas}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-2">Waste Production (lbs)
            <span data-tooltip-id="waste-tooltip" className="ml-2 cursor-pointer">i</span>
            <Tooltip id="waste-tooltip" effect="solid" place="top">
              <span>Enter the amount of waste produced in pounds (lbs).</span>
            </Tooltip>
          </label>
          <input
            type="text"
            name="waste"
            value={data.waste}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg w-full transition duration-300 mr-2"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg w-full transition duration-300"
          >
            Reset
          </button>
        </div>
      </form>
      {result && (
        <div className="mt-6 p-4 rounded-lg bg-gray-800">
          <h3 className="text-xl font-bold">Total Carbon Footprint: {result.total.toFixed(2)} kg CO2</h3>
          <Bar
            data={{
              labels: result.details.map((d) => d.category),
              datasets: [
                {
                  label: 'kg CO2',
                  data: result.details.map((d) => d.value),
                  backgroundColor: ['#4F46E5', '#3730A3', '#1E1E1E'],
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;
