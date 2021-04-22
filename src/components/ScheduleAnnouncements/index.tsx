import styles from './styles.module.scss';

interface Announcement{
    id:number;
    announcement:string;
}

export function ScheduleAnnouncements(){
    const announcementArray: Announcement[] = [
        {id:1, announcement: "/images/amarelo.jpg"},
        {id:2, announcement: "/images/orquestra.jpg"},
        {id:3, announcement: "/images/disney.jpg"},
    ];

    return(
        <div className={styles.announcementContainer}>
            {announcementArray.map(item=>(
                <a key={item.id} >
                <img src={item.announcement} alt={item.announcement}/>
                </a>
            ))}
        </div>
    );
}