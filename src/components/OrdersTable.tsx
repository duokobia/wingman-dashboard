import { useState, useEffect } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";

interface DataRow {
    product: string;
    imageUrl: string;
    date: string;
    time: string;
    order: number;
    commissions: number;
    details: string;
}

const fetchOrders = async (): Promise<DataRow[]> => {
    const response = await new Promise<DataRow[]>((resolve) => 
        setTimeout(() => resolve([
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
            { product: 'Product Name...', imageUrl: 'https://via.placeholder.com/50', date: "24 Apr '2024 10:24 AM", time: '2h 5m', order: 120.21, commissions: 55, details: 'View Chat' },
        ]), 3000)
    ); 
    return response;
};

const OrdersTable = () => {
    const [orders, setOrders] = useState<DataRow[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const fetchedOrders = await fetchOrders();
                setOrders(fetchedOrders);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className='px-6 py-8 text-xl font-semibold text-wingman-green'>Loading orders...</div>;
    }

    if (error) {
        return <div className='px-6 py-8 text-xl font-semibold text-wingman-green'>Error fetching orders: {error}</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-wingman-lightgray ">
                        <th className="pl-4 py-4 text-left font-medium">Product</th>
                        <th className="pl-4 py-4 text-left font-medium">Date</th>
                        <th className="pl-4 py-4 text-left font-medium">Time spent</th>
                        <th className="pl-4 py-4 text-left font-medium">Order Value</th>
                        <th className="pl-4 py-4 text-left font-medium">Commission</th>
                        <th className="pl-4 py-4 text-left font-extralight"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((row, index) => ( 
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-6 font-medium flex items-center">
                                <img src={row.imageUrl} alt={row.product} className="mr-2 w-10 h-10 rounded" />
                                {row.product}
                            </td>
                            <td className="px-4 py-6 font-medium">
                                {row.date.split(' ').slice(0, -1).join(' ')} 
                                <br />
                                {row.date.split(' ').slice(-1)[0]} 
                            </td>
                            <td className="px-4 py-6 font-medium">{row.time}</td>
                            <td className="px-4 py-6 font-medium">$ {row.order}</td>
                            <td className="px-4 py-6 font-bold">${row.commissions}</td>
                            <td className="px-4 py-6 font-light flex items-center justify-end gap-3">
                                {row.details} 
                                <span className='transform rotate-[45deg]' style={{ fontSize: '30px' }}>
                                    <IoIosArrowRoundUp />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
