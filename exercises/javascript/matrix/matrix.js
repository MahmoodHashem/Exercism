//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Matrix {
    constructor(str) {
        this.matrix = str.split('\n')
      }
    
      get rows() {
        return this.matrix.map(row => row.split(" ").map(Number))
      }
    
      get columns() {
        return this.rows[0].map((e, i) => {
          return this.rows.map(row => row[i])
        })
      }
}
