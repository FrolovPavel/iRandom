
const passwords = (state) => state.passwords
const isLowerCase = (state) => state.isLowerCase
const isUpperCase = (state) => state.isUpperCase
const isNumeric = (state) => state.isNumeric
const isSpecialCharacters = (state) => state.isSpecialCharacters
const lengthPassword = (state) => state.lengthPassword
const quantityPasswords = (state) => state.quantityPasswords

const getters = {
  passwords,
  isLowerCase,
  isUpperCase,
  isNumeric,
  isSpecialCharacters,
  lengthPassword,
  quantityPasswords
}

export default getters
