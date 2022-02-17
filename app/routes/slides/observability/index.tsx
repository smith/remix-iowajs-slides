import { EuiText } from "@elastic/eui";

export default function Index() {
  return (
    <EuiText>
      <h3>Elastic</h3>
      <p>
        Using the Elastic APM RUM agent works pretty well out of the box.
        "page-load" transactions show up. I think "route-change" and others will
        show up ok too.
      </p>
      <p>
        Node-based environments work with proof of concept in{" "}
        <a href="https://github.com/smith/remix-elastic-apm">
          https://github.com/smith/remix-elastic-apm
        </a>
        .
      </p>
      <p>
        <a
          rel="noopener"
          href="https://smith-s-test-deployment.kb.centralus.azure.elastic-cloud.com:9243/app/apm/services/remix-iowajs-slides-client/overview?comparisonEnabled=true&comparisonType=day&environment=ENVIRONMENT_ALL&kuery=&rangeFrom=now-15m&rangeTo=now&transactionType=request"
          target="_blank"
        >
          (Kibana)
        </a>
      </p>
    </EuiText>
  );
}
