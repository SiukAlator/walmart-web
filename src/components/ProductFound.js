import React from 'react';

class ProductFound extends React.Component {


    render() {

        let srcImg = 'http://' + this.props.product.image;
        let idBox = this.props.product.id;
        let price = '';
        let realPrice = '$' + formatNumber(this.props.product.price);
        // return <div></div>;

        if (this.props.is_pal)
            price = '$' + formatNumber((this.props.product.price) / 2);
        else
            price = realPrice;



        return <div class="col-sm-6 col-md-4" id={idBox}>
            <div class="thumbnail">

                <img src={srcImg} alt="poster" width="250px" />
                <br />
                <div class="content-price-calc">
                    <table>
                        <tr>
                            <td><h4 class="text-left">{this.props.product.brand}</h4> </td>
                            <td><div class="content-desc"><h6>Descripción: {this.props.product.description}</h6></div></td>
                        </tr>
                        <tr>
                            <td><h3>{price}</h3></td>
                            <td><h4>{this.props.is_pal ? <div class="content-promo"><div class="promo">50%</div></div> : <div />}</h4></td>
                        </tr>
                        <tr>
                            <td>{this.props.is_pal ? <div ><s>{realPrice}</s></div> : <div />}</td>
                            <td></td>
                        </tr>
                    </table>
                    <center>
                        <div class="button_add">
                            <div>
                                <a href="#">
                                    <div class="text_button_add">Agregar</div>
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>;
    }

}

function formatNumber(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}

export default ProductFound;