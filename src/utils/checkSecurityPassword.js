import { passwordStrength } from 'check-password-strength'

export const checkSecurityPassword = (value) => {
  return passwordStrength(value).id
}
