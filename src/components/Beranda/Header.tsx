import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }:any) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h2 className="md:text-2xl text-lg  font-bold text-color-primary ">{title}</h2>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-xl text-lg underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
