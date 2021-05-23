import React, {useEffect, useState} from 'react';

import './pagination.css';

const Pagination = ({total, perPage = 3, page = 1, changePage}) =>
{

    const [pages, setPages] = useState([]);

    useEffect(() =>
    {
        let minPage = Math.max(page - 2, 1);
        let maxPage = Math.min(page + 2, Math.ceil(total / perPage));
        let pagesArray = [];
        let cp = minPage;
        while (cp <= maxPage)
        {
            pagesArray.push(cp++);
        }
        setPages(pagesArray)

    }, [page, perPage, total])

    if (total <= perPage) return null;

    return (
        <div className="float-right">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        pages.map(i =>
                        {
                            let className = `page-link ${i === page && 'active'}`
                            return (
                                <li key={`paginator-page-key-${i}`} className="page-item">
                                    <button className={className}
                                            onClick={() => {if (i !== page) changePage(i)}}>{i}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
