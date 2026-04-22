const StatusCodes = ({
  showTitle = true,
  showDesc = false,
  className = "",
}) => {
  const codes = [
    {
      type: "success",
      code: "200",
      desc: "indicates a successful response.",
    },
    {
      type: "error",
      code: "400",
      desc: "indicates a not enough credits.",
    },
    {
      type: "error",
      code: "401",
      desc: "indicates an invalid API key.",
    },
    {
      type: "error",
      code: "422",
      desc: "indicates an error in sending data.",
    },
    {
      type: "warning",
      code: "500",
      desc: "indicates a server error — you won't be seeing these",
    },
  ];

  return (
    <div className={`${className}`}>
      {showTitle && <h3>Status Codes</h3>}
      {showDesc && (
        <p>
          Here is a list of the different categories of status codes returned by
          the CUFinder API. Use these to understand if a request was successful.
        </p>
      )}
      <ul className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3">
        {codes.map((code) => (
          <li
            key={code}
            className={`align-middle rounded-xl font-medium p-3 ${
              code.type === "success"
                ? "bg-emerald-100 text-emerald-500"
                : code.type === "warning"
                  ? "bg-amber-100 text-amber-500"
                  : "bg-rose-100 text-rose-500"
            } `}
          >
            <Icon
              icon={
                code.type === "success"
                  ? "circle-check"
                  : code.type === "warning"
                    ? "alert-circle"
                    : "circle-x"
              }
              size={32}
              className={`${code.type === "success" ? "!mint-bg-emerald-600" : code.type === "warning" ? "!mint-bg-amber-600" : "!mint-bg-rose-600"}`}
            />
            <div>
              <p className="text-lg">{code.code}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-zinc-700 capitalize">{code.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusCodes;
