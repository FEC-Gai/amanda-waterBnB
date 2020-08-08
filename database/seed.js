const db = require('./index.js');
//const model


const seedData = [
  {
    roomId: 10006546,
    roomImages: [
      {
        id: 1041342750,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596836172/waterBnB-images/1057x793_nbeadu.jpg'
      },
      {
        id: 1041342751,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835101/waterBnB-images/1057x793_jnom2d.jpg'
      },
      {
        id: 1041342752,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835310/waterBnB-images/1057x793_i4wntx.jpg'
      },
      {
        id: 1041342753,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835874/waterBnB-images/1057x793_ig7jpf.jpg'
      },
      {
        id: 1041342754,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835394/waterBnB-images/1057x793_omgvxu.jpg'
      }
      ],
    hostId: 52499492,
    hostImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596842885/waterBnB-hosts/240x240_rwwaek.jpg',
    reviewers: [
      {
        reviewerId: 208880077,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596845475/waterBnB-reviewers/240x320_xplrdm.jpg'
      },
      {
        reviewerId: 208880123,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857581/waterBnB-reviewers/240x240_uzdjvd.jpg'
      },
      {
        reviewerId: 208880543,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857507/waterBnB-reviewers/240x240_rtvuxa.jpg'
      },
      {
        reviewerId: 208880748,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857422/waterBnB-reviewers/240x240_p0qz30.jpg'
      },
      {
        reviewerId: 208880183,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857297/waterBnB-reviewers/240x240_o51b1z.jpg'
      },
      {
        reviewerId: 208880847,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857259/waterBnB-reviewers/240x240_ienzja.jpg'
      },
      {
        reviewerId: 208880941,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857530/waterBnB-reviewers/240x240_gmk0zr.jpg'
      },
      {
        reviewerId: 208880053,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857685/waterBnB-reviewers/240x240_h9y0cx.jpg'
      },
      {
        reviewerId: 208880162,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858158/waterBnB-reviewers/240x240_ljtfou.jpg'
      },
      {
        reviewerId: 208880743,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857771/waterBnB-reviewers/240x240_zb7f0p.jpg'
      },
      {
        reviewerId: 208880382,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857650/waterBnB-reviewers/240x240_ndjmlx.jpg'
      },
      {
        reviewerId: 208880098,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857391/waterBnB-reviewers/240x240_xo9yef.jpg'
      },
      {
        reviewerId: 208880874,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857945/waterBnB-reviewers/240x240_xpdpjk.jpg'
      },
      {
        reviewerId: 208880385,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857352/waterBnB-reviewers/240x240_zetv8s.jpg'
      },
      {
        reviewerId: 208881234,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596845690/waterBnB-reviewers/240x240_tvmjvj.jpg'
      },
      {
        reviewerId: 208882345,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858402/waterBnB-reviewers/240x240_nbetlb.jpg'
      },
      {
        reviewerId: 208889876,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857802/waterBnB-reviewers/240x240_dl0efp.jpg'
      },
      {
        reviewerId: 208887658,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857897/waterBnB-reviewers/240x240_zvmdh2.jpg'
      },
      {
        reviewerId: 208888379,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858482/waterBnB-reviewers/240x240_nkkqen.jpg'
      },
      {
        reviewerId: 208882956,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857369/waterBnB-reviewers/240x240_id5gn8.jpg'
      },
      {
        reviewerId: 208881947,
        reviewerImageUrl: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858552/waterBnB-reviewers/240x240_hpxhyy.jpg'
      }
    ],
    rating: 4.80,
    reviewCount: 21,
    starUrl: '',
    heartUrl: '',
    shareUrl: ''
  }
];


//<i class="star icon"></i>