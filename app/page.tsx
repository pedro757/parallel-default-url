/** Add your relevant code here for the issue to reproduce */
export default function Home(props: { searchParams: { id: string } }) {
  return (
    <div style={{ color: "blue" }}>
      This is the Page search params: {props.searchParams.id}
    </div>
  );
}
