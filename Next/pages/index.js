import NextLink from "../src/components/Link";


function Titulo({ children, as }) {
  const Tag = as || "h2";
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function HomePage() {
  return (
    <div>
        
      <Titulo as="h1">Alura Cases - Home Page</Titulo>
      <NextLink href="/faq">Ir para o FAQ</NextLink>
    </div>
  );
}
