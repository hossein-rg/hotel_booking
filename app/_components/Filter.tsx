"use client"
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

// types
type FilterItem = 'all' | 'small' | 'medium' | 'large';
interface ButtonProps {
    activeFilter: FilterItem;
    handleFilter: (filterItem: FilterItem) => void;
    children: React.ReactNode;
}
export default function Filter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const getFilter = searchParams.get('filter');
    const handleFiltering = (filterItem: FilterItem) => {
        const urlParams = new URLSearchParams(searchParams);
        urlParams.set('filter', filterItem);
        router.replace(`${pathname}?${urlParams.toString()}`);
    }

    return (
        <div className="border border-primary-800 flex">
            <Button activeFilter="all" filter={getFilter} handleFilter={handleFiltering}>all cabins</Button>
            <Button activeFilter="small" filter={getFilter} handleFilter={handleFiltering}>1&mdash;3 guests</Button>
            <Button activeFilter="medium" filter={getFilter} handleFilter={handleFiltering}>4&mdash;7 guests</Button>
            <Button activeFilter="large" filter={getFilter} handleFilter={handleFiltering}>8&mdash;12 guests</Button>
        </div>
    )
}

const Button: React.FC<ButtonProps> = ({ children, activeFilter, handleFilter, filter }) => {
    console.log(filter)
    return (
        <button className={`${filter == activeFilter || (filter == null && activeFilter == 'all') ? 'text-primary-50 bg-primary-700' : ''} px-5 py-2 hover:bg-primary-700`} onClick={() => handleFilter(activeFilter)}>
            {children}
        </button>
    )
}
