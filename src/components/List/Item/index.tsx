export default function Item({
  taskName,
  taskTime,
}: {
  taskName: string;
  taskTime: string;
}) {
  return (
    <li>
      <h3>{taskName}</h3>
      <span>{taskTime}</span>
    </li>
  );
}
