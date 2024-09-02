'use client'
import Card from '@/components/Card'
import LoadingSpinner from '@/components/LoadingSpinner';
import { ICardProps } from '@/interfaces/card'
import { useEffect, useState } from 'react';


const Analytics = () => {
  const [items, setItems] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
    const mockCardData: ICardProps[] = [
        {
          header: 'Total Orders',
          title: '18,795',
          body: {
            history: 'last 7 days'
          }
        },
        {
          header: 'Total Expense',
          title: '45,678',
          body: {
            history: 'last 30 days'
          }
        },
        {
          header: 'Pending Orders',
          title: '12',
          body: {
            history: 'last 24 hours'
          }
        },
        {
          header: 'Completed Orders',
          title: '15,674',
          body: {
            history: 'last 90 days'
          }
        },
        {
          header: 'Cancelled Orders',
          title: '923',
          body: {
            history: 'last 60 days'
          }
        }
      ];
      useEffect(() => {
        const fetchStatics = async () => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setItems(mockCardData);
          } catch (error) {
            console.error('Error fetching menu:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchStatics();
      }, []);
    
      if (loading) {
        return <LoadingSpinner/>;
      }
      
    return (
        <div className='grid grid-cols-3 gap-3'>
          {loading ? <LoadingSpinner/> : 
          items?.map((cardData,index)=>(
            <Card key = {index} {...cardData}/>
          ))}
        </div>
    )
}

export default Analytics