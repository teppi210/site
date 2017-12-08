import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
        <div className="item">
        <h3>Blog 1</h3>
        <img src="../wormz.png"/>
        <p>Locavore green juice vaporware, chartreuse brooklyn shaman vinyl in. Officia vinyl small batch PBR&B mumblecore fugiat. Fixie in tumblr, twee dolore deserunt readymade cold-pressed slow-carb minim.</p>
        </div>
        <div className="item">
        <h3>Blog 2</h3>
        <img src="../wormz.png"/>
        <p>Gochujang jean shorts master cleanse before they sold out authentic roof party excepteur twee plaid. Aliquip tacos gentrify DIY schlitz hella ut, fashion axe echo park cillum ugh letterpress.</p>
        </div>
        <div className="item">
        <h3>Blog 3</h3>
        <img src="../wormz.png"/>
        <p>Sint franzen ut shaman pickled do, vaporware letterpress ipsum snackwave hot chicken celiac distillery migas magna. Pariatur non unicorn locavore, aliqua proident marfa. </p>
        </div>
        <div className="item">
        <h3>Blog 4</h3>
        <img src="../wormz.png"/>
        <p>Taxidermy brunch culpa health goth, pok pok chartreuse farm-to-table excepteur. Pinterest freegan single-origin coffee, minim distillery slow-carb humblebrag migas palo santo mlkshk.</p>
        </div>
      </div>
    );
  }
}

export default Blog;