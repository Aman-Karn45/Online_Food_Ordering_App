import Table from '@/components/Table';
import React from 'react';

const MyOrders = () => {
    const columns = [
        { header: 'Order ID', accessor: 'id' },
        { header: 'Items', accessor: 'items' },
        { header: 'Total', accessor: 'total' },
        { header: 'Status', accessor: 'status' },
    ];
    const data = [
        { id: 1, items: 'Pizza, Salad', total: 25.00, status: 'Pending' },
        { id: 2, items: 'Burger, Fries', total: 15.50, status: 'Completed' },
        { id: 3, items: 'Pasta, Garlic Bread', total: 18.75, status: 'Cancelled' },
        { id: 4, items: 'Sushi, Edamame', total: 30.20, status: 'Pending' },
        { id: 5, items: 'Tacos, Guacamole', total: 12.90, status: 'Completed' },
        { id: 6, items: 'Steak, Mashed Potatoes', total: 40.00, status: 'Completed' },
        { id: 7, items: 'Chicken Wings, Fries', total: 22.50, status: 'Pending' },
        { id: 8, items: 'Lasagna, Garlic Bread', total: 28.00, status: 'Cancelled' },
        { id: 9, items: 'Falafel Wrap, Hummus', total: 16.75, status: 'Completed' },
        { id: 10, items: 'Cheeseburger, Onion Rings', total: 19.00, status: 'Pending' },
        { id: 11, items: 'Ramen, Gyoza', total: 24.50, status: 'Completed' },
        { id: 12, items: 'Grilled Cheese, Tomato Soup', total: 14.25, status: 'Cancelled' },
        { id: 13, items: 'BBQ Ribs, Coleslaw', total: 32.75, status: 'Pending' },
        { id: 14, items: 'Pad Thai, Spring Rolls', total: 27.40, status: 'Completed' },
        { id: 15, items: 'Souvlaki, Tzatziki', total: 21.30, status: 'Pending' },
        { id: 16, items: 'Burrito, Chips', total: 13.90, status: 'Completed' },
        { id: 17, items: 'Chicken Caesar Salad', total: 17.50, status: 'Cancelled' },
        { id: 18, items: 'Fish and Chips', total: 20.00, status: 'Pending' },
        { id: 19, items: 'Mushroom Risotto', total: 23.00, status: 'Completed' },
        { id: 20, items: 'Greek Salad, Pita Bread', total: 15.00, status: 'Cancelled' },
    ];

    const mockOrders = {
        columns,
        data
    }

    return (
        <div className='grid grid-cols-3 grid-rows-3 gap-4'>                  
        <Table className='col-span-3 row-span-3' {...mockOrders} />
        </div>
    );
}

export default MyOrders;
