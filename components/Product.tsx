interface ProductProps {
        name: string,
        price: number,
}

export default function Product({ name, price }: ProductProps) {
  return (
    <div>
      <p>Product: {name} Price: ${price}</p>
    </div>
  );
}