import { ICardProps } from "@/interfaces/card"

const Card = (props: ICardProps) => {
    const { body } = props
    console.log("🚀 ~ Card ~ body:", body)
    
    return (
        <div className={`bg-white rounded-lg border border-gray-200 shadow-lg backdrop-blur-lg md:shadow-md p-4 flex flex-col gap-4 ${props?.className}`}>
            <header className='font-semibold  font-sans text-sm text-slate-600'>{props?.header}</header>
            <div className='space-y-3'>
                <span className='font-bold font-sans text-3xl'>{props?.title}</span>
                <div className='flex gap-1'>
                    <div>{body?.image}</div>
                    <div className='font-semibold  text-slate-600'>{body?.percentage}</div>
                    <div className='text-slate-500'>{body?.history}</div>
                </div>
            </div>
        </div>
    )
}

export default Card