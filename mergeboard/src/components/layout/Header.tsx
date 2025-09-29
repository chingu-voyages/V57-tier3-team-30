import Link from "next/link";
import Image from "next/image";

interface NavLink {
  href: string;
  label: string;
}

const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/pulls/open", label: "Open PRs" },
  { href: "/pulls/closed", label: "Closed PRs" },
];

const Header: React.FC = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <header className="bg-primary-white-100 dark:bg-primary-black-100 border-b border-[#D9D9D9] py-[15px] px-[15px] flex flex-col items-center justify-between sm:flex-row  sm:gap-[20px]">
      <div className="">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            className="hidden dark:block"
            width={150}
            height={150}
          />
          <Image
            src="/logo-white.png"
            alt="Logo"
            className="block dark:hidden"
            width={494}
            height={176}
          />
        </Link>
      </div>

      <div className="flex flex-col mt-[calc(42px-15px)] gap-[34px] w-full sm:items-end text-primary-black-100 dark:text-white ">
        <time className="font-bold text-[25px] leading-[100%] tracking-[0] max-sm:hidden">
          {formattedDate}
        </time>
        <nav>
          <ul className="flex  items-center sm:items-end font-normal sm:text-[25px] justify-end text-nowrap gap-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:border-b-2 border-secondary-green-300 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
