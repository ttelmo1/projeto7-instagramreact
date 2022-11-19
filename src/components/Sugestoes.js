import Sugestao from './Sugestao';

export default function Sugestoes() {

    const sugestoes = [
        {
            userImage: '/assets/img/barked.svg',
            userName: 'barked',
            follow: 'Segue você',
        },
        {
            userImage: '/assets/img/meowed.svg',
            userName: 'meowed',
            follow: 'Segue você',
        },
        {
            userImage: '/assets/img/razoesparaacreditar.svg',
            userName: 'razoesparaacreditar',
            follow: 'Novo no instagram',
        },
        {
            userImage: '/assets/img/adorable_animals.svg',
            userName: 'adorable_animals',
            follow: 'Segue você',
        },
        {
            userImage: '/assets/img/smallcutecats.svg',
            userName: 'smallcutecats',
            follow: 'Segue você',
        }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map( (s) => (
                <Sugestao userImage={s.userImage} userName={s.userName} follow={s.follow} />
            ))}
        </div>
    )
}