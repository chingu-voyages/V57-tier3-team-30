export const HeadlineXL = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={`text-5xl font-bold ${className}`}>{children}</h1>;
};

export const Headline = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
};

export const Subheading1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={`text-3xl font-semibold  ${className}`}>{children}</h2>;
};

export const Subheading2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
};

export const Body1 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-xl text ${className}`}>{children}</p>;
};

export const Body2 = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};

export const Caption = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export const Label = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`text-xs font-medium uppercase ${className}`}>
      {children}
    </span>
  );
};

// Usage examples:
// <Headline>Headline</Headline>
// <HeadlineXL>Headline XL</HeadlineXL>
// <Subheading>Subheading</Subheading>
// <Body>Body text</Body>
// <Caption>Caption text</Caption>
// <Label>Label text</Label>
