import styles from './styles.module.scss';

interface Posters{
    id:number;
    url: string;
    title:string;
}

export function PostersTv(){
    const posters : Posters[] = [
        {id: 1 , url:"/images/rca.jpg", title: 'RCA TUPI PRF3'},
        {id: 2 , url:"/images/beto.jpg", title: 'Beto'},
        {id: 3 , url:"/images/toddy.JPG", title: 'Patrulheiro'}
    ]

    return(
        <div className={styles.imageContainer}>
            {posters.map(poster =>(
                <a key={poster.id}>
                    <img src={poster.url} alt={poster.title} />
                </a>
            ))}
        </div>
    );
}