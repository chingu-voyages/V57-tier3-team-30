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
        <Image
          src="/logo-dark.png"
          alt="Logo"
          className="hidden dark:block"
          width={300}
          height={300}
        />
        <Image
          src="/logo-white.png"
          alt="Logo"
          className="block dark:hidden"
          width={494}
          height={176}
        />
      </div>

      <div className="flex flex-col gap-8 w-full sm:items-end text-primary-black-100 dark:text-white ">
        <time className="font-inter font-bold text-[20px] leading-[100%] tracking-[0] max-sm:hidden">
          {formattedDate}
        </time>
        <nav>
          <ul className="flex  items-center sm:items-end max-sm:justify-between sm:gap-[45px] font-normal text-[20px] sm:text-[20px] leading-[100%] tracking-[0]  text-nowrap">
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
