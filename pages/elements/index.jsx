import { Selection } from "phosphor-react";
import {groq} from 'next-sanity'
import {getClient} from '../../lib/sanity.server'
import {GetSchemas, QueryZone } from 'components/nextgen/schema-related';



function Elements({elements, sections, components}) {
    return (
            <div className="x-container">
                <div className="areaGrid"> 
                    <div> 
                        <h3 className="page-title">
                            <Selection />
                            <span  className="actual-title">Elements</span>
                        </h3>
                        <GetSchemas schemas={elements} />
                    </div>
                    <QueryZone title="xElementsGenerator" query={elements} />
                 </div>   
           </div>
    );
}

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


export default Elements;