import produce from 'immer';
import { ContantsApplication } from '../types/types';

const initialState = {
  user: [],
};

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case ContantsApplication.REGISTER_USER: {
        const { name, dateNasc, logradouro, numeroEndereco, bairro, cep, cidade, uf, email, password, cpf, angelName, angelPhone, angelMail } = payload;

        const _objectJSON = {
          name: name,
          dateNasc: dateNasc,
          address: {
            logradouro: logradouro,
            numero: numeroEndereco,
            bairro: bairro,
            cep: cep,
            cidade: cidade,
            uf: uf,
          },
          email: email,
          password: password,
          cpf: cpf,
          angel: {
            angelName: angelName,
            angelPhone: angelPhone,
            angelMail: angelMail,
          },
        };

        draft.user.push(_objectJSON)
        break;
      }
      default:
        break;
    }
  });
