import React, { Component } from 'react';
import './App.css';
import ProductFound from './components/ProductFound.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import favoriteIMG from './assets/star-solid.svg';
import liderLogo from './assets/lider-logo.svg';
import iconBras from './assets/bars-solid.svg';
import cart from './assets/shopping-cart-solid.svg';

require('dotenv').config()
class App extends Component {
  constructor(props) {
    super(props);
    // this.apiUrl = 'http://localhost:4000/api/'
    
    this.apiUrl = process.env.REACT_APP_API_URL;
    this.state = {};
    this.setState({ rows: [<div>Welcome!</div>] });

  }

  reviewFavorites() {
    let arrayFavorite = localStorage.getItem('favorites');
    if (arrayFavorite !== null && arrayFavorite !== "") {
      arrayFavorite = JSON.parse(arrayFavorite);
      for (let i in arrayFavorite) {
        $('#' + arrayFavorite[i].imdbID + '_img').attr("src", favoriteIMG);
      }
    }
  }

  performSearch(stringSearch) {

    if (stringSearch.length < 3)
      return true;
    /**Considerar que el token es estatico solo por ser un ejercicio de prueba */
    let url = this.apiUrl + 'searchProduct'
    
    $.ajax({
      url: url,
      headers: {
        'token': 'e817c8c863f6e39f1f77370305655551e4b5654d',
        'str_in': stringSearch
      },
      type: 'GET',
      dataType: 'json',
      success: (searchResult) => {

        let productRows = [];
        const results = searchResult.data;
        /**En caso de que encuentre un resultado */
        if (searchResult.data.length > 0) {
          for (let i in results) {
            let product = <ProductFound key={i} product={results[i]} is_pal={searchResult.is_pal} />;
            productRows.push(product);
          }
          this.setState({ rows: productRows }, () => {
            this.reviewFavorites();
          });
        }
        else if (stringSearch === "") {
          this.setState({ rows: [<div>...waiting for search</div>] });
        }
        else {
          this.setState({ rows: [<div>Result not found :C</div>] });
        }

      },
      error: (xhr, status, error) => {
        console.log('URL:', url);
        console.log('ERROR:', xhr, status, error);
      }
    });
  }

  searchChangeHandle(e) {
    const obj = this;
    const value = e.target.value;
    obj.performSearch(value);
  }




  render() {

    return (
      <div id="main">
        <div class="row back-nav sticky">

          <nav class=" navbar-light bg-light back-nav">
            <div class="col-lg-3">
              <a class="navbar-brand logo-l" href="#">
                <img src={liderLogo} height="40" alt="" />
              </a>
              <div class="menu-icon-container">
                <div>
                  <a href="#">
                    <img class="menu-prop" src={iconBras} height="30" alt="" />
                    <div class="show-category"><b>Categorías</b></div>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="cont-input"><input placeholder="¿Qué estas buscando?" id="input-search" onChange={this.searchChangeHandle.bind(this)}></input></div>
            </div>
            <div class="col-lg-3">
              <div class="menu-cart">
                <div>
                  <a href="#">
                    <table>
                      <tr>
                        <td><img class="menu-prop" src={cart} height="30" alt="" /></td>
                        <td><div class="content-circle"><div class="circle-yellow"><b>0</b></div></div></td>
                      </tr>
                    </table>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="row">
          <div class="col-lg-12 tf-intro">
            <div id="" class="text-center">
              <div class="App">
                <center>
                  <br />
                </center>
                <br />
                {this.state.rows}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default App;
