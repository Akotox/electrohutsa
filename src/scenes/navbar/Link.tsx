import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types";

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({page, selectedPage, setSelectedPage}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;



  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-blue-400" : ""}
    transition duration-500 hover:text-secondary-500 font-medium`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link