import styles from "./page.module.css";
import Card from "./resources/components/cards/page";
import MainText from "./resources/main/title/page";
import Title from "./resources/components/headers/titile/page";
import Gitlink from "./resources/components/headers/git/page";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <Title title="npm install lps-languageName" style={styles.title} />
          <div>
          <span className={styles.flex}> 
    <i className="fa fa-facebook">  </i> 
    <i className="fa fa-google">  </i> 
    <i className="fa fa-twitter">  </i> 
    <i className="fa fa-linkedin">  </i> 
    <i className="fa fa-github">  </i> 
    </span>
          </div>
        </div>

        <div className={styles.center}>
          <MainText title="pls.js" subtitle="use Programming language by CDN" style={styles.bigText} />
        </div>

        <div className={styles.grid}>
          <Card titulo="php" conteudo="context do card" style={styles.card} />
          <Card titulo="c++" conteudo="context do card" style={styles.card} />
          <Card titulo="c-sharp" conteudo="context do card" style={styles.card} />
          <Card titulo="c language" conteudo="context do card" style={styles.card} />
        </div>

      </main>
      <div className={styles.main}>
        <div className={styles.grid}>
          <Card titulo="Javascript" conteudo="context do card" style={styles.card} />
          <Card titulo="Shellscript" conteudo="context do card" style={styles.card} />
          <Card titulo="Sql" conteudo="context do card" style={styles.card} />
          <Card titulo="Java" conteudo="context do card" style={styles.card} />
        </div>

        <div className={styles.grid}>
          <Card titulo="Python" conteudo="context do card" style={styles.card} />
          <Card titulo="quickjs" conteudo="context do card" style={styles.card} />
          <Card titulo="Haskill" conteudo="context do card" style={styles.card} />
          <Card titulo="Ruby" conteudo="context do card" style={styles.card} />
        </div>

        <div className={styles.grid}>
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
        </div>

        <div className={styles.grid}>
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
          <Card titulo="domingos" conteudo="context do card" style={styles.card} />
        </div>
      </div>

    </div>
  );
}
