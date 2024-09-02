export default function OrderLayout({
    children,
    myorders,
    analtyics
}: Readonly<{
    children: React.ReactNode;
    myorders: React.ReactNode;
    analtyics:React.ReactNode;
}>) {
    return (
        <div className="space-y-4">
            {children}
            {analtyics}
            {myorders}
        </div>

    );
}
