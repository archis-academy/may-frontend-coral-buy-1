import logo from "../../assets/coral.svg";
import "./wip.module.scss";

/**
 * a template to render messages on screen
 * @param {String} msg - message to be rendered
 * @param {HTMLElement} container - where to render the message
 * */
export function renderMessage(msg, container) {
	container.innerHTML += `
    <div class="msg-container">
      <img src=${logo} alt="coral-logo" />
      <h2 class="msg">${msg}</h2>
    </div>
`;
}
