import { Link } from "react-router-dom";
import { SideNavItemProps } from "../../types/types";

const SideNavItem: React.FC<SideNavItemProps> = ({ to, icon: Icon, label }) => {
  return (
    <li className="side-nav-item">
      <Link to={to} className="px-3">
        <Icon className="inline-block w-10 h-8 mr-2 -mt-2" />
        {label}
      </Link>
    </li>
  );
};

export default SideNavItem;
