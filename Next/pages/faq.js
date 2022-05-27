import NextLink from "../src/components/Link";
import { useEffect, useState } from "react";


//fetch no next, passando o valor como props para componentes
export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaServidor) => {
      return respostaServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage({faq}) {
  //   const [faq, setFaq] = useState([]);
  //   useEffect(() => {

  //   }, []);

  return (
    <div>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
      <NextLink href="/">Ir para a home</NextLink>

      <ul>
        {faq.map(({ answer, question }) => {
          return (
            <li>
              <h2>{question}</h2>
              <p>{answer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
