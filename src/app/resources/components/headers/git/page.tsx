export default function Gitlink({ link = '#', title }: any) {
    return (
        <div>
            <div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>
                        <i className="fa fa-facebook">  </i>
                        <i className="fa fa-google">  </i>
                        <i className="fa fa-twitter">  </i>
                        <i className="fa fa-linkedin">  </i>
                        <i className="fa fa-github">  </i>
                    </span>
                </a>
            </div>
        </div>
    );
}