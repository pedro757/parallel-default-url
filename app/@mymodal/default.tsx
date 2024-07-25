import { Button } from "./client";

export default function Default(props: { searchParams: { id: string } }) {
  return (
    <div style={{ color: "red" }}>
      This is the Slot searchParams: {props.searchParams.id}
      <Button />
    </div>
  );
}
