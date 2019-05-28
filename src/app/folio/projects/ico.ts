import { linkAttrs } from './blk';
const rootLink = '../assets/ico/';


export default {
  id: 3,
  cat: 'Education',
  slug: 'ico',
  intro: {
    title: 'YouCode High tech',
    desc: 'High tech School of technology web development',
    icon: `${rootLink}logo-youcode.png.png`,
    style: {
      background: 'linear-gradient(#222, #000)',
      color: '#ff8c39',
    },
  },
  rows: [
    {
      class: 'text-row',
      content: [{
        type: 'text',
        class: 'intro-text',
        value: `
        <h3 class="header-3">School</h3>
        <ul>
          <li>YouCode places the individual at the center of his pedagogy while</li>
          <li>at the same time helping him develop a synergy of work with other students.</li>
          <li>YouCode : <a href="http://www.youcode.ma/">www.youcode.ma</a> </li>
        </ul>
        `,
      }]
    }, {
      style: {
        backgroundColor: '#B2DFDB',
      },
      class: 'row-collapse flex-mobile',
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}IMG_1663.jpg`,
        alt: 'yc',
        caption: 'View YouCode'
      }, {
        type: 'image',
        class: 'flex-double',
        height: '50%',
        value: `${rootLink}IMG_1485.jpg`,
        alt: 'yc',
      }],
    }, {
      class: 'flex-mobile',
      style: {
        backgroundColor: '#B2DFDB',
      },
      content: [{
        type: 'image',
        height: '100%',
        value: `${rootLink}74D711C6-AFA6-436E-8326-21A7C3605710.jpg`,
        alt: 'yc',
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}AD6A77E0-27F5-4947-8447-6C7F8DAEC142.jpg`,
        alt: 'yc',
      }, {
        type: 'image',
        height: '100%',
        value: `${rootLink}AEFC1235-532A-4D70-9E28-153723A04A8C.jpg`,
        alt: 'Cyc',
      }],
    }, {
      class: 'footer-row',
      content: [{
        type: 'footer'
      }]
    }
  ]
};
