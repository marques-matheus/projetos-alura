import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
              <td class="text-info">${this.formatar(item.data)}</td>
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
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
