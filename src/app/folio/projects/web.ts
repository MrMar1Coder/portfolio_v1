import { linkAttrs } from './blk';
const rootLink = '../assets/web/';

export default {
  id: 6,
  cat: 'Experiences',
  slug: 'web',
  intro: {
    title: 'Shopify E-commerce',
    desc: 'Store Manager',
    icon: `${rootLink}shopify_logo_darkbg.svg`,
    style: {
      background: '#23282d',
      color: '#ddd',
    },
  },
  rows: [{
      class: 'flex-reverse',
      style: {
        background: `url(${rootLink}bg.svg) right/cover`,
        color: '#31b0bd',
      },
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h2 class="header-2" >The<br> Golf Euro Shopify Store</h2>
        <p>Golf Euro Site.</p>
        <h4 class="header-4" >The Role</h4>
        <p>Senior Web Developer at
          <a class="match-content" href="https://www.golf-euro.com/" ${linkAttrs} >Golf Euro</a></p>
        <h4 class="header-4" >The Toolkit</h4>
        <p>Shopify</p>
        <h4 class="header-4" >View <a class="match-content" href="https://www.golf-euro.com/" ${linkAttrs} >Live Site</a></h4>
        `,
      }, {
        type: 'image',
        height: '127%',
        class: 'image-shadow',
        value: `${rootLink}download.png`,
        alt: 'golf euro',
      }]
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

/*
    GOLF EURO
*/
