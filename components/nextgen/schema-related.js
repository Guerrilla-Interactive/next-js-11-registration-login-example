import JSONPretty from "react-json-pretty";

export function ElementItem({ item, itemType }) {
  return (
    <>
      <div
        style={{ display: "grid", textAlign: "left", gridAutoFlow: "column " }}
      >
        <div style={{ minWidth: "4rem" }}>{itemType}:</div>

        <div style={{ marginLeft: "", width: "15rem" }}>
          &apos;{item}&apos;,
        </div>
      </div>
    </>
  );
}

export function ElementType() {
  return (
    <>
      <div
        style={{ display: "grid", textAlign: "left", gridAutoFlow: "column " }}
      >
        <div style={{ minWidth: "4rem" }}>type:</div>
        <div style={{ marginLeft: "", width: "15rem" }}>
          &apos;document&apos;,
        </div>
      </div>
    </>
  );
}

export function ElementFields({ fields, itemType }) {
  return (
    <>
      <div style={{ display: "grid", textAlign: "left", gridAutoFlow: "row " }}>
        <div style={{ width: "7rem" }}>fields: [</div>
        <div style={{ gridAutoFlow: "column " }}>
          {fields.map((field, index) => (
            <>
              <div style={{ marginLeft: "1rem" }}>
                <span> &#123; </span>
                <div
                  style={{
                    marginLeft: "3rem",
                    width: "min-content",
                    gridTemplateColumns: "1fr 1fr",
                    display: "grid",
                  }}
                >
                  <div style={{ minWidth: "4rem" }}>title:</div>
                  <div key={index} style={{ marginLeft: "0", width: "15rem" }}>
                    &apos;{field.title}&apos;,
                  </div>

                  <div style={{ minWidth: "4rem" }}>name:</div>
                  <div key={index} style={{ marginLeft: "0", width: "15rem" }}>
                    &apos;{field.name.current}&apos;,
                  </div>

                  <div style={{ minWidth: "4rem" }}>type:</div>
                  <div key={index} style={{ marginLeft: "0", width: "15rem" }}>
                    &apos;{field._type}&apos;,
                  </div>
                </div>
                <span> &#125;</span>,<br />
              </div>
            </>
          ))}
          v ], <br />
        </div>
      </div>
    </>
  );
}
export function GetSchemas({ schemas, fields, itemType }) {
  return (
    <div
      className="code-columns"
      style={{ display: "grid", alignItems: "start" }}
    >
      {schemas.map((schema, index) => (
        <code
          key={index}
          style={{
            display: "grid",
            textAlign: "left",
            marginBottom: "2rem",
            justifyItems: "start",
          }}
        >
          <span className="exportDefault"> export default &#123; </span>
          <ElementItem itemType="title" item={schema.title} />
          <ElementItem itemType="name" item={schema.name.current} />
          <ElementType />
          <ElementFields itemType="fields" fields={schema.field} />
          <span style={{ width: "100%" }}> &#125;;</span>
        </code>
      ))}
    </div>
  );
}

export function QueryZone({ title, query }) {
  return (
    <div className="queryZone">
      {" "}
      <p className="whatQuery">*[_type == &quot;{title}&quot;]</p>
      <JSONPretty style={{}} id="json-pretty" data={query}></JSONPretty>
    </div>
  );
}
