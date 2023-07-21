import { useGetInstanceQuery } from '@sorry-cypress/dashboard/generated/graphql';
import { useAutoRefreshRate } from '@sorry-cypress/dashboard/hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { TestDetails } from './details';

export function TestDetailsView(props: { instanceId: string; testId: string }) {
  const { instanceId, testId } = props;

  const autoRefreshRate = useAutoRefreshRate();

  const { loading, error, data } = useGetInstanceQuery({
    variables: { instanceId },
    pollInterval: autoRefreshRate,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data || !data.instance) {
    return <p>No data</p>;
  }
  if (!data.instance.results) {
    return <p>Cannot find results for the spec</p>;
  }

  const test = data.instance?.results?.tests?.find((t) => t.testId === testId);

  if (!test) {
    return <p>Cannot find the specified test</p>;
  }

  if (!test) {
    return (
      <>
        <p>No such test</p>
        <Link to={`/instance/${instanceId}`}>Go back</Link>
      </>
    );
  }
  const screenshots = (data.instance.results?.screenshots ?? []).filter(
    (s) => s.testId === test.testId
  );

  return <TestDetails test={test} screenshots={screenshots} />;
}
