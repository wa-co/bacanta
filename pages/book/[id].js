import Head from "next/head";
import Header from "/components/Header";
const Movie = () => {
  return (
    <div>
      <Head>
        <title>Povestea lui Harap-Alb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article className="flex flex-col justify-center mx-8 md:mx-[15rem] py-5">
        <div className="flex flex-col justify-center items-start max-w-[1400px] mx-auto mb-16 w-full">
          <h1 className="font-bold text-5xl md:text-5xl tracking-tight mb-4">
            Povestea lui Harap-Alb
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
            <div className="flex items-center">
              <img src="https://lh3.googleusercontent.com/proxy/9uPAse40uFZSeSHj5exk0rSjFGZHBfc0W_bi_ffv7D0mXAovqr3Ebywtz3q1BmWbiLtx6OfE8vGWqLbiV2xK6MnY7_Q5KySTWWckVKdJ6l2IPPgjIx9u5cWT4syhEMaW" className="w-[2rem] rounded-full"/>
              <p className="text-[1.2rem] ml-2">
                de Ion Creanga / Dacia Literara, 1877
              </p>
            </div>
          </div>

          <div className="prose max-w-none w-full">
            {/* Date despre autor aici */}
            <h2 className="title" id="cuprins">
              <a className="anchor" href="#cuprins">
                Cuprins
              </a>
            </h2>
            <ol className="list-disc ml-5">
              <li className="my-4">
                <a href="https://google.com" className="link">Introducere</a>
              </li>
              <li className="my-4">
                <a href="https://google.com" className="link">Incadrare</a>
              </li>
              <li className="my-4">
                <a href="https://google.com" className="link">Secvente relevante</a>
              </li>
              <li className="my-4">
                <a href="https://google.com" className="link">Elemente de structura</a>
              </li>
              <li className="my-4">
                <a href="https://google.com" className="link">Incheiere</a>
              </li>
            </ol>
            <h2 className="title" id="cuprins">
              <a className="anchor" href="#incadrare">
              Incadrare
              </a>
            </h2>
            <p className="text-[#f9f9f9] text-[1.5rem]">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
            </p>
            <h2 className="title" id="cuprins">
              <a className="anchor" href="#cuprins">
              Secvente relevante
              </a>
            </h2>
            <p className="text-[#f9f9f9] text-[1.5rem]">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
            </p>
            <h2 className="title" id="cuprins">
              <a className="anchor" href="#cuprins">
              Elemente de structura
              </a>
            </h2>
            <p className="text-[#f9f9f9] text-[1.5rem]">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
            </p>
            <h2 className="title" id="cuprins">
              <a className="anchor" href="#cuprins">
              Incheiere
              </a>
            </h2>
            <p className="text-[#f9f9f9] text-[1.5rem]">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Movie;
