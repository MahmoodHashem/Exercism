//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const currentDate = new Date(date); 
  const gigasecondTomilli = 1000000000000; 

  const later = new Date(gigasecondTomilli + currentDate.getTime())
};
