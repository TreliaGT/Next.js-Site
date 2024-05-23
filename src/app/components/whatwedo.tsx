// components/FeatureSection.js
import React from 'react';
import Image from "next/image";

const FeatureSection = () => {
  return (
    <>
      <section className="py-32 whatwedo">
        <h2 className="text-5xl text-white mb-8 font-heading">Leading companies<br />have trusted us</h2>
        <div className="container">
          {cardsData.map((card, index) => (
            <div className="card ">
            <div className="card-inner">
              <div className="box">
                <div className="imgBox">
                <Image
                            src={card.image}
                            alt={card.title}
                            width="500"
                            height="500"
                            
                        />                </div>
                <div className="icon">
                  <a href="#" className="iconBox"> <span className="material-symbols-outlined">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </span></a>
                </div>
              </div>
            </div>
            <div className="content text-white">
              <h3 className='font-heading'>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
              {card.tags.map((tag, idx) => (
                    <li key={idx} style={{ '--clr-tag': tag.color }} className="branding text-white">
                      {tag.name}
                    </li>
                  ))}
         
              </ul>
            </div>
          </div>
          ))}
        </div>
      </section>
    </>
  );
};

const cardsData = [
  {
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Trust & Co.',
    description: 'Fill out the form and the algorithm will offer the right team of experts',
    tags: [
      { name: 'branding', color: '#d3b19a' },
      { name: 'packaging', color: '#70b3b1' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Tonic',
    description: 'Fill out the form and the algorithm will offer the right team of experts',
    tags: [
      { name: 'branding', color: '#d3b19a' },
      { name: 'marketing', color: '#d05fa2' },
    ],
  },
  {
    image: 'https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Shower Gel',
    description: 'Fill out the form and the algorithm will offer the right team of experts',
    tags: [
      { name: 'branding', color: '#d3b19a' },
      { name: 'packaging', color: '#70b3b1' },
      { name: 'marketing', color: '#d05fa2' },
    ],
  },
];

export default FeatureSection;
