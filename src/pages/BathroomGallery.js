import React from 'react';

const bathroomItems = [
  {
    img: '/images/grey-bathroom.jpg',
    title: 'Modern Grey Bathroom',
    price: '₹45,000',
  },
  {
    img: '/images/blue-bathroom.jpg',
    title: 'Wooden Vanity Bathroom',
    price: '₹55,000',
  },
  {
    img: '/images/grey-bathroom.jpg',
    title: 'Compact White Bathroom',
    price: '₹35,000',
  },
  {
    img: '/images/blue-bathroom.jpg',
    title: 'Luxury Black Bathroom',
    price: '₹70,000',
  },
  {
    img: '/images/grey-bathroom.jpg',
    title: 'L-Shaped Bathroom',
    price: '₹52,000',
  },
  {
    img: '/images/blue-bathroom.jpg',
    title: 'Glass Panel Bathroom',
    price: '₹65,000',
  },
  {
    img: '/images/grey-bathroom.jpg',
    title: 'Marble Finish Bathroom',
    price: '₹80,000',
  },
   {
    img: '/images/blue-bathroom.jpg',
    title: 'Royal Blue Bathroom',
    price: '₹58,000',
  },
  {
    img: '/images/grey-bathroom.jpg',
    title: 'Vintage Bathroom',
    price: '₹60,000',
  },
 
];

const BathroomGallery = () => {
  return (
    <div className="kitchen-gallery">
      <h1>Bathroom Designs</h1>

       <ul className='design-btn'>
        <li><a href="/kitchenGallery">Kitchen Designs</a> </li>
        <li><a href="/livingroomGallery">Living Room Designs</a></li>
        <li><a href="/bedroomGallery">Bedroom Designs</a></li>
        <li><a href="/bathroomGallery">Bathroom Designs</a></li>
     </ul>

      <div className="kitchen-grid">
        {bathroomItems.map((item, index) => (
          <div className="kitchen-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BathroomGallery;
