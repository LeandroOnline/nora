export const metadata = {
  title: "Agreement",
  description: "Bio decode agreement",
};

export default function Agreement({ children }) {
  return (
    <div lang="en" className="Background">
      <div className="allscreen">
        <div className="biggerCard">{children}</div>
      </div>
    </div>
  );
}
