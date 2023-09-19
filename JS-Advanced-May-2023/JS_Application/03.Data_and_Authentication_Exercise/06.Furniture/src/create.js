import { html, render } from "../node_modules/lit-html/lit-html.js";
import { mainDivElement } from "../solution.js";
import { get, post } from "./api.js";
import { createSubmitHandler } from "./utils.js";



const createTemplate = (onSubmit, data) => html`
<div class="wrapper">
    <div class="card-wrapper">
        <div class="row">
            <div class="col-md-12">
                <h2>Create Product</h2>
                <form action="" method="post" @submit=${onSubmit}>
                    <label>Name: <input type="text" name="name"></label>
                    <label>Price: <input type="text" name="price"></label>
                    <label>Factor: <input type="text" name="factor"></label>
                    <label>Img: <input type="text" name="img"></label>
                    <button>Create</button>
                </form>
                <hr>
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
                        ${data.map(item => html`
                        <tr>
                            <td>
                                <img src=${item.img}>
                            </td>
                            <td>
                                <p>${item.name}</p>
                            </td>
                            <td>
                                <p>${item.price}</p>
                            </td>
                            <td>
                                <p>${item.decFactor}</p>
                            </td>
                            <td>
                                <input type="checkbox"/>
                            </td>
                        </tr>`)}
                    </tbody>
                </table>
                <button>Buy</button>
                <hr>
                <div class="orders">
                    <p>Bought furniture: <span>Office chair, Sofa</span></p>
                    <p>Total price: <span>419 $</span></p>
                    <button>All orders</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

async function onSubmit(ctx, data, event) {
    await post('/data/furniture', {name: data.name, price: data.price, decFactor: data.factor, img: data.img});

    const tbodyElement = event.target.parentElement.querySelector('.table tbody');

    const newData = await get('/data/furniture');
    
    render(rowsTemplate(newData), tbodyElement);
}

function rowsTemplate(data) {
    const result = data.map(item => html`
    <tr>
        <td>
            <img src=${item.img}>
        </td>
        <td>
            <p>${item.name}</p>
        </td>
        <td>
            <p>${item.price}</p>
        </td>
        <td>
            <p>${item.decFactor}</p>
        </td>
        <td>
            <input type="checkbox"/>
        </td>
    </tr>`);

    return result;
}

export async function createPage(ctx) {
    const data = await get('/data/furniture');
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit), data), mainDivElement);
}