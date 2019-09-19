import React, {useState} from 'react';
import style from './Paginator.module.css';


const Paginator =  ({totalUsers,quantityUsersOnPage, onChanhePage, currentPage, portionSize = 10}) => {



    let quantityUsersPages = Math.ceil(totalUsers / quantityUsersOnPage);
    let quantityPages = [];
    for (let i = 1; i <= quantityUsersPages; i++) {
        quantityPages.push(i)
    }

    let portionCount = Math.ceil(quantityUsersPages / portionSize)
    let [portionNUmber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNUmber - 1) * portionSize +1;
    let rightPortionNumber = portionNUmber * portionSize;


    return (
        <div className={style.pageHover}>
            {portionNUmber > 1 &&  <button onClick={() => {setPortionNumber (portionNUmber -1)}}>
                prew
            </button>}



            {quantityPages.filter(p => p >= leftPortionNumber && p<= rightPortionNumber)
                .map(p => {
                    return <span key={p} onClick={() => {
                        onChanhePage(p)
                    }}
                                 className={currentPage ===
                                 p ? style.numberLInk : null}
                    > {p} </span>
            })}

            {<span> ... {quantityUsersPages}  </span>}


            {portionCount > portionNUmber &&  <button onClick={() => {setPortionNumber(portionNUmber +1)} }>
                next
            </button>}




            {/*{quantityPages.map(pages => {*/}
            {/*    return <span key={pages} onClick={() => {*/}
            {/*        onChanhePage(pages)*/}
            {/*    }}*/}
            {/*                 className={currentPage ===*/}
            {/*                 pages ? style.numberLInk : null}*/}
            {/*    > {pages} </span>*/}
            {/*})}*/}

        </div>
    )
};


export default Paginator
