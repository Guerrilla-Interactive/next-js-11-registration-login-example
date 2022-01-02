
import { userService } from 'services';
import { Link } from 'components';

import { Selection } from "phosphor-react";

import ErrorPage from 'next/error'
import {useRouter} from 'next/router'
import {groq} from 'next-sanity'

import {getClient} from '../../lib/sanity.server'
import JSONPretty from 'react-json-pretty';
import { map } from 'rxjs';


export async function getStaticProps() {
    const components = await getClient(true).fetch(groq`*[_type == "xComponentGenerator"]`);
    const elements = await getClient(true).fetch(groq`*[_type == "xElementGenerator"]`);
    const sections = await getClient(true).fetch(groq`*[_type == "xSectionGenerator"]`);

    return {
      props: {
       components: components,
       elements: elements,
       sections: sections,
       
      },
      revalidate: 50
    }
  }


export default Sections;

function Nbsp (){
    return (
        <>
        &nbsp;  &nbsp;   &nbsp;   
        </>
    )
}





function ElementItem({item, itemType}) {
    return (
        <>
      
        <div style={{display: "grid", textAlign: "left", gridAutoFlow: "column "}}>
            <div style={{minWidth: "4rem"}}>{itemType}:</div>
          
            <div style={{marginLeft: "", width: "15rem"}}>'{item}',</div>
        </div>
        </>
    )
}




function ElementType() {
    return (
        <>
      
        <div style={{display: "grid", textAlign: "left", gridAutoFlow: "column "}}>
            <div style={{minWidth: "4rem"}}>type:</div>
            <div style={{marginLeft: "", width: "15rem"}}>'document',</div>
        </div>
        </>
    )
}



function ElementFields({fields, itemType}) {
    return (
        <>
        <div style={{display: "grid", textAlign: "left", gridAutoFlow: "row "}}>
            <div style={{width: "7rem"}}>fields: [</div>
            <div style={{ gridAutoFlow: "column "}} >
            {fields.map((field, index) =>
            <>
            <div style={{marginLeft: "1rem"}}>
            <span> &#123; </span>
                <div style={{marginLeft: "3rem", width: "min-content", gridTemplateColumns: "1fr 1fr",  display: "grid"}}>
               
                     <div style={{minWidth: "4rem"}}>title:</div>
                    <div key={index} style={{marginLeft: "0", width: "15rem"}}>'{field.title}',</div>

                    <div style={{minWidth: "4rem"}}>name:</div>
                    <div key={index} style={{marginLeft: "0", width: "15rem"}}>'{field.name.current}',</div>

                    <div style={{minWidth: "4rem"}}>type:</div>
                    <div key={index} style={{marginLeft: "0", width: "15rem"}}>'{field._type}',</div>
                </div>
                <span> &#125;</span>,<br/> 
                </div>
                

            </>
            )}], <br />
            </div>
        </div>
  
  </>
    )
}






function Sections({elements, sections, components}) {
    return (
        <div className="">
            <div style={{minHeight: "90vh", display: "grid", alignItems: "start", alignContent: "start",}}className="x-container">
            <div className="areaGrid"> <div> <h3  className="page-title" style={{color: "white", marginTop: "rem"}}> <Selection /><span  className="actual-title">Sections</span></h3>
                <div className="code-columns" style={{display: "grid", alignItems: "start"}}>
                {sections.map((section, index) =>
                  <code key={index} style={{display: "grid", textAlign: "left", marginBottom: "2rem", justifyItems: "start"}}>
                     <span className="exportDefault"> export default &#123; </span>
                     <ElementItem itemType="title" item={section.title} />
                     <ElementItem itemType="name" item={section.name.current} />
                     <ElementType />
                     <ElementFields itemType="fields" fields={section.field} />
                      <span style={{width: "100%"}}> &#125;;</span>     
                </code>
   
  )}
               </div>
              

  </div>
  <div className="queryZone">  <p className="whatQuery">*[_type == "xSectionGenerator"]</p>
  <JSONPretty style={{}} id="json-pretty" data={sections}></JSONPretty>
  </div>
  </div>

                
            </div>
        </div>
    );
}


  