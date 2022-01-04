export function SquareBrackets({ children }) {
  return (
    <>
      <span>&#91;</span>
      {children}
      <span>&#93;</span>
    </>
  );
}

export function RoundBrackets({ children }) {
  return (
    <>
      <span>&#40;</span>
      {children}
      <span>&#41;</span>
    </>
  );
}

export function CurlyBrackets({ children }) {
  return (
    <>
      <span>&#123;</span>
      {children}
      <span>&#125;</span>
    </>
  );
}

export function AngleBrackets({ children }) {
  return (
    <>
      <span>&lsaquo;</span>
      {children}
      <span>&rsaquo;</span>
    </>
  );
}

export function Quotations({ children }) {
  return (
    <>
      <span>&quot;</span>
      {children}
      <span>&quot;</span>
    </>
  );
}

export function Apostrophes({ children }) {
  return (
    <>
      <span>&apos;</span>
      {children}
      <span>&apos;</span>
    </>
  );
}
