import { html } from "../node_modules/lit-html/lit-html.js";
import { mainDivElement, updateNav } from "../solution.js";
import { get } from "./api.js";


export const catalogTemplate = (data) => html`
<div class="wrapper">
    <div class="card-wrapper">
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Decoration factor</th>
                            <th>Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                      ${data.map(row => html`
                          <tr>
                            <td>
                              <img src=${row.img}>
                            </td>
                            <td>
                              <p>${row.name}</p>
                            </td>
                            <td>
                              <p>${row.price}</p>
                            </td>
                            <td>
                              <p>${row.decFactor}</p>
                            </td>
                            <td>
                              <input type="checkbox" disabled/>
                            </td>
                          </tr>`)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
`;

export async function catalogPage(ctx) {
  updateNav();

  ctx.render(catalogTemplate(await get('/data/furniture')), mainDivElement);
}