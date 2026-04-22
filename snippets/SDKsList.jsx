export const SDKsList = ({ className = "" }) => {
  const sdks = [
    {
      href: "https://github.com/CUFinder/cufinder-ts",
      title: "Typescript",
      description: "The Official TypeScript SDK for CUFinder APIs",
      imgSrc: "/images/logos/typescript.svg",
    },
    {
      href: "https://github.com/CUFinder/cufinder-py",
      title: "Python",
      description: "The Official Python SDK for CUFinder APIs",
      imgSrc: "/images/logos/python.svg",
    },
    {
      href: "https://github.com/CUFinder/cufinder-go",
      title: "Go",
      description: "The Official Go SDK for CUFinder APIs",
      imgSrc: "/images/logos/go.svg",
    },
    {
      href: "https://github.com/CUFinder/cufinder-rust",
      title: "Rust",
      description: "The Official Rust SDK for CUFinder APIs",
      imgSrc: "/images/logos/rust.svg",
      darkRevert: true,
    },
    {
      href: "https://github.com/CUFinder/cufinder-ruby",
      title: "Ruby",
      description: "The Official Ruby SDK for CUFinder APIs",
      imgSrc: "/images/logos/ruby.svg",
    },
  ];

  return (
    <div className={`divide-y divide-slate-200 divide-solid ${className}`}>
      <h2>CUFinder Official SDKs</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {sdks.map((sdk) => (
          <li key={sdk.title}>
            <a
              href={sdk.href}
              target="_blank"
              className="flex items-center gap-4"
            >
              <img
                src={sdk.imgSrc}
                alt={sdk.title}
                noZoom
                width={100}
                height={100}
                className={`w-12 !my-0 ${
                  sdk.darkRevert ? "dark:invert-100" : ""
                }`}
              />
              <div>
                <div>
                  <p className="text-sm text-gray-800 dark:text-gray-200">{sdk.title}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 leading-[1.2rem]">
                    {sdk.description}
                  </p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
