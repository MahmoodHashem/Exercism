

/**
 * Calculates the score of a given string based on the values assigned to each character.
 *
 * The score is calculated as follows:
 * - Characters 'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', and 't' have a value of 1.
 * - Characters 'd' and 'g' have a value of 2.
 * - Characters 'b', 'c', 'm', and 'p' have a value of 3.
 * - Characters 'f', 'h', 'v', 'w', and 'y' have a value of 4.
 * - Character 'k' has a value of 5.
 * - Characters 'j' and 'x' have a value of 8.
 * - Characters 'q' and 'z' have a value of 10.
 * 
 * */


/*
  @param [string The input string to calculate the score for.
  @return The calculated score based on the values assigned to each character in the string.
 */
int score(String string) {
  string = string.toLowerCase();
  var arr = string.split('');

  var one = arr.where((char) => 'aeioulnrst'.contains(char)).toList();
  var two = arr.where((char) => 'dg'.contains(char)).toList();
  var three = arr.where((char) => 'bcmp'.contains(char)).toList();
  var four = arr.where((char) => 'fhvwy'.contains(char)).toList();
  var five = arr.where((char) => 'k'.contains(char)).toList();
  var eight = arr.where((char) => 'jx'.contains(char)).toList();
  var ten = arr.where((char) => 'qz'.contains(char)).toList();

  return one.length +
      two.length * 2 +
      three.length * 3 +
      four.length * 4 +
      five.length * 5 +
      eight.length * 8 +
      ten.length * 10;
}
