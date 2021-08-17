import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './styles.module.scss';

interface Card{
    title:string;
    image:string;
    information:string;
}

export function Card(){
    const cards: Card[] = [
        {
          title:"Sua Vida me Pertence",
          image:"/images/sua_vida.png",
          information:"Exibida entre 21 de dezembro de 1951 e 8 de fevereiro de 1952."},
        
        {
          title:"Pollyana",
          image:"/images/pollyana.jpg",
          information:"Exibida entre 9 de outubro de 1956 e 17 de janeiro de 1957."
        },

        {
          title:"Lever no Espaço",
          image:"/images/lever.jpg",
          information:"Exbida entre 12 de janeiro de 1957 e no do mesmo ano."
        },
        {
          title:"A Gata",
          image:"/images/gata.jpg",
          information:"Exibida entre 11 de maio de 1964 e 2 de julho de 1964."
        },

        {
          title:"O Direito de Nascer",
          image:"/images/nascer.jpg",
          information:"Exibida entre 7 de dezembro de 1964 e 13 de agosto de 1965."
        },

        {
          title:"Éramos Seis",
          image:"/images/eramos.JPG",
          information:"Exibida entre 1 de maio de 1967 e no final de 1967."
        }]; 

    return(
        <>
            <div className={styles.cardContainer}>
                <a>
                {cards.map(card=>(
                    <div className={styles.card} key={card.title}>
                        <img src={card.image} alt={card.title} />
                            <div className={styles.information}>
                                <h3>{card.title}</h3>
                                <p>{card.information}</p>
                            </div>
                    </div>
                ))}    
                </a>
            </div>
        </>
    )
}