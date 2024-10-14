import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({href, label}) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <li>
            <Link href={href} passHref>
                <a className={isActive ? 'active' : ''}>
                    {label}
                </a>
            </Link>
        </li>
    )

}