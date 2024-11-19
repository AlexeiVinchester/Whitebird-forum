import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import StreetviewIcon from '@mui/icons-material/Streetview';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InboxIcon from '@mui/icons-material/Inbox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import MicNoneIcon from '@mui/icons-material/MicNone';
import HelpIcon from '@mui/icons-material/Help';

export const iconMap: Record<string, React.ReactElement> = {
    email: <EmailIcon />,
    phone: <PhoneIcon />,
    website: <LanguageIcon />,
    street: <StreetviewIcon />,
    suite: <ApartmentIcon />,
    city: <LocationCityIcon />,
    zipcode: <InboxIcon />,
    geo: <LocationOnIcon />,
    companyName: <BusinessIcon />,
    companyCatchPhrase: <MicNoneIcon />,
    companyBs: <HelpIcon />,
    logOut: <LogoutIcon />,
    showFullInfo: <KeyboardArrowDownIcon />,
    hideFullInfo: <KeyboardArrowUpIcon />,
    admin: <AdminPanelSettingsIcon />,
};