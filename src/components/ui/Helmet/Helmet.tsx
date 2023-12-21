import { Helmet, HelmetProvider } from "react-helmet-async";

interface HelmetProps {
  title: string;
  children?: React.ReactNode;
}

const Head = ({ title }: HelmetProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web site created portofolio Firman Subagja"
        />
        <title>{title} | Firman Subagja</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
