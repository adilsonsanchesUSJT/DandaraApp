import { ContantsApplication } from '../types/types'

export const firstForm = (name, dateNasc, logradouro, numeroEndereco, bairro, cep, cidade, uf, email, password) => async dispatch => {
  console.log(name, dateNasc, logradouro, numeroEndereco, bairro, cep, cidade, uf, email, password);
  dispatch({
    type: ContantsApplication.REGISTER_USER,
    payload: {
      name,
      dateNasc,
      logradouro,
      numeroEndereco,
      bairro,
      cep,
      cidade,
      uf,
      email,
      password,
    },
  });
}

// export const registerUser = (name, dateNasc, logradouro, numeroEndereco, bairro, cep, cidade, uf, email, password, cpf, angelName, angelPhone, angelMail) => async dispatch => {
//   dispatch({
//     type: ContantsApplication.REGISTER_USER,
//     payload: {
//       name,
//       dateNasc,
//       logradouro,
//       numeroEndereco,
//       bairro,
//       cep,
//       cidade,
//       uf,
//       email,
//       password,
//       cpf,
//       angelName,
//       angelPhone,
//       angelMail
//     },
//   });
// }