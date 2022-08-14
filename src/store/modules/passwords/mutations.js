import {passwordGenerate} from "@/utils/paswordGenerate";
import {checkSecurityPassword} from "@/utils/checkSecurityPassword";

const generatePassword = (state) => {
  state.passwords = []
  for(let i = 0; i < state.quantityPasswords; i++) {
    const password = passwordGenerate(
      state.isLowerCase,
      state.isUpperCase,
      state.isNumeric,
      state.isSpecialCharacters,
      state.lengthPassword,
    )
    state.passwords.push({password: password, security: checkSecurityPassword(password)})
  }
}

const generateDefinitePassword = (state, index) => {
  const password = passwordGenerate(
    state.isLowerCase,
    state.isUpperCase,
    state.isNumeric,
    state.isSpecialCharacters,
    state.lengthPassword,
  )
  state.passwords[index] = {password: password, security: checkSecurityPassword(password)}
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
