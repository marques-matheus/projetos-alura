import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
         <thead> 
            <tr>
                <th class="text-info">DATA</th>
                <th class="text-info">QUANTIDADE</th>
                <th class="text-info">VALOR</th>
            </tr>
         </thead>
         <tbody>
         ${model
           .lista()
           .map((item) => {
             return `
              <tr> 
              <td class="text-info">${new Intl.DateTimeFormat().format(
                item.data
              )}</td>
              <td class="text-info">${item._quantidade}</td>
              <td class="text-info">${item._valor}</td>
              </tr>
             `;
           })
           .join("")}
         </tbody>
      </table> 
      `;
  }
  
}
