import { Link, useMatch, useResolvedPath} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <>
        <Link
          className={match ? "active" : ""}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </>
    );
}

export default CustomLink;