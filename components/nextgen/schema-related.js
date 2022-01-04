import { BracketsCurly } from "phosphor-react";
import JSONPretty from "react-json-pretty";
import { Apostrophes, CurlyBrackets, SquareBrackets } from "./brackets";

function FieldsOf({ children }) {
  return (
    <>
      <div className="itemType">of:</div>
      <SquareBrackets>
        <div className="fieldIndent">{children}</div>
      </SquareBrackets>
    </>
  );
}

function TheFields({ children }) {
  return (
    <>
      <div className="itemType">fields:</div>
      <SquareBrackets>
        <div className="fieldIndent">{children}</div>
      </SquareBrackets>
    </>
  );
}

function GetField({ title, name, type, array, isArray }) {
  return (
    <>
      <CurlyBrackets>
        <ElementItem itemType="title" item={title} />
        <ElementItem itemType="name" item={name} />
        <ElementItem itemType="type" item={type} />
        {isArray == "arrayType" && (
          <FieldsOf>
            <GetArray itemType="array" items={array} />
          </FieldsOf>
        )}
      </CurlyBrackets>
      ,
    </>
  );
}

export function ElementItem({ item, itemType }) {
  return (
    <>
      <div className="elementItem">
        <div className="itemType">{itemType}:</div>
        <div className="itemResult">
          <Apostrophes>{item}</Apostrophes>,
        </div>
      </div>
    </>
  );
}

export function ElementType() {
  return (
    <>
      <div className="elementItem">
        <div className="itemType">type:</div>
        <div className="itemResult">
          <Apostrophes>document</Apostrophes>,
        </div>
      </div>
    </>
  );
}

export function GetArray({ items }) {
  return (
    <>
      {items.map((arrayField, index) => (
        <>
          <CurlyBrackets>
            <div className="fieldIndent">
              <ArrayElement
                key={index}
                itemType="title"
                item={`${arrayField.title} Object`}
              />
              <ArrayElement
                itemType="name"
                item={`${arrayField.name.current}Object`}
              />
              <ArrayElement itemType="type" item="object" />
              <TheFields>
                <div className="fieldIndent">
                  <CurlyBrackets>
                    <ArrayElement
                      key={index}
                      itemType="title"
                      item={arrayField.title}
                    />
                    <ArrayElement
                      key={index}
                      itemType="name"
                      item={arrayField.name.current}
                    />
                    <ArrayElement
                      key={index}
                      itemType="type"
                      item={arrayField._type}
                    />
                  </CurlyBrackets>
                </div>
              </TheFields>
              ,
            </div>
          </CurlyBrackets>
        </>
      ))}
    </>
  );
}

export function ArrayElement({ itemType, item }) {
  return (
    <>
      <ElementItem itemType={itemType} item={item} />
    </>
  );
}

export function ElementFields({ fields, title, itemType }) {
  return (
    <>
      <div className="elementFields">
        <TheFields>
          <div className="fieldIndent">
            <CurlyBrackets>
              <ElementItem itemType="title" item={title.documentTitle} />
              <ElementItem itemType="name" item={title.documentTitleName} />
              <ElementItem itemType="type" item="string" />
            </CurlyBrackets>
            ,
            <div style={{ gridAutoFlow: "column " }}>
              {fields.map((field, index) => (
                <>
                  <GetField
                    name={field.name.current}
                    title={field.title}
                    type={field._type}
                    array={field.field}
                    isArray={field._type}
                  />
                  <br />
                </>
              ))}
            </div>
          </div>
        </TheFields>
      </div>
    </>
  );
}

export function QueryZone({ title, query }) {
  return (
    <div className="queryZone">
      <p className="whatQuery">*[_type == &quot;{title}&quot;]</p>
      <JSONPretty style={{}} id="json-pretty" data={query}></JSONPretty>
    </div>
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
          <ElementFields
            itemType="fields"
            title={schema}
            fields={schema.field}
          />
          <span style={{ width: "100%" }}> &#125;;</span>
        </code>
      ))}
    </div>
  );
}
