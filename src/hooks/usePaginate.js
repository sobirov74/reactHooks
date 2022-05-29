import { useState } from 'react';

const paginate = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const usePaginate = (data, pageSize) => {
    const [items, $items] = useState([])
    const pages = []

    const pagesCount = () => {
        const num = data?.length / pageSize;
        return Math.ceil(num);
    };

    for (let i = 1; i <= pagesCount(); i++) {
        pages.push(i);
    }

    const handlePageNumber = (page) => {
        const a = paginate(data, pageSize, page);
        $items(a);
    };


    return { items, pages, handlePageNumber }
}

export default usePaginate;