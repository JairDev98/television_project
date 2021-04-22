import styles from './styles.module.scss';

interface imenuItens{
    id: number;
    item:string;
}

export function Menu(){
    const menuItems: imenuItens[]= [
        {id:1, item:'Estrelas'},
        {id:2, item:'Referências'},
        {id:3, item:'Anunciantes'},
        {id:4, item:'Programação'}    
    ]

    return(
            <nav className={styles.menuContainer}>
                {menuItems.map(item=>(
                <div key={item.id}>    
                    <a href="#">
                        <h1>{item.item}</h1>
                    </a>
                </div>
                ))}
            </nav>
    )
}