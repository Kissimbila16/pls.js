import Title from "../../components/headers/titile/page";
export default function MainText({link='#', title, subtitle, style}:any) {
    return (
        <div>
            <div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">
                    <b className={style}>
                    {title}
                    </b>
                     <br />
                    {subtitle}
                    {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={style}
              width={100}
              height={24}
              priority
            /> */}
                </a>
            </div>
        </div>
    );
}