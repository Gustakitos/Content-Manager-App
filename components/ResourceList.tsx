import { Resource } from "@/api/data";

interface Props {
  resources: Resource[];
}

export default function ResourceList({ resources }: Props) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <section className="section">
            <div className="columns is-multiline is-variable is-8">
              {resources.map((resource) => {
                return (
                  <div key={resource.id} className="column is-5 is-offset-1 ">
                    <div className="content is-medium">
                      <h2 className="subtitle is-5 has-text-grey">
                        May 25, 2023
                      </h2>
                      <h1 className="title has-text-black is-3">
                        {resource.title}
                      </h1>
                      <p className="has-text-dark">{resource.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
