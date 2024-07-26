//import 'bootstrap/dist/css/bootstrap.min.css';

export default function card({ titulo, conteudo, style }: any) {
    return (
        <div>
            <a
                href={'link'}
                className={style}
                target="_blank"
                rel="noopener noreferrer">
                <h2>
                    {titulo} <span>-&gt;</span>
                </h2>
                <p>{conteudo}.</p>
            </a>

        </div>);
}