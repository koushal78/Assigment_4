import React, { useState } from 'react';
import Image from 'next/image';

const CenterDiv = () => {
  const [activeCategory, setActiveCategory] = useState('Our products');

  const categories = [
    'Our products',
    'Calculators',
    'Guides & FAQs'
  ];

  const cards = [
    {
      title: 'Buying your first home with Better',
      image: '/api/placeholder/200/200',
      link: 'https://media.better.com/better-com/homepage/learning-center/first-home.webp'
    },
    {
      title: 'One Day Mortgage¹',
      description: 'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.¹',
      image: '/api/placeholder/200/200',
      link: '/b/one-day-mortgage/'
    },
    {
      title: 'Better HELOC',
      description: 'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³',
      image: '/api/placeholder/200/200',
      link: '/b/heloc/'
    },
    {
      title: 'Insurance',
      image: '/api/placeholder/200/200',
      link: 'https://www.bettercover.com'
    }
  ];

  return (
    <section className="w-full pb-6 lg:pb-12 bg-white">
      <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
        {/* Header Section */}
        <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
          <h2 className="font-bold text-black leading-tight m-0 p-0 text-xl md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl">
            Got questions?<br />We've got answers
          </h2>
          
          <div className="flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal h-12 px-6 py-3 w-auto transition-all duration-200 border
                  ${activeCategory === category 
                    ? 'shadow-[0_0_0_4px_inset] border-green-900 text-green-900' 
                    : 'border-gray-200 text-gray-700 hover:border-green-900 hover:text-green-900 hover:shadow-[0_0_0_4px_inset]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6">
          {cards.map((card, index) => (
            <a 
              key={card.title}
              href={card.link}
              className="flex w-full max-w-lg cursor-pointer flex-col gap-8 rounded-lg bg-green-50 px-6 py-5 md:flex-row md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:gap-6 lg:px-12 lg:py-[35px]"
            >
              <div className="flex flex-col gap-6">
                <h4 className="font-bold leading-tight m-0 p-0 w-auto md:text-2xl text-xl text-gray-900 lg:text-xl">
                  {card.title}
                </h4>
                {card.description && (
                  <p className="hidden md:block text-sm text-gray-900">
                    {card.description}
                  </p>
                )}
                <div className="flex items-end justify-between">
                  <div className="group">
                   
                    
                  </div>
                </div>
              </div>
              <Image src='https://media.better.com/better-com/homepage/learning-center/first-home.webp' alt='photo'
                     width={800} // Set appropriate width
                     height={600} // Set appropriate height
                    />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterDiv;