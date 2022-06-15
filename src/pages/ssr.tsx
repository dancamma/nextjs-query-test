import { GetServerSideProps, NextPage } from "next";

const SSR: NextPage<{ date: string }> = ({ date }) => {
  console.log(new Date().toISOString());

  return (
    <div>
      <h1>SSR</h1>
      <p>Date from server side: {date}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  date: string;
}> = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};

export default SSR;
