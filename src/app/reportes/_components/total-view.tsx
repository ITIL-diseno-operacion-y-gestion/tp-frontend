export function TotalView({ total }: { total: number }) {
  return (
    <div className="my-auto text-center">
      <h3 className="text-xl font-bold">Total</h3>
      <span className="text-8xl font-bold">{total}</span>
    </div>
  );
}
