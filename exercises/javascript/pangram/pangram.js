

export const isPangram = (s) => {
  s = s.toLowerCase(); 
  return [...'abcdefghijklmnopqrstuvxwyz'].every( e =>{
    return s.includes(e); 
  })
};


