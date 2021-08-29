import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useModal } from '../../hooks/useModal';

import styles from './styles.module.scss';

interface Card{
    title:string;
    image:string;
    information:string;
    urlTitle: string;
}

export function Card(){
    const { readModalValues } = useModal();

    const cards: Card[] = [
        {
          title:"Sua Vida me Pertence",
          image:"/images/sua_vida.png",
          information:"Exibida entre 21 de dezembro de 1951 e 8 de fevereiro de 1952.",
          urlTitle:'Sua_Vida_Me_Pertence'
        },
        
        {
          title:"Pollyana",
          image:"/images/pollyana.jpg",
          information:"Exibida entre 9 de outubro de 1956 e 17 de janeiro de 1957.",
          urlTitle:'Pollyana_(telenovela)'
        },

        {
          title:"Pollyana Moça",
          image:"/images/polimoca.jpg",
          information:"Exbida entre 8 de junho de 1958 e 16 de dezembro de 1958.",
          urlTitle:'Pollyana_Mo%C3%A7a_(telenovela)'
        },

        {
          title:"A Gata",
          image:"/images/gata.jpg",
          information:"Exibida entre 11 de maio de 1964 e 2 de julho de 1964.",
          urlTitle:'A_Gata'
        },

        {
          title:"O Direito de Nascer",
          image:"/images/nascer.jpg",
          information:"Exibida entre 7 de dezembro de 1964 e 13 de agosto de 1965.",
          urlTitle:'O_Direito_de_Nascer_(1964)'
        },

        {
          title:"Beto Rockfeller",
          image:"/images/rock.jpg",
          information:"Exibida entre 4 de novembro de 1968 e 30 de novembro de 1969.",
          urlTitle:'Beto_Rockfeller'
        },];
        
    return(
        <>
            <div className={styles.cardContainer}>
                {cards.map(card=>(
                  <a 
                      key={card.title}
                      className={styles.textTag}
                      onClick={() => readModalValues({urlTitle: card.urlTitle, image:card.image})}
                  >
                    <div className={styles.card}>
                        <img src={card.image} alt={card.title}/>
                            <div className={styles.information}>
                                <h3>{card.title}</h3>
                                <p>{card.information}</p>
                            </div>
                    </div>
                    </a>
                ))}    
            </div>
        </>
    )
}