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

  let password = randomize(`${lowerCase}${upperCase}${numeric}${specialCharacters}`, lengthPassword, {chars: '#$@!'})


  // эти функции для того что-бы минимум 1 символ lowerCase upperCase numeric specialCharacters был в пароле
  if(isLowerCase) password = setOneLowerCase(password)
  if(isUpperCase) password = setOneUpperCase(password)
  if(isNumeric) password = setOneNumeric(password)
  if(isSpecialCharacters) password = setOneSpecialCharacters(password)

  return password
}

function setOneSpecialCharacters (password) {
  const specialCharacters = ['#', '$', '@', '!']
  const randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length)
  let passwordArr = password.split('')

  passwordArr[Math.ceil(passwordArr.length / 2)  + 1] = specialCharacters[randomSpecialCharacters]
  console.log(specialCharacters[randomSpecialCharacters])
  console.log(passwordArr)
  return passwordArr.join('')
}

function setOneNumeric (password) {
  const randomNumber = Math.floor(Math.random() * 10)
  let passwordArr = password.split('')

  passwordArr[Math.floor(passwordArr.length / 2)] = randomNumber
  return passwordArr.join('')
}

function setOneLowerCase (password) {
  const randomLetter = (Math.floor(Math.random() * (25 - 0 + 1) + 0) + 10).toString(36)
  let passwordArr = password.split('')

  passwordArr[Math.floor(passwordArr.length / 2) - 1] = randomLetter
  return passwordArr.join('')
}

function setOneUpperCase (password) {
  const randomLetter = (Math.floor(Math.random() * (25 - 0 + 1) + 0) + 10).toString(36)
  let passwordArr = password.split('')
  passwordArr[Math.floor(passwordArr.length / 2) - 2] = randomLetter.toUpperCase()
  return passwordArr.join('')
}
