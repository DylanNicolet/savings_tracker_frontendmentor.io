import logoSmall from '../../assets/images/logo-small.svg';
import logoLarge from '../../assets/images/logo-large.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

export default function Header() {
    return(
        <header>
            <picture>
                <source srcSet={logoLarge} media="(width >= 768px)" />
                <img src={logoSmall} alt="Logo of Savings Tracker" />
            </picture>

            <button className="btn btn--primary">
                <img src={iconPlus} alt="" aria-hidden="true" />
                New goal
            </button>
        </header>
    )
}