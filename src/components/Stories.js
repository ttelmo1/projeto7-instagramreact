import Story from './Story';
export default function Stories() {

    const stories = [
        {
            image: '/assets/img/9gag.svg',
            userName: '9gag'
        },
        {
            image: '/assets/img/adorable_animals.svg',
            userName: 'adorable_animals'
        },
        {
            image: '/assets/img/barked.svg',
            userName: 'barked'
        },
        {
            image: '/assets/img/bad.vibes.memes.svg',
            userName: 'bad.vibes.memes'
        },
        {
            image: '/assets/img/catanacomics.svg',
            userName: 'catanacomics'
        },
        {
            image: '/assets/img/catanacomics.svg',
            userName: 'catanacomics'
        },
        {
            image: '/assets/img/chibirdart.svg',
            userName: 'chibirdart'
        },
        {
            image: '/assets/img/meowed.svg',
            userName: 'meowed'
        }
    ]

    return (
        <div className="stories">
            {stories.map((s) => (
                <Story image={s.image} userName={s.userName} />
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}