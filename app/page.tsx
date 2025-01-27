import Product from "@/components/Product"
export default function Page() {
    const data = [
        { name: "T-Shirt", price: 25.99 },
        { name: "Coffee Mug", price: 12.50 },
        { name: "Notebook", price: 9.99 }
    ];
    return (
        <>


            <div className="flex flex-col w-full h-screen items-center justify-center" id="div">
                <h1 className="text-4xl">Home Page</h1>

                {/* <Product name="Lechon Beans" price={50}></Product>
                <Product name="Lechon Beef" price={50}></Product>
                <Product name="Lechon Meat" price={50}></Product>
                <Product name="Lechon Chicken" price={50}></Product> */}
            {
                data.map((item, index) => {
                    return <Product key={index} name = {item.name} price={item.price}></Product>
                })
            }
            </div>
        </>
    )
}