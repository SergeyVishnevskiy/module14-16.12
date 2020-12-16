import { refs } from '../../../refs/refs';
import { state } from '../../../data/data';

const createUsersMarkup = () => {
  return state.data.users.reduce((acc, user) => {
    acc += `
        <li>
        <h2>Email:${user.email}</h2>
        <p>ID:${user.localId}</p>
        </li>
        `;
    return acc;
  }, '');
};

export const createUsersList = () => {
  refs.content.innerHTML = `
    <ul class="usersList">
        ${createUsersMarkup()}
    </ul>
    `;
};
