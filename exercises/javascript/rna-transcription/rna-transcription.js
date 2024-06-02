

const RNA = {
  'G': 'C',
 'C': 'G',
'T': 'A',
'A' :'U', 
}

export const toRna = (dan) => {
 return dan.split('').map((n)=> RNA[n]).join(''); 
};
