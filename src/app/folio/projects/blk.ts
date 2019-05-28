

export const linkAttrs = 'target="_blank" rel="nofollow"';
// shared accross the other projects

const rootLink = '../assets/blk/';

export default {
  id: 1,
  cat: 'Experiences',
  slug: 'blk',
  intro: {
    title: 'E-pocket Project',
    desc: 'ionic | Angular 4 | TypeScript',
    icon: `${rootLink}43.svg`,
    style: {
      color: '#f9a825',
      background: 'linear-gradient(#2a5a30, #152e18)',
    },
  },
  rows: [
    {
      class: 'text-row row-collapse',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}44-pdf.svg`,
        alt: 'Vue.js',
      }, {
        type: 'text',
        class: 'intro-text row-collapse',
        value: `
        <h3 class="header-3" >The Project</h3>
        <p>This application is a kind of adaptation of the traditional remote banking channel on mobile terminal </p>
        <h3 class="header-3" >The Role</h3>
        <p>Controller Visual Identity of the project. Learning ionic.</p>
        <h3 class="header-3" >The Toolkit</h3>
        <ul>
          <li>Javascript - TypeScript</li>
          <li>ionic framework  - Angular 4</li>
        </ul>
        `,
      }]
    }, {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View source on
          <a href="https://drive.google.com/drive/folders/1HRvPKVxHUsrNkb6q8UIxQ_X2XJqlgDzS" ${linkAttrs} >Drive</a>
        </h3>
        `,
      }, {
        type: 'text',
        class: 'text-center',
        value: `
        <h3 class="header-3">View
          <a href="https://drive.google.com/drive/folders/1Rui8Xzcx5_XsQfVAALJT0IH_vO77jOmY" ${linkAttrs} >Live App</a>
        </h3>
        `,
      }],
    }, {

      class: 'blackjack-row hide-small',
      content: [{
        type: 'iframe',
        height: '75%',
        caption: '<h5>New App</h5><span>Take look now in browser.</span>',
        value: `${rootLink}mockupdesign.pdf`,
      }],
    }, {
      class: 'text-row align-tops',
      content: [{
        type: 'text',
        value: `
        <p>Control the part of visual identity of the project.
            In addition programming the application with ionic framework
            using angular 4 and TypeScript.
        </p> <p>The Visuals are all custom made SVG elements.</p>
        `,
      }, {
        type: 'text',
        class: 'stats-box',
        value: `
        <h4 class="header-4">Bundle Gzip Size</h4>
        <div class="font-super" style="color:#2a5a30">47kb</div>
        <span>without google fonts
          <a href="https://fonts.google.com/?selection.family=Roboto" ${linkAttrs} >Roboto</a></span>
          &
          <a href="https://material.io/icons/" ${linkAttrs} >Material Icons</a>
        </span>
        `,
      }],
    }, {
      style: {
        backgroundColor: '#fff',
      },
      content: [{
        type: 'image',
        height: '75%',
        alt: 'Round Over',
        class: 'content-overlap',
        value: `${rootLink}pho.png`,
        caption: '<span>Round Over.</span>'
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};


// ideally make a version that is in the middle of a game?
// some styled iframe to seperate the site? perhaps some screen
