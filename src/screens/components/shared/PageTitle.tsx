import { Helmet } from "react-helmet-async";

interface IPageTitleProps {
  title: string;
}

export default function PageTitle({ title }: IPageTitleProps) {
  return (
    <Helmet>
      <title>{title} | Nomad Coffee</title>
    </Helmet>
  );
}
