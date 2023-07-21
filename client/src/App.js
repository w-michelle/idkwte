import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { useEffect, useState } from "react";
function App() {
  const [city, setCity] = useState("los angeles");

  const handleCity = (e) => {
    const check = localStorage.getItem("restaurantCity");
    if (e.target.value === "" && JSON.parse(check).length === 0) {
      return;
    }
    if (check) {
      if (JSON.parse(check) !== e.target.value) {
        localStorage.setItem("restaurantCity", JSON.stringify(e.target.value));
        setCity(e.target.value);
      } else {
        return;
      }
    } else {
      localStorage.setItem("restaurantCity", JSON.stringify(e.target.value));
      setCity(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  useEffect(() => {
    const check = localStorage.getItem("restaurantCity");
    if (check) {
      setCity(JSON.parse(check));
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="md:flex-row flex flex-col items-center">
          <Link to={"/"}>
            <h1 className="logo py-4 text-sm">I DON'T KNOW WHAT TO EAT IN</h1>
          </Link>
          <div className="flex">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={city}
                onChange={handleCity}
                placeholder="enter a city"
                className="text-orange-400 mx-2 mt-1 pb-4 titleCity border-b-2 border-b-black h-[30px] outline-none"
              />
            </form>
            {city.length > 0 && (
              <button
                className="font-semibold text-xs text-gray-400 mt-2 border-[1px] border-gray-700 p-1"
                onClick={handleSubmit}
              >
                Enter
              </button>
            )}
          </div>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
