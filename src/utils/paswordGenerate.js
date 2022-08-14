import randomize from 'randomatic'

export const passwordGenerate = (
  isLowerCase,
  isUpperCase,
  isNumeric,
  isSpecialCharacters,
  lengthPassword,
) => {
  let lowerCase = isLowerCase ? 'a' : ''
  let upperCase = isUpperCase ? 'A' : ''
  let numeric = isNumeric ? '0' : ''
  let specialCharacters = isSpecialCharacters ? '?' : ''

  return randomize(`${lowerCase}${upperCase}${numeric}${specialCharacters}`, lengthPassword, {chars: '#$@!'})
}
