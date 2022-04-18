export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
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
              <td class="text-info">${new Intl.DateTimeFormat().format(item.data)}</td>
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
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
