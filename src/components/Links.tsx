import Link from "next/link";

export const Links = () => {
  return (
    <ul>
      <li>
        <Link href="/use-context">useContext Demo Page</Link>
      </li>
      <li>
        <Link href="/jotai">Jotai Demo Page</Link>
      </li>
    </ul>
  );
};
