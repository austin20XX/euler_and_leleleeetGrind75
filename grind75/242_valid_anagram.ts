function isAnagram(s: string, t: string): boolean {
  // Anagrams will have the same characters in the same quantity
  // I can use a hash map to store the keys of characters that appear
  // The value will be incremented or decremented based on which string the character is in
  // So at the end if the strings are anagrams all the values will be 0

  if(s.length !== t.length) {
      return false;
  }

  const characterMap = new Map<string, number>();
  let isAnagram = true;

  for(let i = 0; i < s.length; i++) {
      const sChar = s[i];
      const tChar = t[i];

      if(characterMap.has(sChar)) {
          let count:number = characterMap.get(sChar);
          characterMap.set((sChar), ++count);
      } else {
          characterMap.set(sChar, 1);
      }

      if(characterMap.has(tChar)) {
          let count:number = characterMap.get(tChar);
          characterMap.set((tChar), --count);
      } else {
          characterMap.set(tChar, -1);
      }
  }

  characterMap.forEach((value: number, key: string) => {
      if(value !== 0) {
          isAnagram = false;
      }
  });

  return isAnagram;
};