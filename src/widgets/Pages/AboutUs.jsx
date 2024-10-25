import { useState, useRef, useEffect } from "react";
import Container from "../../shared/helpers/Container";
import Car1 from "../../shared/assets/svg/Car1.svg"; // Importing Car SVG
import pen from "../../shared/assets/svg/pen.svg"; // Import pen SVG
import delIcon from "../../shared/assets/svg/delete.svg"; // Import delete SVG

const initialCars = [
  { id: 1, brand: "Audi", model: "A8", price: "$175,900", image: Car1 },
  { id: 2, brand: "BMW", model: "M5", price: "$185,000", image: Car1 },
  { id: 3, brand: "Mercedes", model: "S-Class", price: "$200,000", image: Car1 },
];

const AboutUs = () => {
  const [cars, setCars] = useState(initialCars);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const tableEndRef = useRef(null);

  // Scroll to the bottom on new car addition
  useEffect(() => {
    tableEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cars]);

  const handleAddCar = () => {
    const newCar = {
      id: cars.length + 1,
      brand: "New Car",
      model: "Model X",
      price: "$200,000",
      image: Car1,
    };
    setCars([...cars, newCar]);
  };

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
    setShowConfirm(false);
  };

  const openConfirmDialog = (car) => {
    setSelectedCar(car);
    setShowConfirm(true);
  };

  return (
    <Container>
      <div className="w-[996px] h-auto rounded-xl mb-10 bg-[#0b111c] text-white p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Мои машины</h1>
          <button
            onClick={handleAddCar}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300"
          >
            + Добавить
          </button>
        </div>

        <tbody className="w-[100px] text-white">
          <tr className="border-b border-gray-500">

          </tr>
        </tbody>

        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="py-2 text-left">Фото</th>
              <th className="text-left">Марка</th>
              <th className="text-left">Модель</th>
              <th className="text-left">Цена</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="border-b border-gray-500">
                <td className="py-5">
                  <img
                    src={car.image}
                    alt={car.model}
                    className="w-[180px] h-[100px] rounded-md border border-white" // Add white border
                  />
                </td>
                <td className="text-left">{car.brand}</td>
                <td className="text-left">{car.model}</td>
                <td className="text-left">{car.price}</td>
                <td className="flex justify-center items-center gap-4 py-4">
                  <button onClick={() => openConfirmDialog(car)}>
                    <img
                      src={delIcon}
                      alt="Delete"
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                  </button>
                  <button>
                    <img
                      src={pen}
                      alt="Edit"
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        {showConfirm && selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md text-black shadow-lg">
              <p>Вы уверены, что хотите удалить {selectedCar.model}?</p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                >
                  Нет
                </button>
                <button
                  onClick={() => handleDelete(selectedCar.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Да
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AboutUs;
