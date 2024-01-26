import React from 'react';
import './Cards.scss';
import HDPE from '../../../utils/HDPE.jpeg';
import PP from '../../../utils/PP.jpeg';
import HDPEMachine from '../../../utils/HDPEMachine.jpeg';
import { Fade } from 'react-awesome-reveal';

const cardData = [
  {
    image: PP,
    title: 'HDPE butt fusion Fittings',
    description: 'The syntax of a language is how it works. How to actually write it. Learn HTML syntax…',
  },
  {
    image: HDPE,
    title: 'Basic types of HTML tags',
    description: 'Learn about some of the most common HTML tags…',
    tags: ['HTML'],
  },
  {
    image: 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg',
    title: 'HDPE butt fusion Fittings',
  },
  {
    image: 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg',
    title: 'HDPE butt fusion Fittings',
  },

];

const Cards = () => {
  return (
    <div className='bg-transparent'>
      <div className="cards-wrapper">
        <Fade>
        {cardData.map((card, index) => (
          <main>
          <div class = "card">
          <img src={card.image} alt=""/>
          <div class="card-content">
            <h2>  
              {card.title}
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste, voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa asperiores harum? Dicta odio aut hic.
            </p>
            <button href="#" class="button">
              Find out more 
              <span class="material-symbols-outlined">
                arrow_right_alt
              </span>
            </button>
          </div>
        </div>
        </main>
        ))}
        </Fade>
      </div>
    </div>
  );
};

export default Cards;
