import './Filter.css';
import triangleIcon from '../../img/triangle-icon.svg'

function Filter() {
    return (
        <div className="filter">
            <ul className="filter__box">
                <li className="filter__box-item filter__box-item_active">
                    Все
                </li>
                <li className="filter__box-item">
                    Вегетарианские
                </li>
                <li className="filter__box-item">
                    Гриль
                </li>
                <li className="filter__box-item">
                    Острые
                </li>
                <li className="filter__box-item">
                    Закрытые
                </li>
            </ul>
            <div className="filter__dropdown">
                <img className="filter__triangle-icon" src={triangleIcon} alt="Иконка фильтра"/>
                Сортировка по:&nbsp;<span className="filter__picked-item transparent-link">популярности</span>
                <ul className="dropdown-sort">
                    <li className='dropdown-sort__item dropdown-sort__item_active'>
                        популярности
                    </li>
                    <li className='dropdown-sort__item'>
                        цене
                    </li>
                    <li className='dropdown-sort__item'>
                        алфавиту
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;
