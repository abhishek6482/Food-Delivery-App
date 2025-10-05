export const SearchResults = ({ results }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
        width:"300px",
        // maxHeight:"300px",
        marginLeft:"40px",
      
      }}
    >
      {results.length === 0 ? (
        <p>No items found.</p>
      ) : (
        results.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{item.name}</h3>
            <p style={{ margin: "4px 0" }}>{item.description}</p>
            <p style={{ margin: "4px 0" }}>₹{item.price}</p>
            <p style={{ margin: "4px 0" }}>Category: {item.category}</p>
            <p style={{ margin: "4px 0" }}>Tags: {item.tags.join(", ")}</p>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "260px", maxWidth: "400px", marginTop: "12px", borderRadius: "6px",objectFit: "cover" }}
            />
          </div>
        ))
      )}
    </div>
  );
};