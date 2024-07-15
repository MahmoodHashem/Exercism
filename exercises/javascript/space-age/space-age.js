
export const age = () => {
  
  const planetaryYears = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  const ageOnPlanets = {};

  for (const [planet, yearLength] of Object.entries(planetaryYears)) {
    const ageInPlanetaryYears = ageInSeconds / (yearLength * 31557600);
    ageOnPlanets[planet] = Number(ageInPlanetaryYears.toFixed(2));
  }

  return ageOnPlanets[planet];
}; 
