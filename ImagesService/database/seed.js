const db = require('./index.js');
const Images = require('./Images.js');

//100 hosts/rooms worth of data to be provided
const seedData = [
  {
    room_id: 1,
    room_photos: [
      {
        photo_id: 1,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596836172/waterBnB-images/1057x793_nbeadu.jpg'
      },
      {
        photo_id: 2,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835101/waterBnB-images/1057x793_jnom2d.jpg'
      },
      {
        photo_id: 3,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835310/waterBnB-images/1057x793_i4wntx.jpg'
      },
      {
        photo_id: 4,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835874/waterBnB-images/1057x793_ig7jpf.jpg'
      },
      {
        photo_id: 5,
        url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596835394/waterBnB-images/1057x793_omgvxu.jpg'
      }
    ],
    host_id: 1,
    host_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596842885/waterBnB-hosts/240x240_rwwaek.jpg',
    reviewers: [
      {
        reviewer_id: 1,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596845475/waterBnB-reviewers/240x320_xplrdm.jpg'
      },
      {
        reviewer_id: 2,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857581/waterBnB-reviewers/240x240_uzdjvd.jpg'
      },
      {
        reviewer_id: 3,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857507/waterBnB-reviewers/240x240_rtvuxa.jpg'
      },
      {
        reviewer_id: 4,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857422/waterBnB-reviewers/240x240_p0qz30.jpg'
      },
      {
        reviewer_id: 5,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857297/waterBnB-reviewers/240x240_o51b1z.jpg'
      },
      {
        reviewer_id: 6,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857259/waterBnB-reviewers/240x240_ienzja.jpg'
      },
      {
        reviewer_id: 7,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857530/waterBnB-reviewers/240x240_gmk0zr.jpg'
      },
      {
        reviewer_id: 8,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857685/waterBnB-reviewers/240x240_h9y0cx.jpg'
      },
      {
        reviewer_id: 9,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858158/waterBnB-reviewers/240x240_ljtfou.jpg'
      },
      {
        reviewer_id: 10,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857771/waterBnB-reviewers/240x240_zb7f0p.jpg'
      },
      {
        reviewer_id: 11,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857650/waterBnB-reviewers/240x240_ndjmlx.jpg'
      },
      {
        reviewer_id: 12,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857391/waterBnB-reviewers/240x240_xo9yef.jpg'
      },
      {
        reviewer_id: 13,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857945/waterBnB-reviewers/240x240_xpdpjk.jpg'
      },
      {
        reviewer_id: 14,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857352/waterBnB-reviewers/240x240_zetv8s.jpg'
      },
      {
        reviewer_id: 15,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596845690/waterBnB-reviewers/240x240_tvmjvj.jpg'
      },
      {
        reviewer_id: 16,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858402/waterBnB-reviewers/240x240_nbetlb.jpg'
      },
      {
        reviewer_id: 17,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857802/waterBnB-reviewers/240x240_dl0efp.jpg'
      },
      {
        reviewer_id: 18,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857897/waterBnB-reviewers/240x240_zvmdh2.jpg'
      },
      {
        reviewer_id: 19,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858482/waterBnB-reviewers/240x240_nkkqen.jpg'
      },
      {
        reviewer_id: 20,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596857369/waterBnB-reviewers/240x240_id5gn8.jpg'
      },
      {
        reviewer_id: 21,
        reviewer_image_url: 'https://res.cloudinary.com/dumikauss/image/upload/v1596858552/waterBnB-reviewers/240x240_hpxhyy.jpg'
      }
    ],
    rating: 4.80,
    review_count: 21
  }
];

const insertSeedData = function() {
  Images.create(seedData)
    .then(() => {
      console.log('successfully seeded db!');
    })
    .catch((err) => {
      console.log('error seeding db: ', err);
    });
};

insertSeedData();





//<i class="star icon"></i>