import { linkAttrs } from './blk';
const rootLink = '../assets/cam/';


export default {
  id: 2,
  cat: 'Experiences',
  slug: 'cam',
  intro: {
    title: 'E-GOLF',
    desc: 'E-commerce App using ionic & Woocommerce',
    icon: `${rootLink}logo.png`,
    style: {
      color: '#fff',
      background: 'linear-gradient(#055492 50%, #143B53)'
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [ {
        type: 'text',
        class: 'intro-text',
        value: `
        <h3 class="header-3">The Project</h3>
        <p>Golf sport e-commerce app, internatinal shipping</p>
        <h3 class="header-3">The Role</h3>
        <p>Senior Web Developer </a></p>
        <h3 class="header-3">The Toolkit</h3>
        <p>WordPress | WooCommerce | ionic | Angular</p>
        `,
      }]
    }, {
      class: 'align-tops',
      style: {
        background: `url(${rootLink}IMG_0910.jpg) top/cover`,
        color: '#fff',
      },
      content: [{
        class: 'stats-box',
        type: 'text',
        value: `
        <div >
          <h4 class="header-4">15+ Pages. Development Time</h4>
          <div class="font-super" style="color:#2079bf">3 Months</div>
          <span>One developer, one designer</span>
        </div>
        `,
      }, {
        type: 'image',
        class: 'content-overlap',
        height: '200%',
        value: `${rootLink}IMG_0924.jpg`,
      }],
    }, {
      style: {
        color: '#fff',
        backgroundColor: '#2079bf',
      },
      class: 'align-tops',
      content: [{
        type: 'image',
        height: '209%',
        class: 'image-shadow',
        value: `${rootLink}IMG_0928.jpg`,
        alt: 'egolf Strategy',
        caption: 'Eleven varied products.'
      }, {
        type: 'image',
        height: '141%',
        class: 'image-shadow',
        value: `${rootLink}IMG_0922.jpg`,
        alt: 'egolf Strategy',
      }, {
        type: 'image',
        height: '192%',
        class: 'image-shadow',
        value: `${rootLink}IMG_0929.jpg`,
        alt: 'egolf Strategy',
      }],
    }, {
      class: 'flex-mobile',
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}camm-icons.svg`,
        alt: 'icole Icons',
      }, {
        class: 'flex-double',
        type: 'image',
        height: '50%',
        value: `${rootLink}map.svg`,
        alt: 'CAMMS Strategy',
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};

// todo - SIMPLIFY MAP ??
