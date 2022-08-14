import {passwordGenerate} from "@/utils/paswordGenerate";

const generatePassword = (state) => {
  state.passwords = []
  for(let i = 0; i < state.quantityPasswords; i++) {
    state.passwords.push(passwordGenerate(
      state.isLowerCase,
      state.isUpperCase,
      state.isNumeric,
      state.isSpecialCharacters,
      state.lengthPassword,
    ))
  }
}

const generateDefinitePassword = (state, index) => {
  state.passwords[index] = passwordGenerate(
    state.isLowerCase,
    state.isUpperCase,
    state.isNumeric,
    state.isSpecialCharacters,
    state.lengthPassword,
  )
}

const setLowerCase = (state) => {
  state.isLowerCase = !state.isLowerCase
}

const setUpperCase = (state) => {
  state.isUpperCase = !state.isUpperCase
}

const setNumeric = (state) => {
  state.isNumeric = !state.isNumeric
}

const setSpecialCharacters = (state) => {
  state.isSpecialCharacters = !state.isSpecialCharacters
}

const setLengthPassword = (state, payload) => {
  state.lengthPassword = payload
}

const setQuantityPasswords = (state, payload) => {
  state.quantityPasswords = payload
}

const mutations = {
  generatePassword,
  generateDefinitePassword,
  setLowerCase,
  setUpperCase,
  setNumeric,
  setSpecialCharacters,
  setLengthPassword,
  setQuantityPasswords
}

export default mutations
