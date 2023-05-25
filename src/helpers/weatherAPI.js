// import { ModuleResolutionKind } from 'typescript';

// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const result = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await result.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return data;
  }
  return data;
};

export const getWeatherByCity = async (cityUrl) => {
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityUrl}`);
  const data = await result.json();
  const { current, location } = data;
  return {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
  };
};
