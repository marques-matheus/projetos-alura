import Link from "next/link";
import LinkEstilizado from "../linkEstilizado";


function NextLink({ children, href, ...props }) {
  return (
    <Link href={href}>
      <LinkEstilizado {...props}>{children} </LinkEstilizado>
    </Link>
  );
}

export default NextLink;
