import Carousel from 'react-slick';

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
          title:"O grande teatro Tupi",
          image:"/images/grandetupo.jpg",
          information:"Emoção, romance, tragédia, comédia, as mais famosas e prestigiadas peças tetrais dos mais luxuosos e tenues teatros agora na sua casa."},
        
        {
          title:"Reporter Esso",
          image:"/images/repoesso.png",
          information:"Com o patricinio da Esso levamos até a sua casa as noticias mais importantes para que você passe o seu dia muito bem informado."
        },

        {
          title:"Rancho Alegre",
          image:"/images/ralegre.jpg",
          information:"Muita diversão com Mazzaropi e sua turma nesse rancho onde acontecem muitas confusões e muita alegria, só na Tupi."
        },

        {
          title:"Boliche Royal",
          image:"/images/boliche.JPG",
          information:"Um festival de incriveis prêmios na sua casa, liquidificadores, fogão e uma incrivel nova geladeira, tudo através das gelatinas Royal."
        }]; 

    return(
        <>
         <h1 className={styles.titleCard}>Programação</h1>
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