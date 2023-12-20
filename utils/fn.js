// import {rootEl, main, favorites} from "../script.js"
// import { usersList } from "./credentials.js";

export const cE = (type) => document.createElement(type);
export const qS = (el) => document.querySelector(el);

// export const createLogIn = () => {
//     const wrapperEl = cE("form");
//     const usernameInputEl = cE("input");
//     const passwordInputEl = cE("input");
//     const submitBtnEl = cE("input");
    
//     wrapperEl.className = "login";
//     usernameInputEl.type = "text";
//     usernameInputEl.placeholder = "Username";
//     passwordInputEl.type = "password";
//     passwordInputEl.placeholder = "Password";
//     submitBtnEl.type = "submit";
    
//     wrapperEl.addEventListener("submit", (event) => {
//     event.preventDefault();
    
//     const isAuth = !!usersList.find(
//         (user) =>
//         user.username === event.srcElement[0].value &&
//         user.password === event.srcElement[1].value
//     );
    
//     if (isAuth) {
        
//         wrapperEl.style.display = "none"; // Nascondi la sezione di accesso
//         rootEl.append(main, favorites);
//     } else {
//         alert("Username e/o password non corretta");
//     }
//     });
    
//     wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
//     return wrapperEl;
// };



