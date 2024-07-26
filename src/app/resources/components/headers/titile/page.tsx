export default function Title({title, subtitile = '', style}:any) {
    return (
        <div>
            <p style={style}>
                {title} &nbsp;
                <code className={style}>{subtitile}</code>
            </p>
        </div>
    );
}