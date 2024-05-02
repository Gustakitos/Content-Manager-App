import { Resource } from "@/api/data";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import ResourceHighlight from "@/components/ResourceHighlight";
import ResourceList from "@/components/ResourceList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  resources,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <>
        <ResourceHighlight resources={resources} />
        <Newsletter />
        <ResourceList resources={resources} />
        <Footer />
      </>
    </Layout>
  );
}

export const getServerSideProps = (async () => {
  const data = await fetch("http://localhost:3001/api/resources");

  const parsedData: Resource[] = await data.json();

  return {
    props: {
      resources: parsedData,
    },
  };
}) satisfies GetServerSideProps<{
  resources: Resource[];
}>;
