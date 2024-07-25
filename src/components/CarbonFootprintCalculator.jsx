import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define the CarbonFootprint class
class CarbonFootprint {
  constructor(electricityUsage, gasUsage, fuelUsage, flights, waste, diet) {
    this.electricityUsage = electricityUsage; // in kWh
    this.gasUsage = gasUsage; // in cubic meters
    this.fuelUsage = fuelUsage; // in liters
    this.flights = flights; // in hours of flight
    this.waste = waste; // in kg
    this.diet = diet; // vegetarian, vegan, or meat-based
  }

  calculateCarbonFootprint() {
    let electricityEmissions = this.electricityUsage * 0.233;
    let gasEmissions = this.gasUsage * 1.9;
    let fuelEmissions = this.fuelUsage * 2.31;
    let flightEmissions = this.flights * 90;
    let wasteEmissions = this.waste * 1.0;

    let dietEmissions;
    switch (this.diet) {
      case "vegetarian":
        dietEmissions = 1500;
        break;
      case "vegan":
        dietEmissions = 1000;
        break;
      default:
        dietEmissions = 2500;
    }

    let totalEmissions = electricityEmissions + gasEmissions + fuelEmissions + flightEmissions + wasteEmissions + dietEmissions;
    return totalEmissions;
  }
}

// React Component
const CarbonFootprintCalculator = () => {
  const [electricityUsage, setElectricityUsage] = useState(0);
  const [gasUsage, setGasUsage] = useState(0);
  const [fuelUsage, setFuelUsage] = useState(0);
  const [flights, setFlights] = useState(0);
  const [waste, setWaste] = useState(0);
  const [diet, setDiet] = useState("meat-based");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cf = new CarbonFootprint(electricityUsage, gasUsage, fuelUsage, flights, waste, diet);
    const footprint = cf.calculateCarbonFootprint();
    setCarbonFootprint(footprint);
  };

  const handleReset = () => {
    setElectricityUsage(0);
    setGasUsage(0);
    setFuelUsage(0);
    setFlights(0);
    setWaste(0);
    setDiet("meat-based");
    setCarbonFootprint(null);
  };

  const data = {
    labels: ['Electricity', 'Gas', 'Fuel', 'Flights', 'Waste', 'Diet'],
    datasets: [
      {
        label: 'kg CO2e',
        data: [
          electricityUsage * 0.233,
          gasUsage * 1.9,
          fuelUsage * 2.31,
          flights * 90,
          waste * 1.0,
          diet === 'vegetarian' ? 1500 : diet === 'vegan' ? 1000 : 2500
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue with opacity
        borderColor: 'rgba(59, 130, 246, 1)', // Blue
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    animation: {
      duration: 2000 // 2 seconds
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Carbon Footprint Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Electricity Usage (kWh):</label>
            <input
              type="number"
              value={electricityUsage}
              onChange={(e) => setElectricityUsage(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Gas Usage (cubic meters):</label>
            <input
              type="number"
              value={gasUsage}
              onChange={(e) => setGasUsage(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Fuel Usage (liters):</label>
            <input
              type="number"
              value={fuelUsage}
              onChange={(e) => setFuelUsage(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Flights (hours):</label>
            <input
              type="number"
              value={flights}
              onChange={(e) => setFlights(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Waste (kg):</label>
            <input
              type="number"
              value={waste}
              onChange={(e) => setWaste(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Diet:</label>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="meat-based">Meat-Based</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 ml-2"
            >
              Reset
            </button>
          </div>
        </form>
        {carbonFootprint !== null && (
          <div className="mt-6 p-4 bg-gray-200 bg-opacity-75 rounded-lg text-center">
            <h2 className="text-xl font-bold">Your Carbon Footprint is approximately {carbonFootprint.toFixed(2)} kg CO2e per year.</h2>
            <Bar data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonFootprintCalculator;
