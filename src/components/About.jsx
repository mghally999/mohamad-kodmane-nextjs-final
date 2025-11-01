export default function About() {
  return (
    <section id="about" style={sectionStyle}>
      <h2 style={titleStyle}>About Mohamad Kodmane Real Estate</h2>
      <p style={textStyle}>
        We specialize in Dubai’s luxury real estate sector — offering villas,
        apartments, and off-plan investments. Our mission is to redefine
        property transactions by combining transparency, insight, and
        exceptional client service.
      </p>
    </section>
  );
}

const sectionStyle = {
  maxWidth: "900px",
  margin: "100px auto",
  padding: "0 20px",
};
const titleStyle = {
  color: "#d4af37",
  fontFamily: "Playfair Display, serif",
  fontSize: "1.8rem",
  marginBottom: "10px",
};
const textStyle = { color: "#bfbfbf" };
